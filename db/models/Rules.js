import {DataTypes} from "sequelize";
import sequelize from "../db";
import Role from "@models/Role";
const defaultRule = 1
const Rules = sequelize.define('Rules', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  task: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: defaultRule,
  },
  user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: defaultRule,
  },
  client: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: defaultRule,
  },
  deal: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: defaultRule,
  },
  settings: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: defaultRule,
  },
}, {
  timestamps: false
})
Role.hasOne(Rules, {onDelete: "cascade"})
Rules.belongsTo(Role, {onDelete: "cascade"})
Rules.sync({ alter: true })

export default Rules
