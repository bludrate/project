require.config({
    'baseUrl' : '/js/',
    'paths' : {
        'angular' : '/lib/angular/angular.min',
        'jquery': '/lib/jquery/dist/jquery.min',
        'bootstrap' : '/lib/bootstrap/dist/js/bootstrap.min',
        'angularAMD' : '/lib/angularAMD/angularAMD.min',
        'angular-route' : '/lib/angular-route/angular-route.min'
    },
    'shim': {
        'jquery': {
            exports: "$"
        },
        'angularAMD': ['angular'],
        'bootstrap': ['jquery'],
        'angular-route' : ['angular']
    },
    deps: ['app']
});