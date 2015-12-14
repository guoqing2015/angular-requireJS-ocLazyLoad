'use strict';

//console.log(define);

//define([], function () {

//, 'scripts/modules/loading.js', 'scripts/modules/modal.js'

    angular.module('shop', [
        {
            name: 'loading',
            files: ['scripts/modules/loading.js']
        },
        {
            name: 'modal',
            files: ['scripts/modules/modal.js']
        }
    ]);



    angular.module('shop').controller('shopController', ['$scope', '$ocLazyLoad','loading', 'modal', function ($scope, $ocLazyLoad, loading, modal) {

        console.log(loading, modal);

         var shop = this;

        //loading.show();
        modal.show({text: '请填写正确的手机号码'});



    }]);



//});
