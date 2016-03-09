(function() {
	'use strict';
	angular
		.module('MyApp')
		.controller('Addition',Addition);
		
		Addition.$injection = ['$scope'];
		
		function Addition($scope) {
			var num1,num2;
			$scope.setNumber = function(number1,number2) {
				num1 = number1;
				num2 = number2;
				$scope.result = num1+num2;
			};
			
				
			};

})();