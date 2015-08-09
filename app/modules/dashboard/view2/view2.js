(function() {
    'use strict';

    angular
        .module('dashboard.view2', [])
        .config(configDashViewTwo)
        .controller('DashViewTwoCtrl', DashViewTwoCtrl);

    /**
    * @ngInject
    */

    function configDashViewTwo ($stateProvider) {
        $stateProvider.state('app.dashboard.view2', {
            url: '/view2',
            views: {
                'content@': {
                    templateUrl: 'modules/dashboard/view2/view2.tpl.html',
                    controller: 'DashViewTwoCtrl',
                    controllerAs: 'dvtc',
                }
            }
        })
    }

    function DashViewTwoCtrl () {
        var dvtc = this
        dvtc.title = "Dashboard - View 2"
    }

})();
