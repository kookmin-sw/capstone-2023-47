import tokenInstance from '@/model/session'

const tokenList = tokenInstance()

/**
 * @description 국민대 이메일인지 검증
 */
export const isKookminMail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@kookmin\.ac\.kr$/

  return emailRegex.test(email)
}

export let errorResponse = {
  message: '알 수 없는 에러 발생!',
  status: 500,
}

/**
 * @description 토큰 검증 middleware
 */
export const validateToken = (req, _, next) => {
  const clientToken = req.session.token
  const serverToken = tokenList.get()

  console.log('clientToken: ', clientToken)
  console.log('serverToken: ', serverToken)

  const hasToken = clientToken && serverToken.includes(clientToken)

  if (!hasToken) {
    errorResponse.message = '로그인 된 유저가 아니거나 토큰이 만료되었습니다'
    errorResponse.status = 401

    next(errorResponse)
    return
  }

  next()
}
