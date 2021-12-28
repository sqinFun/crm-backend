import {Router} from "express";
import {getRoles, getRole, createRole} from "../model/RoleModel";
import authenticateJWT from "../../../middleware/authenticateJWT";

const router = Router()

router.get('/roles', authenticateJWT, async (req, res) => {
  try {
    const roles = await getRoles()
    res.json(roles)
  } catch ({message}) {
    res.status(400).json({message})
  }
})

router.get('/roles/:id', async (req, res) => {
  try {
    const {id} = req.params
    const role = await getRole(id)
    res.json(role)
  } catch ({message}) {
    res.status(400).json({message})
  }
})

router.post('/roles', async (req, res) => {
  try {
    const role = await createRole(req.body)
    res.json(role)
  } catch ({message}) {
    res.status(400).json({message})
  }
})

export default router;
