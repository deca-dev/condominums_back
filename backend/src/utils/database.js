const { Sequelize } = require('sequelize');
const config = require('../config');

const db = new Sequelize({
  dialect: 'postgres',
  host: config.db.host,
  port: config.db.port,
  username: config.db.username,
  password: config.db.password,
  database: config.db.dbName,
  dialectOptions:
    process.env.NODE_ENV === 'production'
      ? {
          ssl: {
            require: true,
            rejectUnathorized: false
          }
        }
      : {},
  logging: false //elimino los logs de consola
});

module.exports = db;
