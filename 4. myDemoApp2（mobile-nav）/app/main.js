require.config({

    paths: {
        'angular': 'components/angular/angular',
        'angular-route': 'components/angular-route/angular-route',
        'oc-lazy-load' : 'components/ocLazyLoad/dist/ocLazyLoad',
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