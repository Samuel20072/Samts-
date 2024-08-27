import sequelize from 'sequelize'

const db = new sequelize('samts', 'root', '',{
    host:'localhost',
    dialect: 'mysql'
})


export default db