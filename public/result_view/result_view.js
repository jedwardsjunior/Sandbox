'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/result_view', {
    templateUrl: 'result_view/result_view.html',
    controller: 'ResultViewCtrl'
  });
}])

.controller('ResultViewCtrl', [function() {

}]);
