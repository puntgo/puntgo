const Sequelize = require('sequelize');
var sequelize=require('../../config/bin/dbconfig');


const CompanyDetailsModel = sequelize.define('Company_Details', {
  id: {type: Sequelize.INTEGER, primaryKey: true,field:'ID'},
  name: {type: Sequelize.STRING, field:'NAME'},
  nseCode: {type: Sequelize.STRING, field:'NSE_CODE'},
  bseCode: {type: Sequelize.INTEGER, field:'BSE_CODE'},
  sector: {type: Sequelize.STRING, field:'SECTOR'}
},{
	 tableName: 'COMPANYS_DETAILS'
});

module.exports=CompanyDetailsModel;