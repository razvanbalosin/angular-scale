(function() {
    'use strict';

    angular
        .module('account.view1', ['ui.router'])
        .config(configAccViewOne)
        .controller('AccViewOneCtrl', AccViewOneCtrl);

     /**
     * @ngInject
     */

    function configAccViewOne ($stateProvider) {
        $stateProvider.state('app.account.view1', {
            url: '/view1',
            views: {
                'content@': {
                    templateUrl: 'modules/account/view1/view1.tpl.html',
                    controller: 'AccViewOneCtrl',
                    controllerAs: 'avoc',
                }
            }
        })
    }

    function AccViewOneCtrl () {
        var avoc = this
        avoc.title = "Account - View 1"

    }

})();
