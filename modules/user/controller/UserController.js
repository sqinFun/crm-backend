import {Router} from "express";
import {getUsers, addUsers} from "../model/UserModel";

const router = Router()

router.get('/users', getUsers)
router.post('/users', addUsers)

export default router;
