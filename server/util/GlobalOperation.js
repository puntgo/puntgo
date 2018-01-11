const Sequelize = require('sequelize')
const fetch=require('node-fetch')

const go={}

go.saveModel=function (json){
    json.save().then(()=> {
        console.log('saved')
    }).catch(Sequelize.ValidationError, (msg)=> {
        console.log('Duplicate', msg)
    }).catch((err)=> {
        console.error('Error While saving pre result estimate ' ,err)
    }) 
};

go.saveOrUpodate=function(json){

};

go.isPresent=function(model,where){
    model.findOne({where:where}).then((result)=>{
        if(result){
            return true;
        }
        return false;
    })
};

go.getPromiseJson=function(url){
    try{
        return new Promise((resolve,reject)=>{
            fetch(url).then((res)=>{
                resolve(res.json())
            }).catch((promiseErr)=>{
                console.error('Error while get promise url' ,promiseErr)
                reject(promiseErr)
            })  
        })
    }catch(err){
        console.error('Error while get promise url' ,err)
    }
};

module.exports=go;