import express from 'express'
import session from '@/iron-session'
import { validateToken } from '@/util'
import { createUser, getUser, editUser, deleteUser } from '@/controller/users'

const router = express.Router()

// GET userInfo method
router.get('/', session, validateToken, getUser)
// CREATE user method
router.post('/', session, createUser)
// UPDATE userInfo method
router.patch('/', session, editUser)
// DELETE user method
router.delete('/', session, deleteUser)

export default router
