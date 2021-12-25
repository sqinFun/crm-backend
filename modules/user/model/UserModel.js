import {User} from "../../../db/models/User";
User.sync()

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch ({message}) {
    res.status(400).json({message})
  }
}

export const addUsers = async (req, res) => {
  try {
    const user = req.body
    const {dataValues: newUser} = await User.create(user)
    res.json({...newUser})

  } catch ({message}) {
    res.status(400).json({message})
  }
}
