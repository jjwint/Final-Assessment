// YOUR ROUTING IS CREATED IN THIS FILE

(function() {


	angular
	.module("myApp")
	.config(function($routeProvider) {
		$routeProvider
			.when("/login", {
				template: "<login-component></login-component>"
			})
			.when("/profile", {
				template: "<profile-component></profile-component>"
			})
			.otherwise( {
				redirectTo: "/login"
			});
	});


})();