const preResultEstimatesModel=require('../model/PreResultEstimatesModel');

const newsDao=function(){};

newsDao.getRecentlyQuarterNews= function(limit){
	return preResultEstimatesModel.findAll({order:[['DATE','DESC']],limit: limit });
};

module.exports=newsDao;