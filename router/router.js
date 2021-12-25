import {Router} from "express";
import UserController from "@modules/user/controller/UserController";
import RoleController from "@modules/role/controller/RoleController";

const router = Router()

router.use('/', UserController)
router.use('/', RoleController)

export default router
