(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('CustomerListController', CustomerListController, '$timeout');

    CustomerListController.$inject = ['customerdataService','$timeout'];

    function CustomerListController(customerdataService, $timeout) {
        var customerListVm = this;

        customerListVm.customers = [];

        $timeout(function(){


            customerListVm.username = ', NorthWestener';
        },3000);


        customerdataService.getCustomers()
            .then(function(data) {
            customerListVm.customers = data;
        }, function(error) {
            console.log(error);
        });

    }
})();