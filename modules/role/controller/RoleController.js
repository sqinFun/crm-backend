import {Router} from "express";
import {getRoles, getRole, addRoles} from "../model/RoleModel";

const router = Router()

router.get('/roles', getRoles)
router.get('/roles/:id', getRole)

router.post('/roles', addRoles)

export default router;
