const express = require('express');
const router = express.Router();

const fiiDiiActivityService=require("../services/FiiDiiActivityService");

router.get('/getFiiAndDiiDataList', (req, res)=> {
   	console.log('Request Received getFiiAndDiiDataList ');
    fiiDiiActivityService.getFiiAndDiiDataList().then((list)=> {
        res.json(list);
    }).catch((err) =>{
        console.log('Error In FiiDiiRoute.getFiiAndDiiDataList:- While Fetching data :' + err);
        res.send(err);
    })
});

router.get('/getFiiAndDiiMonthlyDataList', (req, res) => {
    console.log('Request Received getFiiAndDiiDataList ');
    fiiDiiActivityService.getFiiAndDiiMonthlyDataList().then((list) => {
        res.json(list);
    }).catch((err) => {
        console.log('Error In FiiDiiRoute.getFiiAndDiiMonthlyDataList:- While Fetching data :' + err);
        res.send(err);
    })
});

module.exports = router;