(function() {
	'use strict';
	angular 
		.module('TcsApp',['ngRoute'])
		.config(router);
		
		router.$inject = ['$routeProvider'];
		
		function router($routeProvider) {
			
			$routerProvider.when('/',{
			templateUrl: './views/home.html'
			});
			
			$routerProvider.when('/',{
			templateUrl: './views/profile.html'
			});
			
			$routerProvider.when('/',{
			templateUrl: './views/lists.html'
			});
			
			$routerProvider.when('/',{
			templateUrl: './views/about.html'
			});
			
			$routerProvider.when('/',{
			templateUrl: './views/search.html'
			});
		}

}

})();