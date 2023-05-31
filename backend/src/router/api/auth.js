import express from 'express'
import session from '@/iron-session'
import { googleOAuth, signOut } from '@/controller/auth'

const router = express.Router()
// google oauth method
router.post('/', session, googleOAuth)
// sign out method
router.delete('/', session, signOut)

export default router
