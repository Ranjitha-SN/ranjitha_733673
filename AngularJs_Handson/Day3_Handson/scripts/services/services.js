(function() {
	'use strict';
	angular
		.module('UsersList')
		.factory('userService',userService);
		
		function userService(){
			var user;
			var serviceMethod = {
				setCurrentUser : setCurrentUser,
				getCurrentUser :getCurrentUser
			};
			
			return serviceMethod;
			
			function setCurrentUser(newUser) {
				user = newUser;
			}
			function getCurrentUser() {
				return user;
			}
		}

})();