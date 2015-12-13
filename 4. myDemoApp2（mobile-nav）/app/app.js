define( function () {
    app = angular.module('app', ['ngRoute','oc.lazyLoad', 'ajoslin.mobile-navigate']);

    /**
     * 路由配置
     */
    app.config(['$routeProvider', '$ocLazyLoadProvider',
        function ($routeProvider , $ocLazyLoadProvider) {

            /**
             * configure the ocLazyLoader to use requireJS as the loader
             */
            $ocLazyLoadProvider.config({
                loadedModules: ['app'],
                asyncLoader: require
            });

            /**
             * override angular default module api for creating components
             * @type {Function|register|register|register}
             */
            //app.controller = $controllerProvider.register;
            //app.service = $provide.service;
            //app.factory = $provide.factory;
            //app.filter = $filterProvider.register;
            //app.directive = $compileProvider.directive;

            $routeProvider
                .when('/home', {
                    templateUrl: 'views/home/home.html',
                    resolve: {
                        load: ['$ocLazyLoad' ,function($ocLazyLoad) {
                            return $ocLazyLoad.load ({
                                name: 'home',
                                files: ['styles/home.css', 'views/home/home.js']
                            })
                        }]
                    }
                })
                .when('/shop', {
                    templateUrl: 'views/shop/shop.html',
                    resolve: {
                        load:  ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load ({
                                name: 'shop',
                                files: ['styles/shop.css', 'views/shop/shop.js', 'scripts/modules/loading.js', 'scripts/modules/modal.js']
                            });
                        }]
                    }
                })
                .when('/page1', {
                    templateUrl: 'views/page1/page1.html',
                    resolve: {
                        load:  ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load ({
                                name: 'page1',
                                files: ['views/page1/page1.js', 'scripts/modules/loading.js', 'scripts/modules/modal.js']
                            });
                        }]
                    }
                })
                .otherwise({
                    redirectTo: "/home"
                })
        }]);


    /**
     * 预先缓存模版
     */
    //app.run(['$route', '$http', '$templateCache', '$timeout', '$rootScope', '$navigate', function($route, $http, $templateCache, $timeout, $rootScope, $navigate) {
        //$timeout(function() {
        //    angular.forEach($route.routes, function(r) {
        //        if (r.templateUrl) {
        //            $http.get(r.templateUrl, {cache: $templateCache});
        //        }
        //    });
        //}, 2000);

        //$rootScope.$navigate = $navigate;
    //}]);

    app.run(['$rootScope', '$navigate', function($rootScope, $navigate) {
        $rootScope.$navigate = $navigate;
    }]);


    /**
     * 初始化
     */
    app.bootstrap = function () {
        angular.bootstrap(document, ['app']);
    };

    return app;
});