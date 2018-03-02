// YOUR COMPONENT FOR THE PROFILE PAGE IS CREATED IN THIS FILE

(function() {

	var profileComponent = {
		templateUrl: 'partials/profile.html',
		controller: function(loginService) {
			var $ctrl = this;
			$ctrl.userDetails = loginService.getProfile();
		}
	}

	angular
		.module("myApp")
		.component("profileComponent", profileComponent);
})();
