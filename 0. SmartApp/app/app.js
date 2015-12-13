define( function () {


    var app = angular.module('App', ['ngRoute','oc.lazyLoad', 'ajoslin.mobile-navigate']);

    /**
     * 路由配置
     */
    app.config(['$ocLazyLoadProvider','$routeProvider',
        function ($ocLazyLoadProvider,$routeProvider ) {

            $ocLazyLoadProvider.config({
                loadedModules: ['App'],
                asyncLoader: require
            });


            $routeProvider
                .when('/home', {
                    templateUrl: 'views/home/home.html',
                    resolve: {
                        load: ['$ocLazyLoad' ,function($ocLazyLoad) {
                            return $ocLazyLoad.load ({
                                name: 'home',
                                files: ['views/home/home.js']
                            })
                        }]
                    }
                })
                .when('/page1', {
                    templateUrl: 'views/page1/page1.html',
                    resolve: {
                        load:  ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load ({
                                name: 'page1',
                                files: ['views/page1/page1.js']

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
    app.run(['$route', '$http', '$templateCache', '$timeout', '$rootScope', '$navigate', function($route, $http, $templateCache, $timeout, $rootScope, $navigate) {
        $timeout(function() {
            angular.forEach($route.routes, function(r) {
                if (r.templateUrl) {
                    $http.get(r.templateUrl, {cache: $templateCache});
                }
            });
        }, 2000);

        $rootScope.$navigate = $navigate;
    }]);


    /**
     * 初始化
     */
    app.bootstrap = function () {
        angular.bootstrap(document, ['App']);
    };


/*    var app = angular.module('App', ['ui.router','oc.lazyLoad']);

    app.config(['$ocLazyLoadProvider','$stateProvider', '$urlRouterProvider',
        function ($ocLazyLoadProvider,$stateProvider, $urlRouterProvider) {

            $ocLazyLoadProvider.config({
                loadedModules: ['App'],
                asyncLoader: require
            });

            $urlRouterProvider.otherwise('/home');

            $stateProvider

                .state('home', {
                    url: '/home',
                    templateUrl: 'home.html'
                })

                .state('module1', {
                    url: '/module1',
                    templateUrl: 'module1/module1.html',
                    resolve: {
                        load: function($ocLazyLoad) {

                            return $ocLazyLoad.load ({
                                name: 'module1',
                                files: ['module1/module.js']

                            });
                        }
                    }
                })

                .state('module2', {
                    url: '/module2',
                    templateUrl: 'module2/module2.html',
                    resolve: {
                        load: function($ocLazyLoad) {

                            return $ocLazyLoad.load ({
                                name: 'module2',
                                files: ['module2/module.js']
                            });
                        }
                    }
                });

        }]);*/

    //app.bootstrap = function () {
    //    angular.bootstrap(document, ['mainModule']);
    //};

    return app;
});