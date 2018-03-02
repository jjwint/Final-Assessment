// YOUR COMPONENT FOR THE LOGIN FORM IS CREATED IN THIS FILE

(function() {
	var loginComponent = {
		templateUrl: 'partials/login.html',
		controller: function(loginService) {
			var $ctrl = this;
			$ctrl.info = {};
			$ctrl.submitInfo = function() {
				console.log($ctrl.info);
				loginService.checkLogin($ctrl.info);
				loginService.getProfile($ctrl.info);
			}
		}
	}

	angular
		.module('myApp')
		.component('loginComponent', loginComponent);
})();