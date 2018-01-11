var Sequelize = require('sequelize');
var sequelize = require('../../config/bin/dbconfig');

const NiftyHistoryDataModel = sequelize.define('NiftyHistoryDataModel', {
  date: {type: Sequelize.DATEONLY, primaryKey: true,field:'DATE'},
  open: {type: Sequelize.DECIMAL(11,2), field: 'OPEN'},
  low: {type: Sequelize.DECIMAL(11,2), field: 'LOW'},
  high:{type: Sequelize.DECIMAL(11,2), field: 'HIGH'},
  close: {type: Sequelize.DECIMAL(11,2), field: 'CLOSE'},
  volume: {type: Sequelize.DECIMAL(11,2), field: 'VOLUME'}
},{
	 tableName: 'NIFTY_HISTORY_DATA'
});

module.exports=NiftyHistoryDataModel;