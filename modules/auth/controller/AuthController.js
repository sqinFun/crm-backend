import {Router} from "express";
import {login, register} from "@modules/auth/model/AuthModel";

const router = Router()

router.post('/register', async (req, res) => {
  try {
    const user = req.body
    const authData = await register(user)
    res.json(authData)

  } catch ({message}) {
    res.status(400).json({message})
  }
})
router.post('/login', async (req, res) => {
  try {
    const authData = await login(req.body)
    res.json(authData)

  } catch ({message}) {
    res.status(400).json({message})
  }
})


export default router;
