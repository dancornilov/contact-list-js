'use strict';

angular.module('myApp.interpolation', [])
    .filter('interpolation', [function () {
        var giveWords = function(text){
            var regExp = /\{\{(.+?)\}\}/ig;

            return text && text.match(regExp);
        };

        var giveWord = function (text) {
            var regExp = /\{{(.*)\}}/i;

            return text && text.match(regExp)[1];
        };

        var getColumnValue = function (item, property) {
            if (property.includes('.')) {
                return property.split('.').reduce(function (object, key) {
                    return object ? object[key] : '-';
                }, item);
            }

            return item[property];
        };

        return function (text, messages) {
            var bracketValues = giveWords(text);

            if (bracketValues) {
                bracketValues.forEach(function (item) {
                    var clearWord = giveWord(item);
                    if (!messages[clearWord]) {
                        messages[clearWord] = '';
                    }

                    text = text.replace(item, getColumnValue(messages, clearWord));
                });
            }

            return text;
        };
    }]);
