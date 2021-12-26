import {Router} from "express";
import {getUsers, getUser, createUser} from "../model/UserModel";
import authenticateJWT from "../../../middleware/authenticateJWT";

const router = Router()

router.get('/users', authenticateJWT, async (req, res) => {
  try {
    const users = await getUsers()
    res.json(users)
  } catch ({message}) {
    res.status(400).json({message})
  }
})

router.get('/users/:id', authenticateJWT, async (req, res) => {
  try {
    const {id} = req.params
    const user = await getUser({id})
    res.json(user)
  } catch ({message}) {
    res.status(400).json({message})
  }
})

router.post('/users', authenticateJWT, async (req, res) => {
  try {
    const user = req.body
    const newUser = await createUser(user)
    res.json(newUser)
  } catch ({message}) {
    res.status(400).json({message})
  }
})


export default router;
