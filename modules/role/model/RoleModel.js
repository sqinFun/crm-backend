import Role from "@models/Role";
import {createRules} from "@modules/Rules/model/RulesModel";

import Rules from "@models/Rules";

export const getRoles = async () => {
  return await Role.findAll({
    include: Rules,
  })
}

export const getRole = async (id) => {
  return await Role.findOne({
    where: {
      id,
    },
    include: Rules,
  })
}

export const createRole = async (role) => {
  const {dataValues: newRole} = await Role.create(role)
  const Rules = await createRules(newRole.id)
  newRole.roleRule = Rules
  return newRole
}
