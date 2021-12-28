import RoleRules from "@models/RoleRules";

export const createRoleRules = async (roleId, rules = {}) => {
  return RoleRules.create({...rules, RoleId: roleId})
}

