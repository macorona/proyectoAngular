(function () {
      'use strict';

      angular
        .module('myApp')
        .component('inicioComponent', {
            templateUrl: '/app/componentes/inicioComponente.html',
            controller: inicioCtrl,
            controllerAs: 'vm'

        });

      function inicioCtrl() {
         var vm = this;
         $('.parallax').parallax();
      }

})();
