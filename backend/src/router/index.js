import express from 'express'
import Auth from '@/router/api/auth'
import User from '@/router/api/users'

const router = express.Router()

router.get('/', (_, res) => res.status(200).send('Welcome to KomPanion'))
// Auth APIs End Point
router.use('/api/auth', Auth)
// User APIs End Point
router.use('/api/users', User)

export default router
