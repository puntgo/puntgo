(function() {
    'use strict';
    angular
        .module('puntgo', ['ngRoute', 'ui.bootstrap','nvd3', 'ngProgress', 'mwl.calendar'])
        .config(config).run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'main.html'
            })
            .when('/activity', {
                templateUrl: 'fii_dii_activity.html',
                controller:'FiiDiiController'
            }).when('/indices', {
                templateUrl: 'world_indices.html'
            }).when('/note', {
                templateUrl: 'note.html'
            }).otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode(true);
    }

    function run($rootScope) {
        $rootScope.$on("$routeChangeStart", function() {
         //   NProgress.start();
        });

        $rootScope.$on("$routeChangeSuccess", function() {
          //  NProgress.done();
        });
    };
})();
