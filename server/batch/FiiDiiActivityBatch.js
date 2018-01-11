const request = require("request");
const $ = require('cheerio');
const Sequelize = require('sequelize');

const go=require('../util/GlobalOperation')

const fiiDiiActivity=require('../model/FiiDiiActivityModel');
const fiiDiiMonthlyActivity=require('../model/FiiDiiMonthlyActivityModel');

function fetchFiiDiiDataFromMC(freq){

	return new Promise((resolve,reject)=>{
		getPromiseUrl().then((body)=>{
			parseData(body,freq,0,fiiDiiActivity)
			console.log("FII DII Data Batch Ended")
			resolve(true)
		}).catch((err)=>{
			console.log("Error to resolved the promise of fetchFiiDiiDataFromMC ", err)
			reject(false)
		})
	})
};

function fetchFiiDiiMonthlyDataFromMC(freq){
	
		return new Promise((resolve,reject)=>{
			getPromiseUrl().then((body)=>{
				parseData(body,freq,1,fiiDiiMonthlyActivity)
				console.log("FII DII Monthly Data Batch Ended")
				resolve(true)
			}).catch((err)=>{
				console.log("Error to resolved the promise of fetchFiiDiiMonthlyDataFromMC ", err)
				reject(false)
			})
		})
	};

module.exports={
	fetchFiiDiiDataFromMC:fetchFiiDiiDataFromMC,
	fetchFiiDiiMonthlyDataFromMC:fetchFiiDiiMonthlyDataFromMC
};


function getPromiseUrl(){	
	return new Promise((resolve,reject)=>{
		var url="http://www.moneycontrol.com/stocks/marketstats/fii_dii_activity/";
		request.get(url,(error, response, body) => {
			if(error) {
				console.dir(error);
				reject(error)
			}
			resolve(body)
		})
	})
};

function parseData(body,freq,tIndex,model){
	if(freq === undefined){
		freq=1;
	}
	var table=$(body).find('.fidi_tbl')[tIndex];
	var trList=$(table).find('tbody > tr');
	trList.each(function(index,tr){
		if(freq==index){
			return false;
		}
		var json=model.build();
		$(tr).find('td').each(function(ind,td){
			var val=$(td).text().replace(",","");
			switch(ind){
				case 0:
					json.date=new Date($(td).find('a').text());
					break;
				case 1:
					json.fiiGrossSale=val;
					break;
				case 2:
					json.fiiGrossPurchase=val;
					break;
				case 3:
					json.fiiNet=val;
					break;
				case 4:
					json.diiGrossSale=val;
					break;
				case 5:
					json.diiGrossPurchase=val;
					break;
				default:
					json.diiNet=val;
			};
		});
		go.saveModel(json)
	});
}