(function() {
  "use strict";

   angular.module("puntgo")
  .controller("FiiDiiController", FiiDiiController);

  FiiDiiController.$inject=['$scope','$rootScope','fiiDiiService'];
  
  function FiiDiiController($scope,$rootScope,fiiDiiService) {
    console.log('FiiDii Controller loaded.')

    $scope.fiiDiiDataListPromise=fiiDiiService.getFiiAndDiiDataList();
    $scope.fiiDiiDataListPromise.then((res)=>{
      $scope.fiiDiiDataList=res.data;
      $scope.dii=[];
      $scope.fii=[];
      $scope.fiiDiiDataList.forEach((obj)=>{
        $scope.dii.push({'label':obj.date,'value':obj.diiNet});
        $scope.fii.push({'label':obj.date,'value':obj.fiiNet});
          
      })
    }).catch((err,res)=>{
      console.error('Fail fiiDiiDataListPromise :-'  + err);
    });

    $scope.fiiDiiMonthlyDataListPromise = fiiDiiService.getFiiAndDiiMonthlyDataList();
    $scope.fiiDiiMonthlyDataListPromise.then((res) => {
        $scope.fiiDiiMonthlyDataList = res.data;
        $scope.dii = [];
        $scope.fii = [];
        var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
            "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

        $scope.fiiDiiMonthlyDataList.forEach((obj) => {
            var date = new Date(obj.date)
            date.setDate(date.getDate() - 1)
            date = monthNames[date.getMonth()+1] + "-" + date.getFullYear()
            $scope.dii.push({ 'label': date, 'value': obj.diiNet });
            $scope.fii.push({ 'label': date, 'value': obj.fiiNet });

        })
        $rootScope.barChartData = [
            {
                "key": "DII",
                "color": "#d62728",
                "values": $scope.dii
            },
            {
                "key": "FII",
                "color": "#1f77b4",
                "values": $scope.fii
            }
        ]
    }).catch((err, res) => {
        console.error('Fail fiiDiiMonthlyDataListPromise :-' + err);
    });

    $rootScope.configBarChart = {
      chart: {
          type: 'multiBarHorizontalChart',
          height: 450,
          x: function(d){return d.label;},
          y: function(d){return d.value;},
          showControls: true,
          showValues: true,
          duration: 500,
          xAxis: {
              showMaxMin: false
          },
          yAxis: {
              axisLabel: 'CRORES (In Rupess)',
              tickFormat: function(d){
                  return d3.format(',.2f')(d);
              }
          }
      }
  };
}
})();
