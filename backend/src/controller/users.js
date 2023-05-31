import { errorResponse } from '@/util'
import prisma from '@/client'
import sessionInstance from '@/model/session'

const sessionList = sessionInstance()

/**
 * GET userInfo
 * client에 토큰이 있을 시 유저 정보를 가져올 수 있음
 */
export const getUser = async (req, res, next) => {
  try {
    const web_mail = req.session.token

    const user = await prisma.USER.findUnique({
      where: {
        web_mail,
      },
    })

    if (!user) {
      errorResponse.message = '가입되지 않은 회원입니다.'
      errorResponse.status = 404

      next(errorResponse)
      return
    }

    res.status(200).send(user)
  } catch (error) {
    console.log(`로그인: ${error}`)
    errorResponse.message = '알 수 없는 에러 발생!'
    errorResponse.status = 500

    next(errorResponse)
  }
}

/**
 * POST userInfo
 * 신규 유저 생성
 * db에 이메일이 있을 시 에러 반환
 */
export const createUser = async (req, res, next) => {
  try {
    const { name, gender, smoke } = req.body
    const email = req.session.token

    if (!name || !gender || typeof smoke !== 'number') {
      errorResponse.message = '잘못된 정보를 입력했습니다.'
      errorResponse.status = 400

      next(errorResponse)
      return
    }

    await prisma.USER.create({
      data: {
        web_mail: email,
        name,
        gender,
        smoke,
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
  }
}

/**
 * PATCH userInfo
 * 유저 정보 업데이트
 * 프론트에서 전달 받은 데이터 인증된 이메일 유저의 정보에 반영
 * TODO: 잘못된 정보가 오는 경우에 대한 에러 핸들링 필요
 */
export const editUser = async (req, res, next) => {
  try {
    const update = req.body
    const email = req.session.token

    const updatedUserInfo = await prisma.USER.update({
      where: {
        web_mail: email,
      },
      data: {
        ...update,
      },
    })

    res.status(200).send(updatedUserInfo)
  } catch (error) {
    console.log(error)

    errorResponse.message = '예상치 못한 에러 발생'
    errorResponse.status = 500

    next(errorResponse)
  }
}

/**
 * DELETE userInfo
 * 유저 삭제
 * 인증된 이메일 유저 회원 탈퇴
 */
export const deleteUser = async (req, res, next) => {
  try {
    console.log(sessionList.get())

    const email = req.session.token

    await prisma.USER.delete({
      where: {
        web_mail: email,
      },
    })

    sessionList.remove(email)

    console.log(sessionList.get())

    res.sendStatus(204)
  } catch (error) {
    console.log(error)

    errorResponse.message = '예상치 못한 에러 발생'
    errorResponse.status = 500

    next(errorResponse)
  }
}

/**
 * # DB재설계

# 카풀 앱

~~User: 2023.04.23 완료~~

- 웹메일 (PK)
- 이름
- 성별

~~→ 구글 로그인~~

~~→ 성별 입력 API~~

Matching_Queue

- 유저 웹메일(PK, FK)
- 이름
- 성별
- 차량 보유 여부 (Bool)
- 출발(현위치)
- 도착
- 동성만 희망 여부 (Bool)
- 현재 인원수
- 30분 이내 흡연여부 (Bool)
- 흡연자 괜찮은지 여부 (Bool)

→ 카카오맵 출발지, 도착지 좌표 넘겨 받고

→ 카카오맵 백단 API 있는지 여부 조사 필요, 없으면 거리계산 로직 필요

매칭 동의

- 유저 웹메일(PK,FK)
- 매칭 동의 여부 (Bool)

→ 다른 매칭 분류 필요 ex) 찬건 - 기연, 성열 - 은호

→ 동의 한 경우 매칭 시킴, 안하면 다시 큐로

매칭

- 매칭 번호 (PK)
- 유저 웹메일(PK,FK)

→ 채팅으로 정보 넘김…
 */

/**
 * DB 재설계
 * 05.20 완료
 * USER
 * - web_mail
 * - name
 * - gender
 * - smoke
 *
 * MATCHING_INFO
 * - user_web_mail
 * - from
 * - to
 * - is_driver
 *
 * MATCHING_SUCCESS
 * - matching_no
 * - driver_web_mail
 * - passenger_web_mail
 *
 * REVIEW
 * - USER_web_mail
 * - review_score
 * - received
 * - wrote
 *
 */
