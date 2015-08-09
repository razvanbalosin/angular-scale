(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('myExampleResource', myExampleResource);

    /**
    * @ngInject
    */

    function myExampleResource(apiUrl, $resource) {
        return $resource(apiUrl + '/path/to/resource', null, {
            create: {method: 'POST'},
            update: {method: 'PUT'},
        });
    }
})();
