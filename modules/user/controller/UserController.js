import {Router} from "express";
import {getUsers, getUser, addUsers} from "../model/UserModel";

const router = Router()

router.get('/users', getUsers)
router.get('/users/:id', getUser)

router.post('/users', addUsers)

export default router;
