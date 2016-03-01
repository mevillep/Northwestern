(function() {
    'use strict';

    angular
        .module('myApp')
        .service('customerdataService', customerdataService);

    customerdataService.$inject = ['$http', '$q'];

    function customerdataService ($http, $q) {

        var self = this;

        self.getCustomers = function () {
            var defer = $q.defer();

            $http
                .get('http://jsonplaceholder.typicode.com/users')
                .then(function (response){
                    defer.resolve(response.data);
                }, function (error){
                    defer.reject(error.status);
                });
            return defer.promise;
        };








    }
})();

