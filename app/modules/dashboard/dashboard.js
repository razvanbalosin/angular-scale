(function() {
    'use strict';

    angular
        .module('dashboard', ['dashboard.view1', 'dashboard.view2'])
        .config(configDashboard)
        .controller('dashboardCtrl', dashboardCtrl);

    /**
    * @ngInject
    */

    function configDashboard ($stateProvider) {
        $stateProvider.state('app.dashboard', {
            url: '/dashboard',
            views: {
                'content@': {
                    templateUrl: 'modules/dashboard/dashboard.tpl.html',
                    controller: 'dashboardCtrl',
                    controllerAs: 'dc',
                }
            }
        })
    }

    function dashboardCtrl () {
        var dc = this
        dc.title = "Dashboard - Home"
    }

})();
