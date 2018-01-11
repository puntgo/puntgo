var Sequelize = require('sequelize');
var sequelize = require('../../config/bin/dbconfig');


const FiiDiiActivityModel = sequelize.define('FiiDiiActivityModel', {
  date: {type: Sequelize.DATEONLY, primaryKey: true,field:'DATE'},
  fiiGrossSale: {type: Sequelize.DECIMAL(11,2), field: 'FII_GROSS_SALE'},
  fiiGrossPurchase: {type: Sequelize.DECIMAL(11,2), field: 'FII_GROSS_PURCHASE'},
  fiiNet:{type: Sequelize.DECIMAL(11,2), field: 'FII_NET'},
  diiGrossSale: {type: Sequelize.DECIMAL(11,2), field: 'DII_GROSS_SALE'},
  diiGrossPurchase: {type: Sequelize.DECIMAL(11,2), field: 'DII_GROSS_PURCHASE'},
  diiNet: {type: Sequelize.DECIMAL(11,2), field: 'DII_NET'}
},{
	 tableName: 'FII_DII_ACTIVITY'
});

module.exports=FiiDiiActivityModel;