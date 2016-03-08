(function() {
	'use strict';
	angular
		.module('listApp')
		.controller('listData',listData);
		
		listData.$inject = ['$scope'];
		
		function listData($scope){
			var values = [];
			
			$scope.setColors = Color;
			$scope.setStates = States;
			$scope.getValues = Values;
			
			function Color()
			{
				values = ['Red','Green','Blue'];
			};
			
			function States()
			{
				values = ['Karnataka','Delhi','Gujrat'];
			};
			function Values()
			{
				return values;
			};
		};
})();