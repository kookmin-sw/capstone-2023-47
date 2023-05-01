import express from 'express'
import session from '@/iron-session'

import { signUp } from '@/controller/sign-up'

const router = express.Router()

router.post('/', session, signUp)

export default router
