// get the client
import mysql from 'mysql2'

// create the connection to database
console.log(process.env.DB_HOST)
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

connection.connect((error) => {
  if(error)
    return console.log('Ошибка подключения к БД')
  else
      return console.log('Подключение к БД')
})

export default connection
