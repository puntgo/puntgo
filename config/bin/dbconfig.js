const Sequelize = require('sequelize');
const Bluebird= require('bluebird');
const sequelize = Bluebird.promisifyAll(new Sequelize(
  "puntgo",//DB_NAME,
  "puntgo",//USERNAME, 
  "puntgo",//PASSWORD,
  {
    host: "localhost",//HOSTNAME,
    dialect: 'mysql',
    logging: false,
    freezeTableName: true,
    operatorsAliases: false,
    define: {
        timestamps: false,
        underscored: true
    }
  }
));

module.exports=sequelize;  