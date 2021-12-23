import {Router} from "express";
import db from '../settings/db.js'

const router = Router()

router.get('/', (req, res) => {
  db.query(`SELECT * FROM users`, (err, result) => {
    res.json(result)
  })
})

export default router
