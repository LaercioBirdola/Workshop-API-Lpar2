import { Request, Response } from 'express'
import Task from '../../models/task.entity'

export default class TaskController {
  static async delete (req: Request, res: Response) {
    const { id } = req.params
    const { userId } = req.headers

    if(!id || isNaN(Number(id))) {
      return res.status(400).json({ error: 'O id é obrigatório' })
    }

    if (!userId) return res.status(401).json({ error: 'Usuário não autenticado' })

    const task = await Task.findOneBy({id: Number(id), userId: Number(userId)})
    if (!task) {
      return res.status(404).json({ error: 'Task não encontrada' })
    }

    await task.remove()
    return res.status(204).json()
  }
    const task = new Task()
    task.title = title
    task.completed = completed ?? false
    task.userId = Number(userId)
    await task.save()

    return res.status(201).json(task)
  }
    }
    f (!title) {
        return res.status(400).json({ error: 'O título é obrigatório' })
      }

    const task = new Task()
    task.title = title
    task.completed = completed || false
    await task.save()

    return res.status(201).json(task)
  }
}