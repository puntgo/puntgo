const Sequelize = require('sequelize');
var sequelize = require('../../config/bin/dbconfig');


const PreResultEstimatesModel = sequelize.define('Pre_Result_Estimates', {
  title: {type: Sequelize.STRING, primaryKey: true,field:'TITLE'},
  date: {type: Sequelize.DATE, field:'DATE'},
  link: {type: Sequelize.STRING, field:'LINK'}
},{
	 tableName: 'PRE_RESULT_ESTIMATES'
});

module.exports=PreResultEstimatesModel;