'use strict';

angular.module('myApp.contactDetail', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/contact-detail', {
            templateUrl: 'contact-detail/contact-detail.html',
            controller: 'ContactDetailCtrl'
        });
    }])

    .controller('ContactDetailCtrl', ['$scope', function ($scope) {
        $scope.genders = [
            {
                label: 'Male',
                value: 'male'
            },
            {
                label: 'Female',
                value: 'female'
            }
        ];

        $scope.submit = function () {
            if ($scope.addContact.$invalid) {
                console.log('Form is invalid');
                return;
            }

            $scope.contact.created_at = new Date().getTime();

            db.collection("contacts").add($scope.contact)
                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                });
        };
    }]);
