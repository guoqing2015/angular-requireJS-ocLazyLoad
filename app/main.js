require.config({

    paths: {
        'angular': '../bower_components/angular/angular',
        'angular-route': '../bower_components/angular-route/angular-route',
        //'angular-ui-route': 'bower_components/angular-ui-route/angular-ui-route.min',
        //'route-resolver' : 'resources/core/routeResolver',
        'oc-lazy-load' : '../bower_components/ocLazyLoad/dist/ocLazyLoad',
        'app' : 'app'
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angular-route': ['angular'],
        'oc-lazy-load' :  ['angular']
        //'angular-mocks': {
        //    deps:['angular'],
        //    'exports':'angular.mock'
        //},
        //'app': ['angular', 'angular-route', 'oc-lazy-load']
    }
});



require(['app'], function (app) {
    //angular.bootstrap(document, ['App']);
    app.bootstrap();
});