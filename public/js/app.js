'use strict';

// Declare app level module which depends on views, and components
angular.module('sandboxApp', ['ngRoute']).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {templateUrl: "../views/home_view/home_view.html"})
    .when('/search', {templateUrl: "../views/result_view/result_view.html"})
    .otherwise({redirectTo: '/'});
}]);
