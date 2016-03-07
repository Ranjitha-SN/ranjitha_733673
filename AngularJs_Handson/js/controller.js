(function() {
	'use strict';
	angular
		.module('MyApp')
		.controller('HomeCtrl',HomeCtrl);
		
		HomeCtrl.$inject = ['$scope'];
		function HomeCtrl($scope){
			$scope.title = "Hello there !";
			$scope.description = function()
			{
				return 'This is home page';
			};
		};
})();
