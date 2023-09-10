const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Vijay@126126', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;

