(function() {
	'use strict';
	angular
		.module('UsersList',['ngRoute'])
		.config(router);
		
		router.$inject = ['$routeProvider'];
		
		function router($routeProvider) {
			
			$routeProvider.when('/',{
			templateUrl: '/views/home.html',
			controller: 'UsersList',
			//controller: 'userDetails'
			});
		}
	
})();