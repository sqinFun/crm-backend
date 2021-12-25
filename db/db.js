import dotenv from 'dotenv'
import {Sequelize} from 'sequelize'
dotenv.config({ path: './.env' });

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: 'mysql',
  host: process.env.DB_HOST,
})

const connect = async () => {
  try {
    await sequelize.authenticate()
    console.log('Соединение с БД было успешно установлено')
  } catch (e) {
    console.log('Невозможно выполнить подключение к БД: ', e)
    await sequelize.close()
  }
}

connect()



export default sequelize
