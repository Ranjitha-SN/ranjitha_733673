(function() {
'use strict';
	angular
		.module('fileioApp')
		.controller('ReadfileContlr',Readfile);
	
		Readfile.$inject = ['$scope','$http'];
	
		function Readfile($scope,$http) {
			$scope.wish = "All the best .. Happyyy Learning";
		
		$scope.getFileData = function() {
			var req = {
			method: 'GET',
			url: '/getfile'
		}
		$http(req).then(successCallbackData, function(){});
		}
		function successCallbackData(res) {
			 $scope.value = JSON.stringify(res.data);
			//$scope.ver = res.version;
			console.log($scope.value);
		}
		$scope.getFileData();
	};
	
})();