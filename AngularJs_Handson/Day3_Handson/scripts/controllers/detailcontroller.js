(function() {
	'use strict';
	angular
		.module('UsersList')
		.controller('userDetails',userDetails);

		userDetails.$inject = ['$scope','userService'];
		
		function userDetails($scope,userService) {
			$scope.$on('userInfo',userInfo);
			
			function userInfo() {
				$scope.currentUser=userService.getCurrentUser();
				console.log($scope.currentUser);
			}
		};
		
		
})();