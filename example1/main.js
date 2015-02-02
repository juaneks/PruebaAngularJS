angular.module('todoApp', [])
  .controller({
      'TodoController': ['$scope', function(sc) {
        sc.todos = [{
          text: 'Pepito',
          done: true
        }, {
          text: 'Juan José',
          done: false
        }, {
          text: 'Pedro',
          done: false
        }];

        sc.addTodo = function() {
          sc.todos.push({
            text: sc.todoText,
            done: false
          });
          sc.todoText = '';
        };

        sc.remaining = function() {
          var count = 0;
          angular.forEach(sc.todos, function(todo) {
            count += todo.done ? 0 : 1;
          });
          return count;
        };

        sc.archive = function() {
          var oldTodos = sc.todos;
          sc.todos = [];
          angular.forEach(oldTodos, function(todo) {
            if (!todo.done)
              sc.todos.push(todo);
          });
        };

      }],

      'segundoController': function($scope) {
        $scope.opciones = [{
          name: "Guayaquil",
          code: "GYE"
        }, {
          name: "Quito",
          code: "QTO"
        }, {
          name: "Cuenca",
          code: "CUE"
        }, ];

        $scope.agregar = function() {
          textoinput = $scope.nuevoitem;
          $scope.opciones.push({
            name: textoinput,
            code: angular.uppercase(textoinput.substring(0, 2))
          });
          $scope.nuevoitem = '';
        };

        $scope.seleccion = function() {
          alert($scope.ciudad);
        };

        $scope.NuevoUsuario = {};
        $scope.Usuarios = [{
          nombres: 'Juan Jose',
          apellidos: 'Avelino San Lucas'
        }, {
          nombres: 'Pedro Javier',
          apellidos: 'Mayor'
        }];

        $scope.addUser = function() {
          $scope.Usuarios.push($scope.NuevoUsuario);
          $scope.NuevoUsuario = {};
        };

      }
    } // fin del controller 

  );