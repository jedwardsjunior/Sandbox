'use strict';

angular.module('mean.homepage').controller('HomepageController', ['$scope', 'Global', 'Homepage',
function($scope, Global, Homepage) {
  $scope.global = Global;
  $scope.query = "";
  $scope.package = {
    name: 'homepage'
  };

  $scope.submitQuery = function() {
    if ($scope.query) {
      console.log($scope.query)
    }
  };
}
]);
