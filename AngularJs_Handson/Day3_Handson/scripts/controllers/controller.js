(function() {
	'use strict';
	angular
		.module('UsersList')
		.controller('UsersList',UsersList);
		
		UsersList.$inject = ['$scope','$http','userService','$rootScope'];
		
		function UsersList($scope,$http,userService,$rootScope){
			$http
				.get('./UsersList.json')
				.success(function(data){
					$scope.users = data;
				})
				.error(function(err){
					console.log(err);
				}
				);
		$scope.setName = function(user) {
			userService.setCurrentUser(user);
			$rootScope.$broadcast('userInfo');
		}
			
		};
})();