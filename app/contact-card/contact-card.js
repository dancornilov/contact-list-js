'use strict';

angular.module('myApp.contactCard', ['ngRoute', 'myApp.full-name'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view/:id', {
            templateUrl: 'contact-card/contact-card.html',
            controller: 'ContactCardCtrl'
        });
    }])

    .controller('ContactCardCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
        db.collection("contacts").where("created_at", "==", Number($routeParams.id))
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    $scope.$apply(function () {
                        $scope.contact = doc.data();
                    });
                });
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
    }]);
