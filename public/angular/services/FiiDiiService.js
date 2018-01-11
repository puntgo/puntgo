(function() {
    angular
        .module('puntgo')
        .service('fiiDiiService', fiiDiiService);

    fiiDiiService.$inject = ['$http', '$log', '$q'];

    function fiiDiiService($http, $log, $q) {
        console.log('fii dii service loaded');
        return ({
            getFiiAndDiiDataList: getFiiAndDiiDataList,
            getFiiAndDiiMonthlyDataList: getFiiAndDiiMonthlyDataList
        });

        function getFiiAndDiiDataList() {
            var deferred = $q.defer();
            $http.get('fiidii/getFiiAndDiiDataList').
            then(function onSuccess(response) {
                deferred.resolve({
                    data: response.data
                });
            }).catch(function onError(response) {
                $log.error(response, response.data);
                deferred.reject(response);
            });
            return deferred.promise;
        };

        function getFiiAndDiiMonthlyDataList() {
            var deferred = $q.defer();
            $http.get('fiidii/getFiiAndDiiMonthlyDataList').
                then(function onSuccess(response) {
                    deferred.resolve({
                        data: response.data
                    });
                }).catch(function onError(response) {
                    $log.error(response, response.data);
                    deferred.reject(response);
                });
            return deferred.promise;
        };
    };
})();