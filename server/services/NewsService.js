
const newsDao=require('../dao/NewsDao');
var newsServices=function(){};

newsServices.getRecentlyQuarterNews= function(limit){
	var data= newsDao.getRecentlyQuarterNews(limit);
	console.log('news service  '  +data);
	return data;
};

module.exports=newsServices;
