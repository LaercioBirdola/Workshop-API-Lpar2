import { Router } from 'express'
import taskRoutes from './task/task.routes'
import authRoutes from './auth/auth.routes'
routes.use('/auth', authRoutes)

const routes = Router()

routes.use('/task', taskRoutes)

export default routes