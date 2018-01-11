(function () {
    "use strict";

    angular.module("puntgo")
        .controller("WorldIndiceController", WorldIndiceController);

    WorldIndiceController.$inject = ['$scope', '$rootScope', 'worldIndiceService'];

    function WorldIndiceController($scope, $rootScope, worldIndiceService) {
        console.log('World Indice Controller loaded.')

    }
})();
