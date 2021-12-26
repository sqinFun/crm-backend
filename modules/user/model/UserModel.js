import {User} from "@models/User";
User.sync()

export const getUsers = async () => {
  return await User.findAll()
}

export const getUser = async ({id}) => {
  return await getUserByFilter({id})
}

export const getUserByFilter = async (filter) => {
  return await User.findOne({
    where: filter
  })
}

export const createUser = async (user) => {
  const {dataValues: newUser} = await User.create(user)
  return newUser
}
