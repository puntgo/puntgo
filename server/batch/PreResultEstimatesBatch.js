const request = require("request-promise");
const $ = require('cheerio');
const fetch=require('node-fetch')
const Sequelize = require('sequelize');

const preResultEstimatesModel=require('../model/PreResultEstimatesModel');

 function fetchPreResultFromMC(){
	console.log("Pre Result Estimates Batch Started");
	return new Promise((resolve,reject)=>{
		getPromiseUrl().then((body)=>{
			parseData(body)
			console.log("Pre Result Estimates Batch Ended")
			resolve(true)
		}).catch((err)=>{
			console.log("Error to resolved the promise of fetchPreResultFromMC ", err)
			reject(false)
		})
	})
};

module.exports={
	fetchPreResultFromMC:fetchPreResultFromMC
};

function getPromiseUrl(){
	for(var pageNo=1;pageNo<2;pageNo++){
		var url="http://www.moneycontrol.com/news/pre-result-estimates-302.html/page-"+pageNo+"/"
		return new Promise((resolve,reject)=>{
			request.get(url,(err,res,body)=>{
				if(err){
					reject(err)
				}
				resolve(body)
			})
		})
	}
};

function parseData(body){
	var liList=$(body).find('#cagetory').find('[id^=newslist-]')
	liList.each((index,li) =>{
		var json=preResultEstimatesModel.build()
		var dateWithIST=$(li).find('span').text()
		var date=new Date(dateWithIST.substring(0,dateWithIST.length-6))
		json.date=date
		var anchor=($(li).find('a')[1])
		json.title=$(anchor).attr('title')
		json.link=$(anchor).attr('href')
		
		json.save().then(()=> {
			console.log('saved')
		}).catch(Sequelize.ValidationError, (msg)=> {
			console.log('Duplicate', msg)
		  }).catch((err)=> {
			console.error('Error While saving pre result estimate ' ,err)
		})
	})
};