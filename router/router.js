import {Router} from "express";
import db from '../settings/db.js'

const router = Router()

router.get('/', (req, res) => {
  db.query(`SELECT * FROM 'users'`, (err, result) => {
    console.log(result)
    res.json(result)
  })
  res.json({test: 'testData'})
})

export default router
