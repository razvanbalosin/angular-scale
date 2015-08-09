(function() {
    'use strict';

    angular
        .module('myApp')
        .directive('myExampleDirective', myExampleDirective);

    /**
    * @ngInject
    */

    function myExampleDirective() {
        var directive = {
            restrict: 'EA',
            template: '<span>I am an example directive</span>',
            link: link,
            controller: controller
        };
        return directive;

        function link (scope, element, attrs) {
          /* */
        }

        function controller ($scope, $element, $attrs) {
          /* */
        }
    }

})();
