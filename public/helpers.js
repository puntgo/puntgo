angular
    .module('puntgo')
    .factory('alert', function ($uiModal) {

        function show(action, event) {
            return $uiModal.open({
                templateUrl: 'modalContent.html',
                controller: function () {
                    var vm = this;
                    vm.action = action;
                    vm.event = event;
                },
                controllerAs: 'vm'
            });
        }

        return {
            show: show
        };

    });
