import { ironSession } from 'iron-session/express'

const session = ironSession({
  cookieName: 'test_token', //TODO: 프로젝트 이름에 맞춰서 쿠키 이름 변경 필요
  password: 'asdfdsajklfjwaiodrfqwieorj2qerEQWR!@#$23edaskdasdfnjk#@!$',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
})

export default session
