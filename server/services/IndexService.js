var IndexDao=require('../dao/IndexDao');
const fiiDiiActivity=require('../model/FiiDiiActivityModel');


var IndexService=function(){};

var indexDao= new IndexDao();



IndexService.prototype.getAlbumSongsList=function(albumName){	
	 return "Success";
};

module.exports=IndexService;
