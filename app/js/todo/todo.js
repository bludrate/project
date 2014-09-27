'use strict';

define(['app'], function(app){
    app.controller('TODO', function ($scope) {
        $scope.todos = [
            {
                'text': 'some text 1',
                'completed': false
            },
            {
                'text': 'some text 2',
                'completed': false
            },
            {
                'text': 'some text 3',
                'completed': true
            },
            {
                'text': 'some text 4',
                'completed': false
            },
            {
                'text': 'some text 5',
                'completed': false
            },
            {
                'text': 'some text 6',
                'completed': false
            }
        ];

        $scope.removeTodo = function (index) {
            $scope.todos.splice(index, 1);
        };
    });
});