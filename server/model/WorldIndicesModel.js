var Sequelize = require('sequelize');
var sequelize = require('../../config/bin/dbconfig');

const WorldIndicesModel = sequelize.define('World_Indices_Model', {
  country: {type: Sequelize.STRING,field:'COUNTRY'},
  worldIndices: {type: Sequelize.STRING, primaryKey: true,field: 'WORLD_INDICES'},
  date: {type: Sequelize.DATEONLY, field: 'DATE'},
  currentValue:{type: Sequelize.DECIMAL(20,2), field: 'CURRENT_VALUE'},
  previousClose: {type: Sequelize.DECIMAL(20,2), field: 'PREVIOUS_CLOSE'},
  high: {type: Sequelize.DECIMAL(20,2), field: 'HIGH'},
  low: {type: Sequelize.DECIMAL(20,2), field: 'LOW'},
  netChange: {type: Sequelize.DECIMAL(20,2), field: 'NET_CHANGE'},
  netChangePercent: {type: Sequelize.DECIMAL(5,2), field: 'NET_CHANGE_PERCENT'}
},{
	 tableName: 'WORLD_INDICES'
});

module.exports=WorldIndicesModel;