import Rules from "@models/Rules";

export const createRules = async (roleId, rules = {}) => {
  return Rules.create({...rules, RoleId: roleId})
}

export const updateRules = async (id, rules = {}) => {
  const newRules = rules
  delete newRules.id
  delete newRules.RoleId

  return Rules.update(newRules, {where: {id}})
}
