import tokenInstance from '@/service/token'
import { errorResponse } from '@/util'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({ log: ['query'] })

const tokenList = tokenInstance()

export const signUp = async (req, res, next) => {
  try {
    console.log('signUp api call')

    const clientToken = req.session.token
    const serverToken = tokenList.get()

    if (!clientToken || !serverToken.includes(clientToken)) {
      console.log('세션에 저장된 토큰이 없습니다.')

      errorResponse.message = '로그인 된 유저가 아니거나 토큰이 만료되었습니다'
      errorResponse.status = 401

      next(errorResponse)
      return
    }

    const { email, name, gender } = req.body

    if (!email || !name || !gender) {
      errorResponse.message = '이메일, 이름, 성별 정보가 없습니다.'
      errorResponse.status = 400

      next(errorResponse)
      return
    }

    console.log('prisma call')

    await prisma.USER.create({
      data: {
        web_mail: email,
        name,
        gender,
      },
    })

    res.sendStatus(201)
  } catch (error) {
    console.log(error)
    if (error.code === 'P2002') {
      errorResponse.message = '이미 가입된 회원'
      errorResponse.status = 400
    } else {
      errorResponse.message = '예상치 못한 에러 발생'
      errorResponse.status = 500
    }

    next(errorResponse)
  } finally {
    ;(async () => await prisma.$disconnect())()
  }
}
