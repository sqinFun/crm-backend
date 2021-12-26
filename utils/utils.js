import jwt from 'jsonwebtoken'

import dotenv from 'dotenv'
dotenv.config({ path: './.env' });

export const generateAccessToken = (value, liveTime=24, timeUnit='h') => {
  return jwt.sign(value, process.env.TOKEN_SECRET, { expiresIn: `${liveTime}${timeUnit}` })
}
