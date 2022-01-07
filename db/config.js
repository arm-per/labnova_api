const { config } = require("./../config/config");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgresql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
//const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;


module.exports = {
  development: {
    url: URI,
    dialect: 'postgres',
    //dialect: 'mysql',
  },
  production: {
    url: URI,
   dialect: 'postgres',
    //dialect: 'mysql',
  }
}

/*PORT=3000
DB_USER='nova'
DB_PASSWORD='L4Bnova'
DB_HOST='localhost'
DB_NAME='nova_db'
DB_PORT='5433'*/
