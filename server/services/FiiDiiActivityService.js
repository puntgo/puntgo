const fiiDiiActivityDao=require('../dao/FiiDiiActivityDao');
var fiiDiiActivityService=function(){};

fiiDiiActivityService.getMaxFiiAndDiiData= function(){
	return new Promise((resolve,reject)=>{
		fiiDiiActivityDao.getMaxFiiAndDiiData().then((data)=>{
			resolve(data)
		}).catch((err)=>{
			reject(err)
		});
	});
};

fiiDiiActivityService.getFiiAndDiiDataList= function(){
	return new Promise((resolve,reject)=>{
		fiiDiiActivityDao.getFiiAndDiiDataList().then((resultList)=>{
			resolve(resultList);
		}).catch((err)=>{
			reject(err)
		});
	});
};


fiiDiiActivityService.getFiiAndDiiMonthlyDataList = function () {
	return new Promise((resolve, reject) => {
		fiiDiiActivityDao.getFiiAndDiiMonthlyDataList().then((resultList) => {
			resolve(resultList);
		}).catch((err) => {
			reject(err)
		});
	});
};

module.exports=fiiDiiActivityService;