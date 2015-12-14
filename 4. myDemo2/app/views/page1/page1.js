'use strict';






angular.module('page1',[]);

angular.module('page1').controller('page1Controller',['$scope', 'service1', '$ocLazyLoad', function($scope, service1, $ocLazyLoad, AJAX){

        //console.log(AJAX);

        this.message = service1.getMessage();

        /**
         * flag to show the the scoped div
         * @type {{ready: boolean}}
         */
        $scope.module = {
            ready: false
        };

        $scope.loadModule = function () {
            $ocLazyLoad.load({
                name: 'Utils',
                files: ['scripts/modules/utils.js']
            }).then(function () {
                $scope.module.ready = true;
            });
        }

}]);



angular.module('page1').factory('service1', function(){
    return{getMessage:function(){return 'Hello from lazy loaded service';}};
});



