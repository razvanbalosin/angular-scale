(function() {
    'use strict';

    angular
      .module('myApp', ['ui.router', 'home', 'account', 'dashboard'])
      .config(AppConfig)

     /**
     * @ngInject
     */

    function AppConfig ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('app', {
            url: '',
            abstract: true,
            views: {
                'header': {
                    templateUrl: 'partials/header/header.tpl.html',
                    controller: 'HeaderCtrl',
                    controllerAs: 'head'
                },
                'footer':{
                    templateUrl: 'partials/footer/footer.tpl.html',
                    controller: 'FooterCtrl',
                    controllerAs: 'foot'
                }
            }
        });

        $urlRouterProvider.otherwise(function($injector) {
            var $state = $injector.get("$state");
            $state.go("app.home");
        });
    }

})();
