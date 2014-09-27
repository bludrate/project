'use strict';

define(['angularAMD', 'angular-route'], function(angularAMD){
    var app = angular.module('TODO', ['ngRoute']);

    app.config(function($routeProvider){
        $routeProvider
            .when("/home", angularAMD.route({
                templateUrl: 'view/todo.html',
                controller: 'TODO',
                controllerUrl: 'todo/todo'
            }))
            .otherwise({redirectTo: '/home'});
    });

    return angularAMD.bootstrap(app);
});