'use strict';

angular.module('myApp.home_view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home_view', {
    templateUrl: 'home_view/home_view.html',
    controller: 'HomeViewCtrl'
  });
}])

.controller('HomeViewCtrl', [function() {

}]);
