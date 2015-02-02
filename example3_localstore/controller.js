 angular.module('ToDoList', ["LocalStorageModule"])
 	.controller('ToDoController', function($scope, LocalStorageService) {

 		if (LocalStorageService.get("TodoList")) {
 			$scope.todo = LocalStorageService.get("TodoList");
 		} else {
 			$scope.todo = [];

 		}

 		$scope.addActv = function() {
 			$scope.todo.push($scope.NewActividad);
 			$scope.NewActividad = {};
 			
 		}

 		// este metodo $watch seacciona cuando se realiza alguna accion con el
 		//objeto que esta dentro de la primerafuncion
 		// en la seguna funcion se captura el nuevo obj y el obj anterior
 		
 		/*$scope.$watch(function() {
 				return $scope.NewActividad;
 			},
 			function(newValue, oldValue) {
 				console.log(newValue);
 				console.log(oldValue);
 			});

 		/*-----*/
 		// este metodo $watchColecction es igual que el watch pero 
 		//para arreglos, el esta siempre a la espera de algun cambio en el objeto
 		
 		$scope.$watchColecction('todo', function(newValue, oldValue) {
 			LocalStorageService.set('TodoList', $scope.todo);
 		})
 	});