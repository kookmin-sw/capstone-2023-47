import { OAuth2Client } from 'google-auth-library'
import config from '@/config'
import tokenInstance from '@/service/token'
import { validateEmail, errorResponse } from '@/util'

const client = new OAuth2Client(config.google_id)

const tokenList = tokenInstance()

// 직접 로그인 할 경우
export const login = async (req, res, next) => {
  try {
    const { token } = req.body

    if (!token) {
      errorResponse.message = '토큰이 없습니다.'
      errorResponse.status = 400

      next(errorResponse)
      return
    }

    const payload = await verifyIdToken(token)

    if (!payload) {
      errorResponse.message = '유효하지 않은 토큰입니다.'
      errorResponse.status = 400

      next(errorResponse)
      return
    }

    const { email, name, sub: id } = payload

    if (!validateEmail(email)) {
      console.log(`${email}: 국민대 학생이 아닙니다.`)
      errorResponse.message =
        '국민대 학생이 아닙니다. 국민대 학생이라면 국민대 웹 메일을 통해 로그인 해 주세요.'
      errorResponse.status = 400

      next(errorResponse)
      return
    }

    req.session.token = token

    await req.session.save()

    tokenList.set(token)

    console.log(`${email} 로그인 `)

    res.status(200).send({ name, email, id })
  } catch (catchError) {
    console.log(`구글 로그인 API 에러: ${catchError}`)
    errorResponse.message = '알 수 없는 에러 발생!'
    errorResponse.status = 500

    next(errorResponse)
  }
}

// 자동 로그인
export const autoLogin = async (req, res, next) => {
  try {
    const clientToken = req.session.token
    const serverToken = tokenList.get()
    console.log('autoLogin:: clientToken', clientToken)

    if (!clientToken || !serverToken.includes(clientToken)) {
      console.log('세션에 저장된 토큰이 없습니다.')

      errorResponse.message = '로그인 된 유저가 아니거나 토큰이 만료되었습니다'
      errorResponse.status = 401

      next(errorResponse)
      return
    }

    const { email, name, sub: id } = await verifyIdToken(clientToken)

    res.status(200).send({ name, email, id })
  } catch (error) {}
}

async function verifyIdToken(idToken) {
  const ticket = await client.verifyIdToken({
    idToken,
    audience: config.google_id,
  })

  return ticket.getPayload()
}
