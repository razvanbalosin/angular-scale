(function() {
    'use strict';

    angular
        .module('home', [])
        .config(configHome)
        .controller('homeCtrl', homeCtrl);

     /**
     * @ngInject
     */

    function configHome ($stateProvider) {
        $stateProvider.state('app.home', {
            url: '/',
            views: {
                'content@': {
                    templateUrl: 'modules/home/home.tpl.html',
                    controller: 'homeCtrl',
                    controllerAs: 'hc',
                }
            }
        })
    }

    function homeCtrl () {
        var hc = this
        hc.title = "Welcome to Angular-Scale"
    }

})();
