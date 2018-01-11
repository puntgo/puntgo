
const go=require('../util/GlobalOperation')

//Model
const volumeDataModel=require('../model/VolumeDataModel')
const worldIndicesModel=require('../model/WorldIndicesModel')


function refreshVolumeDataFromNB(){
	console.log("Volume Batch Started");
	let url='https://www.nirmalbang.com/ajaxPages/EquityHighestLowestDel.aspx?Exchange=NSE&Type=High&pageNo=1&PageSize=1500'
	return new Promise((resolve,reject)=>{
		go.getPromiseJson(url).then((jsonData)=>{
			saveDeliveryData(jsonData)
		})
	})
};

function refreshWorldIndicesDataFromNB(){
	console.log("World Indices Batch Started")
	return new Promise((resolve,reject)=>{
		for(let pageNo=1;pageNo<3;pageNo++){
		let url='https://www.nirmalbang.com/ajaxPages/EquityWorldIndices.aspx?&pageNo='+pageNo
			go.getPromiseJson(url).then((jsonData)=>{
				saveWorldIndiceData(jsonData)
			})
		}
	})
};

function refreshFIIDataFrom(){

};

function refreshDIIDataFrom(){
	return new Promise((resolve,reject)=>{
		

	})
};

module.exports={
	refreshVolumeDataFromNB:refreshVolumeDataFromNB,
	refreshWorldIndicesDataFromNB:refreshWorldIndicesDataFromNB

};

function saveDeliveryData(jsonData){
	let date=new Date()
	date.setDate(new Date().getDate()-1)
	return new Promise((resolve,reject)=>{
		for(let index in jsonData){
			let obj=jsonData[index]
			var json=volumeDataModel.build()
			json.date=date
			json.name=obj.S_NAME
			json.tradedVolume=obj.TradedVolume*1000
			json.deliveryVolume=obj.DeliveryVolume*1000
			json.delToTradePercent=obj.DelToTradePRNCH
			json.lastPrice=obj.LastPrice
			go.saveModel(json);
		}
	})
};
function saveWorldIndiceData(jsonData){
	return new Promise((resolve,reject)=>{
		for(let index in jsonData){
			let obj=jsonData[index]
			var json=worldIndicesModel.build()
			json.country=obj.COUNTRY
			json.worldIndices=obj.INDICES
			json.date=new Date(obj.Date)
			json.currentValue=obj.PRICE
			json.previousClose=obj.PREVIOUS
			json.high=obj.HIGH
			json.low=obj.LOW
			json.netChange=obj.CHANGE
			json.netChangePercent=obj.perChg
			go.saveModel(json);
		}
	})
};