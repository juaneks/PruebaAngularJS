var app = angular.module('App2', []);
app.controller('FirstController', ['$scope', '$http', function(sc, http) {

//	sc.consumir = function() {
		sc.registros = [];
		http.get("http://jsonplaceholder.typicode.com/posts") // consume api
			.success(function(data) { // callback
				sc.registros = data;
			})
			.error(function(err) {
				sc.campo = 'hubo un error :' + err;
			});
//	};

	sc.newPost = {}
	sc.addPost = function() {
		http.post("http://jsonplaceholder.typicode.com/posts",
		{
		  title: sc.newPost.title,
		  body : sc.newPost.body,
		  userId : sc.newPost.userId
		})
			.success(function(data, status, header, config) {
				sc.registros.push(data);
				sc.newPost = {}

			}).error(function(err, status, header, config) {

			});

	}
}])