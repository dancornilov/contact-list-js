'use strict';

angular.module('myApp.contactList', ['ngRoute', 'myApp.full-name'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/contact-list', {
            templateUrl: 'contact-list/contact-list.html',
            controller: 'ContactListCtrl'
        });
    }])

    .controller('ContactListCtrl', ['$scope', function ($scope) {
        $scope.contacts = [];
        db.collection("contacts").where("created_at", "<=", new Date().getTime())
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    $scope.$apply(function () {
                        $scope.contacts.push(doc.data());
                    });
                });
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
    }]);
