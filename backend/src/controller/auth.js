import { OAuth2Client } from 'google-auth-library'
import config from '@/config'
import sessionInstance from '@/model/session'
import { isKookminMail, errorResponse } from '@/util'

const sessionList = sessionInstance()

/**
 * @description 구글 OAuth 토큰 검증 함수
 * @returns {Promise<object>} payload
 **/
async function verifyIdToken(idToken) {
  const client = new OAuth2Client(config.google_id)

  const ticket = await client.verifyIdToken({
    idToken,
    audience: config.google_id,
  })

  return ticket.getPayload()
}

/**
 * Google OAuth
 * 1. 프론트에서 구글 로그인 시 callback으로 해당 함수 호출
 * 2. 프론트에서 받은 token으로 구글 계정이 맞는지 verify
 * 3. email과 name 등 해당 token의 정보를 가져옴
 * 4. 프론트에 email, name response ~> cookie에 암호화된 이메일 같이 전송
 * 5. 프론트에서 회원가입이 안되어 있는 이메일일 경우 4번의 email과 name을 활용해서 회원가입 진행
 * cookie에 암호화된 이메일 같이 전송를 활용해서 유저 정보 조회 등 여러 API 인증 처리 및 email key로 사용
 */
export const googleOAuth = async (req, res, next) => {
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

    const { email, name } = payload

    if (!isKookminMail(email)) {
      errorResponse.message =
        '국민대 학생이 아닙니다. 국민대 학생이라면 국민대 웹 메일을 통해 로그인 해 주세요.'
      errorResponse.status = 400

      next(errorResponse)
      return
    }

    req.session.token = email

    await req.session.save()

    sessionList.set(email)

    console.log(`${email} OAuth 완료. `)

    res.status(201).send({ email, name })
  } catch (error) {
    console.log(`구글 로그인 API 에러: ${error}`)
    errorResponse.message = '알 수 없는 에러 발생!'
    errorResponse.status = 500

    next(errorResponse)
  }
}

/**
 * 로그아웃
 * 클라이언트 쿠키 제거 및 서버 세션 인스턴스에서 해당 이메일 제거
 */
export const signOut = (req, res, next) => {
  const email = req.session.token

  sessionList.remove(email)
  req.session.destroy()

  res.sendStatus(205)
}
