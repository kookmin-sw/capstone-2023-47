import './App.css'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Cookies } from 'react-cookie'

const cookie = new Cookies()

// inject script
const useScript = (url, onload) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = url
    script.onload = onload
    script.async = true
    script.defer = true
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [url, onload])
}

function App() {
  const [isMount, setIsMount] = useState(false)
  const [userInfo, setUserInfo] = useState(null)
  const signInBtn = useRef()

  // Oauth callback function
  const onSignInCallback = async (response) => {
    try {
      const res = await axios.post(
        'http://localhost:3000/api/login',
        {
          token: response.credential,
        },
        { withCredentials: true }
      )

      if (res.status === 200) setUserInfo(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  useScript('https://accounts.google.com/gsi/client', () => {
    window.google.accounts.id.initialize({
      client_id: '905415143432-svb6bd5dpsklksu0adou831avffdu7k3.apps.googleusercontent.com',
      callback: onSignInCallback,
    })
    window.google.accounts.id.renderButton(signInBtn.current, {
      width: '250',
      type: 'icon',
      shape: 'circle',
    })
  })

  // auto login
  useEffect(() => {
    setIsMount(true)

    if (!isMount) return
    const autoLogin = async () => {
      const { data } = await axios.get('http://localhost:3000/api/login', { withCredentials: true })
      setUserInfo(data)
    }

    const myCookie = cookie.get('test_token')
    console.log(myCookie)

    if (myCookie) autoLogin()
  }, [isMount])

  return (
    <>
      {userInfo && <div>{userInfo.name}</div>}
      <button ref={signInBtn}></button>
    </>
  )
}

export default App
