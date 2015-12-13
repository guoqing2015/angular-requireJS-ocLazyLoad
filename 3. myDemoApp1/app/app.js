define(['angular', 'angular-route', 'oc-lazy-load'], function () {


    var app = angular.module('App', ['ngRoute','oc.lazyLoad']);

    app.config(['$ocLazyLoadProvider','$routeProvider',
        function ($ocLazyLoadProvider,$routeProvider ) {

            $ocLazyLoadProvider.config({
                loadedModules: ['App'],
                asyncLoader: require
            });

            //$urlRouterProvider.otherwise('/home');

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
                        load: function($ocLazyLoad) {
                            return $ocLazyLoad.load ({
                                name: 'page1',
                                files: ['views/page1/page1.js']

                            });
                        }
                    }
                })

                .otherwise({
                    redirectTo: "/home"
                })

        }]);

    app.bootstrap = function () {
        angular.bootstrap(document, ['App']);
    };


    return app;
});