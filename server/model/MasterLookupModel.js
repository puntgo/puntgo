var Sequelize = require('sequelize');
var sequelize = require('../../config/bin/dbconfig');

const MasterLookupModel = sequelize.define('MasterLookupModel', {
  key: {type: Sequelize.STRING, primaryKey: true,field:'KEY'},
  value: {type: Sequelize.STRING, field: 'VALUE'}
},{
	 tableName: 'MASTER_LOOKUP'
});

module.exports=MasterLookupModel;