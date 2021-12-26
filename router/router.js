import {Router} from "express";
import UserController from "@modules/user/controller/UserController";
import RoleController from "@modules/role/controller/RoleController";
import AuthController from "@modules/auth/controller/AuthController";

const router = Router()

router.use('/', UserController)
router.use('/', RoleController)
router.use('/', AuthController)

export default router
