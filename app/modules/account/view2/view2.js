(function() {
    'use strict';

    angular
        .module('account.view2', ['ui.router'])
        .config(configAccViewTwo)
        .controller('AccViewTwoCtrl', AccViewTwoCtrl);

     /**
     * @ngInject
     */

    function configAccViewTwo ($stateProvider) {
        $stateProvider.state('app.account.view2', {
            url: '/view2',
            views: {
                'content@': {
                    templateUrl: 'modules/account/view2/view2.tpl.html',
                    controller: 'AccViewTwoCtrl',
                    controllerAs: 'avtc',
                }
            }
        })
    }

    function AccViewTwoCtrl () {
        var avtc = this
        avtc.title = "Account - View 2"
    }

})();
