'use strict';

// Declare app level module which depends on views, and components
angular.module('sandboxApp', [
  'ngRoute',
  'sandboxApp.result_view'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/index'});
}]);
