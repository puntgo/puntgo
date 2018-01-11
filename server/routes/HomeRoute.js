const express = require('express');
const router = express.Router();
const fiiDiiActivityService=require("../services/FiiDiiActivityService");
const newsService=require("../services/NewsService");

//Batch's
const preResultEstimatesBatch=require("../batch/PreResultEstimatesBatch");
const fiiDiiActivityBatch=require("../batch/FiiDiiActivityBatch");


router.get('/getFiiAndDiiData', function(req, res) {
   	console.log('Request Received getFiiAndDiiData ');
    fiiDiiActivityService.getMaxFiiAndDiiData().then(function(data) {
        res.json(data);
    }).catch(function(err) {
        console.log('Error In HomeRoute.getFiiAndDiiData:- While Fetching data :' + err);
        res.send(err);
    })
});

router.get('/getRecentlyQuarterNews', function(req, res) {
   	console.log('Request Received getRecentlyQuarterNews ');
    newsService.getRecentlyQuarterNews(6).then(function(data) {
        res.json(data);
    }).catch(function(err) {
        console.log('Error In HomeRoute.getRecentlyQuarterNews:- While Fetching data :' + err);
        res.send(err);
    })
});

router.get('/hardReload', function(req, res) {
    var section=req.query.section;
    console.log('Request Received hardRepload for section  '  + section);
    if(section === 'NEWS'){
        preResultEstimatesBatch.fetchPreResultFromMC().then((flag)=>{
            if(flag){
                res.redirect('getRecentlyQuarterNews');
            }
        });
    }else if(section === 'FIIDII'){
        fiiDiiActivityBatch.fetchFiiDiiDataFromMC(1).then((flag)=>{
            if(flag){
                res.redirect('getFiiAndDiiData');
            }
        });
    }
});

module.exports = router;