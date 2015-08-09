(function() {
    'use strict';

    angular
        .module('account', ['ui.router', 'account.view1', 'account.view2'])
        .config(configAcc)
        .controller('accountCtrl', accountCtrl)

     /**
     * @ngInject
     */

    function configAcc ($stateProvider) {
        $stateProvider.state('app.account', {
            url: '/account',
            views: {
                'content@': {
                    templateUrl: 'modules/account/account.tpl.html',
                    controller: 'accountCtrl',
                    controllerAs: 'ac',
                }
            }
        })
    }

    function accountCtrl () {
        var ac = this;
        ac.title = "Account - Home"
    }

})();
