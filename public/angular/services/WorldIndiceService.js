(function () {
    angular
        .module('puntgo')
        .service('worldIndiceService', worldIndiceService);

    worldIndiceService.$inject = ['$http', '$log', '$q'];

    function worldIndiceService($http, $log, $q) {
        console.log('world indice service loaded');
        return ({
            getWorldIndiceData: getWorldIndiceData
        });

        function getWorldIndiceData() {
            var deferred = $q.defer();
            $http.get('indice/getWorldIndiceData').
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