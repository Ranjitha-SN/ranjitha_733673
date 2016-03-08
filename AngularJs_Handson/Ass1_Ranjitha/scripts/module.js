(function() {
	'use strict';
	angular
		.module('TcsApp',['ngRoute'])
		.config(router);
		
		router.$inject = ['$routeProvider'];
		
		function router($routeProvider) {
			
			$routeProvider.when('/',{
			templateUrl: './views/home.html'
			});
			
			$routeProvider.when('/',{
			templateUrl: './views/profile.html'
			});
			
			$routeProvider.when('/',{
			templateUrl: './views/lists.html'
			});
			
			$routeProvider.when('/',{
			templateUrl: './views/about.html'
			});
			
			$routeProvider.when('/',{
			templateUrl: './views/search.html'
			});
		}

	
})();