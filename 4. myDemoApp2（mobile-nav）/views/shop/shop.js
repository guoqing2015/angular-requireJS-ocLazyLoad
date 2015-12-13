'use strict';

//console.log(define);

//define([], function () {


    angular.module('shop', []);

    angular.module('shop').controller('shopController', ['$scope', 'loading', 'modal', function ($scope, loading, modal) {
        console.log(loading, modal);
        //loading.show();
        modal.show({text: '请填写正确的手机号码'});
    }]);



//});
