(function () {
    'use strict'

    config.$inject = ['$routeProvider'];
    function config($routeProvider) {
        $routeProvider
        .when('/home', {
            template: '<inicio-component></inicio-component>',
            controllerAs: 'vm'

        })

        .when('/empleados', {
            template: '<empleados-component></empleados-component>',
            controllerAs: 'vm'

        })

        .when('/mensajes', {
            template: '<mensaje-component></mensaje-component>',
            controllerAs: 'vm'

        })

        .otherwise({
            redirectTo: '/home'
        });



    }
    angular
    .module('myApp')
    .config(config);

})();
