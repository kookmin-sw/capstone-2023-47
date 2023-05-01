import express from 'express'
import login from '@/router/api/login'
import signUp from '@/router/api/sign-up'

const router = express.Router()

router.get('/', (_, res) => res.status(200).send('박기연'))

router.use('/api/login', login)
router.use('/api/sign-up', signUp)

export default router
