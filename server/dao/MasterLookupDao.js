var masterLookupModel=require("../model/MasterLookupModel");


var masterLookupDao=function(){};

masterLookupDao.getValue=function(key){
	masterLookupModel.findOne({where:{key:key}}).then(function(data){
		console.log('data');
		console.log('data  =   '    + data);
	});
}


module.exports=masterLookupDao;