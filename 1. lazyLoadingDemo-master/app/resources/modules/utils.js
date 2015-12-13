define(function () {

    /**
     * just a dummy module for demonstration.
     */
    angular.module('Utils', [])

        .config(function () {
            console.info('CONFIG block (Utils)')
        })

        .run(function () {
            console.info('RUN block (Utils)')

        })

        .service('greeter', function () {

            this.greet = "Hello From Utils Module";

            this.getGreet = function () {
                return this.greet;
            }
        })

        .controller('utilCtrl', function (greeter) {

            this.greeting = greeter.getGreet();
        })

});