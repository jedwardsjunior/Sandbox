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
		});

	$locationProvider.html5Mode(true);

}]);
