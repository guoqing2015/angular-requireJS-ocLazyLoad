define(['app'], function (app) {

    app.controller('directivesCtrl', function ($scope, loadResource) {

        /**
         * holds scope state for the switch block and
         * the input select
         * @type {{view: string, disable: string}}
         */
        $scope.state = {
            view: 'loading',
            disable : true
        };

        /**
         * holds options for the select box
         * @type {*[]}
         */
        $scope.options = [
            {key: 'First View', value: 'first'},
            {key: 'Second View', value: 'second'}
        ];

        /**
         * load some pre-defined services and change
         * the state.enable to true
         */
        $scope.loadServices = function () {
            loadResource('resources/services', ['firstService', 'secondService'])
                .then(function () {
                    $scope.state.disable = false;
                });
        };

        /**
         * load controllers based on the selected option
         * @param option
         */
        $scope.loadResource = function (option) {
            loadResource('views/' + option.value, [option.value])
                .then(function () {
                    $scope.state.view = option.value;
                })
        }

    });
});