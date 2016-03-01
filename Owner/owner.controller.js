/**
 * Created by Meville on 1/14/16.
 */


(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('OwnerController', OwnerController);

    OwnerController.$inject = [ '$location'];

    function OwnerController( $location) {
        var ownerVm = this;



  ownerVm.Register= function(){


      //var user1 =angular.toJson(ownerVm.user);

      console.log(ownerVm.user);


      if(ownerVm.user.email == "user@northwestern.com" && ownerVm.user.password == "password"){
          console.log("login successful!!");
          $location.path('/customers');
      }




        }



    }
})();