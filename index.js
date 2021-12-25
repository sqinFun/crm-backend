import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config({ path: './.env' });
import apiRouter from "./router/router.js";

const __dirname = path.resolve()
const PORT = process.env.PORT
const HOST = process.env.HOST
const app = express()

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const dbStart = async () => {
  try {
    await mongoose.connect(process.env.DB_URI)
    console.log('connect mongo')

  } catch (e) {
    console.log('Db err', e.message)
    // process.exit(1)
  }
}

dbStart()


app.use('/api', apiRouter)

app.listen(PORT, HOST, () =>
  console.log(`Server listens http://${HOST}:${PORT}`)
)
