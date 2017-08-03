(function() {
    'use strict';

    angular.module('myApp')
          .component('mensajeComponent', {
              templateUrl: 'app/componentes/mensajeComponent.html',
              controller: mensajeCtrl,
              controllerAs: 'vm'

          });

    function mensajeCtrl() {
      var vm = this;
      $('#btnMensaje').click(function() {
        $('#modal1').modal('open');
      });
    }
})();
