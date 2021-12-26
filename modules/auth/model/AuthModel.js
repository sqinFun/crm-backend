import {getUserByFilter, createUser} from "@modules/user/model/UserModel";
import {generateAccessToken} from "../../../utils/utils";

import dotenv from 'dotenv'
dotenv.config({ path: './.env' });

import bcrypt from 'bcryptjs'
const salt = bcrypt.genSaltSync(10);

export const register = async (user) => {
  const existingUser = await getUserByFilter({
    email: user.email
  })

  if(!!existingUser)
    throw new Error('Пользователь с таким email уже существует')

  await createUser({
    ...user,
    password: bcrypt.hashSync(user.password, salt)
  })

  const token = generateAccessToken({email: user.email})

  return {token}
}

export const login = async ({email, password}) => {
  const user = await getUserByFilter({email})
  if(!user)
    throw new Error('Пользователя с таким email не существует')

  const isValidPassword = bcrypt.compareSync(password, user.password);
  if(!isValidPassword)
    throw new Error('Неправильный пароль')

  const token = generateAccessToken({email})

  return {token}
}
