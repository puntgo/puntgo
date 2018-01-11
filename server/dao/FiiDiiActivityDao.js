const fiiDiiActivityModel=require('../model/FiiDiiActivityModel');
const fiiDiiMonthlyActivityModel = require('../model/FiiDiiMonthlyActivityModel');

const Sequelize = require('sequelize');
const sequelize = require('../../config/bin/dbconfig');

const fiiDiiActivityDoa=function(){};

fiiDiiActivityDoa.getMaxFiiAndDiiData= function(){
	return new Promise(function(resolve,reject){
		fiiDiiActivityModel.max('date').then((maxDate)=>{
			console.log('max date ' + maxDate);
			fiiDiiActivityModel.findOne({where:{date:maxDate}}).then((result)=>{
				resolve(result);
			});
		});
	});
};

fiiDiiActivityDoa.getFiiAndDiiDataList= function(){
	return new Promise((resolve,reject)=>{
		fiiDiiActivityModel.max('date').then((maxDate)=>{
			console.log('max date ' + maxDate);
			var current=NOW()
			fiiDiiActivityModel.findAll({where: sequelize.where(sequelize.fn('month', maxDate), current+1),
			order:[['DATE','DESC']]})
			.then(resultList => {
				resolve(resultList)
			}).catch((err)=>{
				reject(err)
			})
		})
	})
};

fiiDiiActivityDoa.getFiiAndDiiMonthlyDataList = function () {
	return new Promise((resolve, reject) => {
		fiiDiiMonthlyActivityModel.findAll({ order: [['DATE', 'DESC']], limit: 9 })
			.then(resultList => {
				resolve(resultList)
			}).catch((err) => {
				reject(err)
			})
		})
};

module.exports=fiiDiiActivityDoa;

function NOW(){
	return (new Date().getMonth());
}
