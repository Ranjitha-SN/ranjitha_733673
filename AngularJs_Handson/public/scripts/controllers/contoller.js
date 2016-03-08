(function() {
	'use strict';
	angular
		.module('listApp')
		.controller('listData',listData);
		
		listData.$inject = ['$scope'];
		
		function listData($scope){
			$scope.values = [];
			
			$scope.colors = function()
			{
				alert("Hi");
				$scope.values = ['red','green','blue'];
				return values;
			};
			
			$scope.states = function()
			{
				$scope.values = ['Karnataka','Delhi','Gujrat'];
				return values;
			};
		};
})();