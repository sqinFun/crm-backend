import {Router} from "express";
import UserController from "../modules/user/controller/UserController";

const router = Router()

router.use('/', UserController)

export default router
