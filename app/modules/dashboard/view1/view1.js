(function() {
    'use strict';

    angular
        .module('dashboard.view1', [])
        .config(configDashViewOne)
        .controller('DashViewOneCtrl', DashViewOneCtrl);

    /**
    * @ngInject
    */

    function configDashViewOne ($stateProvider) {
        $stateProvider.state('app.dashboard.view1', {
            url: '/view1',
            views: {
                'content@': {
                    templateUrl: 'modules/dashboard/view1/view1.tpl.html',
                    controller: 'DashViewOneCtrl',
                    controllerAs: 'dvoc',
                }
            }
        })
    }

    function DashViewOneCtrl () {
        var dvoc = this
        dvoc.title = "Dashboard - View 1"
    }

})();
