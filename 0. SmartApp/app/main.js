require.config({

    paths: {
        'angular': '../bower_components/angular/angular',
        'angular-route': '../bower_components/angular-route/angular-route',
        //'angular-ui-route': 'bower_components/angular-ui-route/angular-ui-route.min',
        'oc-lazy-load' : '../bower_components/ocLazyLoad/dist/ocLazyLoad',
        'mobile-nav': 'scripts/core/mobile-nav',
        'app' : 'app'
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angular-route': ['angular'],
        'oc-lazy-load' :  ['angular'],
        'mobile-nav': ['angular'],
        'app': ['angular', 'angular-route', 'oc-lazy-load', 'mobile-nav']
    }
});



require(['app'], function (app) {
    app.bootstrap();
});