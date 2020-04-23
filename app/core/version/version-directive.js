'use strict';

angular.module('myApp.version.version-directive', [])

.directive('appVersion', ['version', function(version) {z
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);
