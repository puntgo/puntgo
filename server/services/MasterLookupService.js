var constant=require("../util/constant");
var masterLookupDao=require("../dao/MasterLookupDao");


var masterLookupService=function(){};


masterLookupService.getValue=function(key){
	masterLookupDao.getValue(key);
};


module.exports=masterLookupService;
