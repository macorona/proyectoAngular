(function () {
      'use strict';

      angular
        .module('myApp')
        .component('empleadosComponent', {
            templateUrl: 'app/componentes/empleadosComponent.html',
            controller: empleadosCtrl,
            controllerAs: 'vm'

        }).directive("empleadoDirective", function() {
            return {
              template: '<p><img id="imagenEmpleado" src="https://ionlitio.com/images/2009/04/saint_seiya_personajes_hyoga.jpg"> Nombre: {{vm.empleado.nombre}} <br/>Clave: {{vm.empleado.clave}} <br/>Puesto: {{vm.empleado.puesto}} <br/>Rol: {{vm.empleado.rol}} <br/>Oficina: {{vm.empleado.oficina}} <br/>Email: {{vm.empleado.email}} <br/>Tel. Oficina: {{vm.empleado.tel_ofi}} <br/>Tel. Casa: {{vm.empleado.tel_casa}} <br/>Movil: {{vm.empleado.movil}}</p>'
            };
        });

      function empleadosCtrl($http, $scope) {
         var vm = this;
         //vm.listaEmpleados = null;
         //<img id="imagenEmpleado" src=app/recursos/imagenes/{{vm.empleado.imagen}}>
         $scope.listaEmpleados = null;
         $scope.isVisble = false;
         vm.empleado = null;
         vm.relacionados = null;

        $http({method:"GET",url:'app/recursos/json/listaEmpleados.json'})
            .then(function (response) {
                $scope.listaEmpleados = response.data;
                vm.listaEmpleados = response.data;
        });

        $('select').material_select();

        $scope.cambioEmpleado = function(empleado) {
          //console.log(empleado);

          if(empleado == undefined || empleado == "") {
            $scope.isVisble = false;
          } else {
            $scope.isVisble = true;
          }

          vm.empleado = JSON.parse(empleado);

          console.log('grupo:' + vm.empleado.grupo);
          console.log(vm.listaEmpleados.empleados);
          vm.relacionados = obtenerRelacionados(vm.empleado.grupo, vm.empleado.clave, vm.listaEmpleados.empleados);

          console.log(vm.relacionados);

        }  
         
         $('.tooltipped').tooltip({delay:50});
         $('.collapsible').collapsible();

         $('#btnMail').click(function() {
           $('#modal1').modal('open');
         });

         $('#btnEnviar').click(function() {
           console.log('enviar');
         });

         $('#btnCancelar').click(function() {
           console.log('canclera');
         });

      }
      
      function obtenerRelacionados(grupo , clave, listaEmpleados) {

        return listaEmpleados.filter(function (empleado) {

            return (empleado.grupo == grupo && empleado.clave != clave);

        });  

      }
})();
