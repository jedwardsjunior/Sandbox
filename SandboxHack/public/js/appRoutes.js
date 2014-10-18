angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'SandboxController'
		})

		.when('/explore', {
			templateUrl: 'views/explore.html',
			controller: 'ExploreController'
		})

		.when('/search', {
			templateUrl: 'views/result.html',
			controller: 'SandboxController'
		})

	$locationProvider.html5Mode(true);

}]);
