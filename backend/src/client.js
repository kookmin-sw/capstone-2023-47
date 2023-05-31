/**
 * 각 API 함수에서 prisma 선언 시 중복 생성 되는 이슈 있음
 * 이를 해결하기 위해 싱글턴 형식으로 prismaClient 사용
 * https://www.prisma.io/docs/guides/performance-and-optimization/connection-management#prismaclient-in-long-running-applications
 */
import { PrismaClient } from '@prisma/client'

let prisma = new PrismaClient()

export default prisma
