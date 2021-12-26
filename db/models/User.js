import {DataTypes} from "sequelize";
import sequelize from "../db";

export const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  middleName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING
  },
  roleId: {
    type: DataTypes.INTEGER,
  },
  password: {
    type: DataTypes.STRING,
  }
}, {
  timestamps: false
})
