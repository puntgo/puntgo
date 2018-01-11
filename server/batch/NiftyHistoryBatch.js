const request = require("request");
const $ = require('cheerio');
const Sequelize = require('sequelize');

const go = require('../util/GlobalOperation')
const util = require("../util/util");
const NiftyHistoryDataModel=require('../model/NiftyHistoryDataModel');

function fetchNiftyHistoryDataFromYF(){
	var url="https://query1.finance.yahoo.com/v8/finance/chart/%5ENSEI?formatted=true&crumb=sYawg7goeNM&lang=en-IN&region=IN&period1=1189967400&period2=1508092200&interval=1wk&events=div%7Csplit&corsDomain=in.finance.yahoo.com";
	  request.get(url,(error, response, data) => {
	    if(error) {
	        return console.dir(error);
	    }
		parseData(data)
	    console.log('Nifty History data recorded into table at '+ new Date());
	});
};

module.exports={
    fetchNiftyHistoryDataFromYF:fetchNiftyHistoryDataFromYF
};


function parseData(data){
	var json=JSON.parse(data);
	var result=json.chart.result[0];
	var length=result.timestamp.length;
	console.log("length " + length); 
	for(var i=0;i<length;i++){
		var jsonObj=NiftyHistoryDataModel.build();
		var quote=result.indicators.quote[0];
		jsonObj.date=util.convertUnixDateToDateObj(result.timestamp[i]);
		jsonObj.open=quote.open[i];
		jsonObj.low=quote.low[i];
		jsonObj.high=quote.high[i];
		jsonObj.close=quote.close[i];
		jsonObj.volume=quote.volume[i];
		go.saveModel(jsonObj)
	}  
}