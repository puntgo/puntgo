var Sequelize = require('sequelize');
var sequelize = require('../../config/bin/dbconfig');


const VolumeDataModel = sequelize.define('Volume_Data_Model', {
  date: {type: Sequelize.DATEONLY,field:'DATE'},
  name: {type: Sequelize.STRING, primaryKey: true,field: 'NAME'},
  tradedVolume: {type: Sequelize.INTEGER, field: 'TRADE_VOLUME'},
  deliveryVolume:{type: Sequelize.INTEGER, field: 'DELIVERY_VOLUME'},
  delToTradePercent: {type: Sequelize.DECIMAL(5,2), field: 'DELIVERY_TRADE_PERCENT'},
  lastPrice: {type: Sequelize.DECIMAL(11,2), field: 'LAST_PRICES'}
},{
	 tableName: 'VOLUME_DATA'
});

module.exports=VolumeDataModel;