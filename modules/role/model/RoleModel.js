import Role from "@models/Role";
import {createRoleRules} from "@modules/roleRules/model/RoleRulesModel";

import {includeRules} from "@modules/role/model/roleUtils";
import RoleRules from "@models/RoleRules";

export const getRoles = async () => {
  return await Role.findAll({
    include: RoleRules,
  })
}

export const getRole = async (id) => {
  return await Role.findOne({
    where: {
      id,
    },
    include: RoleRules,
  })
}

export const createRole = async (role) => {
  const {dataValues: newRole} = await Role.create(role)
  const roleRules = await createRoleRules(newRole.id)
  newRole.roleRule = roleRules
  return newRole
}
