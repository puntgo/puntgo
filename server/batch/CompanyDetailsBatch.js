const request = require("request");
const $ = require('cheerio');
const Sequelize = require('sequelize');

const companyModel=require('../model/CompanyModel');

function fetchAndSaveBSECompany(){

	var bseUrl="http://money.rediff.com/companies/";

	request.get(bseUrl,(error, response, body) => {
	    if(error) {
	        return console.dir(error);
	    }
	    var table=$(body).find("#leftcontainer").find('table')[0];

	    for(var i=0;i<2;i++){
		    var parentTrs=$(table).find('tbody').find('tr').find('td')[i];
		    var childTable=$(parentTrs).find('table').find('tbody').find('tr');
			    childTable.each(function(index,tr){
				    var jsonObj=companyModel.build();
				    	$(tr).find('td').each(function(ind,td){
				    		if(ind==0){
				    			jsonObj.name=$(td).find('a').text();
				    		}else if(ind==1){
				    			jsonObj.bseCode=$(td).text();
				    		}
					    });
				    jsonObj.save();
			   });
	    };
	    console.log('Nifty History data recorded into table at '+ new Date());
	});
};

function fetchAndSaveNSECompany(){

	var nseUrl="http://money.rediff.com/companies/nseall";
	var count="";
	request.get(nseUrl,(error, response, body) => {
	    if(error) {
	        return console.dir(error);
	    }
	    count=$(body).find(".pagination-container-company").find('td').text().split('of')[1].substring(0,6).trim();

	if(count){
		for(var lim=0;lim<count;lim=lim+200){
			var limit=(lim+1)+"-"+(lim+200);
			nseUrl="http://money.rediff.com/companies/nseall/"+limit;
			console.log('url '  + nseUrl);
			request.get(nseUrl,(error, response, body) => {
			    if(error) {
			        return console.dir(error);
			    }
			    var table=$(body).find("#leftcontainer").find('table')[0];
			    for(var i=1;i<=2;i++){
			    	var tbodys=$(table).find('tbody')[i];
				    var childTable=$(tbodys).find('tr');
					    childTable.each(function(index,tr){
						    var jsonObj=companyModel.build();
						    	$(tr).find('td').each(function(ind,td){
						    		if(ind==0){
						    			jsonObj.name=$(td).find('a').text();
						    		}else if(ind==1){
						    			jsonObj.nseCode=$(td).text();
						    		}
							    });
						    jsonObj.save();
					   });
			    };
			    console.log('Nifty History data recorded into table at '+ new Date());
			});
		}
	}
	});

};

module.exports={
    fetchAndSaveBSECompany:fetchAndSaveBSECompany,
    fetchAndSaveNSECompany:fetchAndSaveNSECompany
};