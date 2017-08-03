(function () {
      'use strict';

      angular
        .module('myApp')
        .component('navComponent', {
            templateUrl: 'app/componentes/navComponent.html',
            controller: navCtrl,
            controllerAs: 'vm'

        });

      function navCtrl() {
         var vm = this;
         $('.modal').modal();
         //$(".button-collapse").sideNav();
      }

})();
