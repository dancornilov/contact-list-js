'use strict';

angular.module('myApp.templateRenderer', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/renderer', {
            templateUrl: 'template-renderer/template-renderer.html',
            controller: 'TemplateRendererCtrl'
        });
    }])

    .controller('TemplateRendererCtrl', ['$scope', '$sce', function ($scope, $sce) {
        $scope.sanitizer = $sce;
        $scope.contact = {
            first_name: 'Dan',
            last_name: 'Cornilov',
            email: 'dancornilov@gmail.com',
            phone: '37376738799',
            gender: 'male'
        };

        db.collection("templates")
            .get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                $scope.$apply(function () {
                    $scope.template = doc.data().template;
                });
            });
        })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });

        $scope.submit = function () {
            if ($scope.templateForm.$invalid) {
                console.log('Form is invalid');
                return;
            }

            db.collection("templates").doc('card-template').set({template: $scope.template})
                .then(function (docRef) {
                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                });
        };
    }]);
