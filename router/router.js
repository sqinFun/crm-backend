import { Router } from "express";
import User from "../models/User";
import Task from "../models/Task";

const router = Router()

router.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    res.json(users)
  })
})

router.get('/users/:id', (req, res) => {
  User.find({
    _id: req.params.id,
  }, (err, users) => {
    res.json(users)
  })
})


router.post('/users', async (req, res) => {
  try {
    const dataUser = req.body
    const user = new User(dataUser)

    await user.save()
    res.json({message: 'ok'})

  } catch {

    res.status(400).json({message: 'Некорректные данные'})

  }
})

router.get('/tasks', (req, res) => {
  try {
    const nameFilter = new RegExp(req.query.name);
    console.log(req.query.name)
    Task.find({name: {'$regex': req.query.name}}, (err, tasks) => {
      res.json(tasks)
    })
  } catch {
    res.status(400).json({message: 'err'})
  }
})


router.post('/tasks', async (req, res) => {
  try {
    const dataTask = req.body
    const task = new Task(dataTask)

    await task.save()
    res.json({message: 'ok'})

  } catch {
    res.status(400).json({message: 'Некорректные данные'})
  }
})

export default router
