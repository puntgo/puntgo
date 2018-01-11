'use strict';
(function(){
 angular.module('puntgo')
 .controller('homePageController',homePageController);

 homePageController.$inject=['$scope','$rootScope','homepageService'];

 function homePageController($scope,$rootScope,homepageService){
 	console.log("homePageController loaded")

 	//Registor Globa Event
 	$rootScope.hardReload=(section)=>{
	 		var hardReloadPromise=homepageService.hardReload(section)
	 		hardReloadPromise.then((res)=>{
			switch(section){
				case 'NEWS':
					$scope.recentQueartlyNewsBlockObjList=res.data
					break;

				case 'FIIDII':
					$scope.fiiDiiBlockObj=res.data;
					$scope.fiiDiiBlockObj.date=new Date($scope.fiiDiiBlockObj.date);
					break;
				
				default:
					console.error('section is not present in hard reload')
			} 
	 	}).catch((err,res)=>{
 			console.error('Fail hardReloadPromise :-'  ,err);
 		})
 	};

 	//Load block of Fii And Dii
 	var fiiDiiBlockPromise=homepageService.getFiiAndDiiData();
 	fiiDiiBlockPromise.then((res)=>{
		 $scope.fiiDiiBlockObj=res.data;
		 $scope.fiiDiiBlockObj.date=new Date($scope.fiiDiiBlockObj.date);
 	}).catch((err,res)=>{
 		console.error('Fail fiiDiiBlockPromise :-'  + err);
 	});

 	var getRecentlyQuarterNewsPromise=homepageService.getRecentlyQuarterNews();
 	getRecentlyQuarterNewsPromise.then((res)=>{
 		$scope.recentQueartlyNewsBlockObjList=res.data;
 	}).catch((err,res)=>{
 		console.error('Fail getRecentlyQuarterNewsPromise :-'  + err);
 	});

 	
 };
})();