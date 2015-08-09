(function() {
    'use strict';

    angular
        .module('myApp')
        .service('logger', logger);

    /**
    * @ngInject
    */

    function logger() {
        this.logError = function(msg) {
            /* */
        };
    }
    
})();
