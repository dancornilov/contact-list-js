'use strict';

angular.module('myApp.full-name', [])
    .filter('fullName', [ function () {
        return function (contact) {
            return contact && contact.first_name + ' ' + contact.last_name;
        };
    }]);
