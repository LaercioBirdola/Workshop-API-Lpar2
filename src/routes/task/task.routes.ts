import { Router } from 'express'
import TaskController from '../../controllers/task/task.controller'

const taskRoutes = Router()

taskRoutes.post('/', TaskController.show)
taskRoutes.delete('/:id', TaskController.delete)
taskRoutes.put('/:id', TaskController.update)

import authMiddleware from '../../middlewares/auth.middleware'
taskRoutes.get('/', authMiddleware, TaskController.index)
taskRoutes.get('/:id', authMiddleware, TaskController.show)
taskRoutes.post('/', authMiddleware, TaskController.store)
taskRoutes.put('/:id', authMiddleware, TaskController.update)
taskRoutes.delete('/:id', authMiddleware, TaskController.delete)


export default taskRoutes

