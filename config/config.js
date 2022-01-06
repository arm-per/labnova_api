require("dotenv").config();

const config = {
  env:        process.env.NODE_ENV || 'dev',
  port:       process.env.PORT || '3000',
  dbUser:     process.env.DB_USER || 'nova_admin',
  dbPassword: process.env.DB_PASSWORD || '20_L4Bnova_22',
  dbHost:     process.env.DB_HOST || 'localhost',
  dbName:     process.env.DB_NAME || 'nova_db',
  dbPort:     process.env.DB_PORT || '3306',
}



module.exports = { config };
