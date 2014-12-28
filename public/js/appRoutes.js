'use strict';

// Declare app level module which depends on views, and components
angular.module('appRoutes', ['ngRoute']).config(['$routeProvider', '$locationProvider',
                function($routeProvider, $locationProvider) {

  $routeProvider

    .when('/', {
      templateUrl: "views/home_view.html",
      controller: "HomeViewController"
    })

    .when('/result', {
      templateUrl: "views/result_view.html",
      controller: "ResultViewController"
    })

    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);

}]);
