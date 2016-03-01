
(function(){
    'use strict';

    angular
        .module('myApp', ['ngRoute', 'angular-loading-bar','ngMessages'])
        .config(moduleConfig);

    moduleConfig.$inject = ['$routeProvider'];
    function moduleConfig ($routeProvider) {
        $routeProvider
            .when('/customers', {
                templateUrl: 'Customer/customer-list.tmpl.html',
                controller: 'CustomerListController',
                controllerAs: 'customerListVm'
            })

  .when('/owner', {
                templateUrl: 'Owner/owner-list.tmpl.html',
                controller: 'OwnerController',
                controllerAs: 'ownerVm'
            })

            .otherwise({
                redirectTo: '/owner'
            })
    }
})();

