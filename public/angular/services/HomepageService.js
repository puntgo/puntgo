(function() {
    angular
        .module('puntgo')
        .service('homepageService', homepageService);

    homepageService.$inject = ['$http', '$log', '$q'];

    function homepageService($http, $log, $q) {
        console.log('home service loaded');
        return ({
            getFiiAndDiiData: getFiiAndDiiData,
            getRecentlyQuarterNews:getRecentlyQuarterNews,
            hardReload:hardReload
        });

        function getFiiAndDiiData() {
            var deferred = $q.defer();
            $http.get('home/getFiiAndDiiData').
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

        function getRecentlyQuarterNews() {
            var deferred = $q.defer();
            $http.get('home/getRecentlyQuarterNews').
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

        function hardReload(section) {
         //   NProgress.start();
            var deferred = $q.defer();
            $http.get('home/hardReload',{
                params: { section: section}
            }).
            then(function onSuccess(response) {
         //       NProgress.done();
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