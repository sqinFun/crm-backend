import {Role} from "@models/Role";
Role.sync()

export const getRoles = async (req, res) => {
  try {
    const roles = await Role.findAll()
    res.json(roles)
  } catch ({message}) {
    res.status(400).json({message})
  }
}

export const getRole = async (req, res) => {
  try {
    const {id} = req.params
    const role = await Role.findOne({
      where: {
        id,
      }
    })
    res.json(role)
  } catch ({message}) {
    res.status(400).json({message})
  }
}

export const addRoles = async (req, res) => {
  try {
    const role = req.body
    const {dataValues: newRole} = await Role.create(role)
    res.json({...newRole})

  } catch ({message}) {
    res.status(400).json({message})
  }
}
