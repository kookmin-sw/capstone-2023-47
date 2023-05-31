import './App.css'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

// 프론트에서 보낸 이메일로 색인을하던 뭔가 보내는걸로 key 색인하면 됨.
const driverList = {
  'kiyeon@pa.rk': {
    name: '박기연',
    gender: 0,
    smoking: 1,
    passngers: {
      'user1@email.com': {
        name: 'ㅋㅋㄹㅃㅃ~',
        gender: 0,
        smoking: 1,
      },
      'user2@email.com': {
        name: 'asdfafsd',
        gender: 0,
        smoking: 0,
      },
    },
  },
  'qkrrldsu@gmail.com': {
    name: '박깅녀',
    gender: 0,
    smoking: 0,
    passngers: {
      'user2@email.com': {
        name: 'asdfafsd~',
        gender: 0,
        smoking: 1,
      },
      'user3@email.com': {
        name: '나는 문어',
        gender: 0,
        smoking: 0,
      },
    },
  },
}

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
  const [isMounted, setIsMounted] = useState(false)
  const [userInfo, setUserInfo] = useState(null)
  const signInBtn = useRef()
  const iAmDrivor = {
    name: '박기연',
    gender: 0,
    smoking: 0,
    passngers: {
      'user2@email.com': {
        name: 'asdfafsd~',
        gender: 0,
        smoking: 1,
      },
      'user3@email.com': {
        name: '나는 문어',
        gender: 1,
        smoking: 0,
      },
    },
  }

  const getUser = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/api/users', { withCredentials: true })
      console.log(data)
      setUserInfo(data)
    } catch (error) {
      console.log(error)
    }
  }

  const signOut = async () => {
    try {
      const { data } = await axios.delete('http://localhost:3000/api/auth', {
        withCredentials: true,
      })

      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  // Oauth callback function
  const onSignInCallback = async (response) => {
    try {
      const res = await axios.post(
        'http://localhost:3000/api/auth',
        {
          token: response.credential,
        },
        { withCredentials: true }
      )

      if (res.status === 200) await getUser()
    } catch (error) {
      console.error('11: ', error.response.data.message)
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
    setIsMounted(() => true)
    console.log('isMounted: ', isMounted)
    if (!isMounted) return

    const token = Cookies.get('kompanion-token')

    console.log('kompanion-token', token)

    if (token) getUser()
  }, [isMounted])

  return (
    <>
      {userInfo ? <div onClick={signOut}>{userInfo.name}</div> : <button ref={signInBtn}></button>}

      {Object.keys(iAmDrivor.passngers).map((key) => (
        <div
          key={key}
          style={{ display: 'flex', gap: '10px' }}
          onClick={() => alert(`백엔드 call - ${iAmDrivor.passngers[key].name}`)}>
          <p>{iAmDrivor.passngers[key].name}</p>
          <p>{iAmDrivor.passngers[key].email}</p>
          <p>{iAmDrivor.passngers[key].gender ? '남자' : '여자'}</p>
          <p>{iAmDrivor.passngers[key].smoking ? '흡연' : '비흡연'}</p>
        </div>
      ))}
    </>
  )
}

export default App
