'use strict';

// Declare app level module which depends on views, and components
angular.module('appRoutes', ['ngRoute']).config(['$routeProvider', '$locationProvider',
                function($routeProvider, $locationProvider) {

  $routeProvider

    .when('/', {
      templateUrl: "views/home_view.html",
      controller: "HomeViewController"
    })

    .when('/search/:id', {
      templateUrl: "views/result_view.html",
      controller: "ResultViewController"
    })

    .when('/about/', {
      templateUrl: "views/about.html",
      controller: "HomeViewController"
    })

    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);

}]);
