/**
 * AppWeb Module
 
 */
angular.module('AppWeb', [])
	.controller('FilterController', ['$scope', function(sc) {
		//sc.etiqueta = 'hola';
		sc.costo= 24;
		sc.objeto = {
			titulo : 'prueba',
			cuerpo : 'formato json'
		};

	}])
	.filter('Upper', function() { // filtro personalizado
		return function(texto) {
			if (typeof(texto) === 'undefined')
				return ''
			else
				return angular.uppercase('hola ' + String(texto))
		}
	})