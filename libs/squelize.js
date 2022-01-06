const { Sequelize } = require("sequelize");
const { config } = require("./../config/config");
const setUpModels = require("./../db/models")

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
//const URI = `postgresql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

console.log(URI)

const sequelize = new Sequelize(URI, {
  //dialect: 'postgres',
  dialect: 'mysql',
  logging: false
})


setUpModels(sequelize)
//sequelize.sync();

module.exports = sequelize;
