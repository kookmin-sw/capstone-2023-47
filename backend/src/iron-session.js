import { ironSession } from 'iron-session/express'

const session = ironSession({
  cookieName: 'kompanion-token', 
  password: 'asdfdsajklfjwaiodrfqwieorj2qerEQWR!@#$23edaskdasdfnjk#@!$',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    // front에서 cookie를 가져오기 위해 false로 설정해둠
    httpOnly: false,
  },
})

export default session
