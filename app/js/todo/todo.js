'use strict';

define(['app', 'helper'], function(app, helper){
    app.controller('TODO', function ($scope) {
        angular.extend($scope, {
            'todoText': '',
            'allChecked': false,
            'filterByChecked': '',
            'filterByCompleted': '',
            'filterByText': ''
        });

        $scope.todoFilter = function () {
            var obj = {};

            if ($scope.filterByChecked !== '') {
                obj.checked = $scope.filterByChecked;
            }

            if ($scope.filterByCompleted !== '') {
                obj.completed = $scope.filterByCompleted;
            }

            return helper.isEmpty(obj) ? null : obj;
        };
        $scope.todos = [
            {
                'text': 'some text 1',
                'checked': false,
                'completed': false
            },
            {
                'text': 'some text 2',
                'checked': false,
                'completed': false
            },
            {
                'text': 'some text 3',
                'checked': false,
                'completed': true
            },
            {
                'text': 'some text 4',
                'checked': false,
                'completed': false
            },
            {
                'text': 'some text 5',
                'checked': false,
                'completed': false
            },
            {
                'text': 'some text 6',
                'checked': false,
                'completed': false
            }
        ];

        function checkExistTodo(todoList, todoText) {
            for (var i=0; i < todoList.length; i++) {
                if (todoList[i].text === todoText) {
                    return true;
                }
            }
            return false;
        }

        $scope.removeTodo = function (index) {
            $scope.todos.splice(index, 1);
        };

        $scope.addTodo = function (text) {
            if (!text) return false;
            var exist;
            $scope.todos.push({
                'completed': false,
                'text': text
            });
        };

        $scope.addTodoDisabled = function () {
            if ($scope.todoText.length === 0)
                return true;

            if (checkExistTodo($scope.todos, $scope.todoText))
                return true;

            return false;
        };

        $scope.enableChangeTodo = function () {
            console.log(this);
        };

        $scope.toggleTextEdit = function (event, editable) {
            var $element = angular.element(event.srcElement);

            if (editable) {
                $element.removeAttr('readonly');
            } else {
                $element.attr('readonly', true);
            }
        };

        $scope.removeByProp = function (prop, removeVal) {
            $scope.todos = $scope.todos.filter(function (todo) {
                return todo[prop] != removeVal;
            });
        };

        $scope.markAll = function (checked) {
            $scope.todos.forEach(function (todo) {
                todo.checked = checked;
            });
        };
    });
});