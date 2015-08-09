(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('logger', logger);

    /**
    * @ngInject
    */

    function logger() {
        return {
            logError: function(msg) {
              /* */
            }
       };
    }

})();
