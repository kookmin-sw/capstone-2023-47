import express from 'express'
import session from '@/iron-session'
import { login, autoLogin } from '@/controller/login'

const router = express.Router()

router.get('/', session, autoLogin)
router.post('/', session, login)

export default router
