angular.module('HomeViewCtrl', []).controller('HomeViewController', function($scope, $http, $location)
{
  $scope.user = "Julia";
  $scope.query = "";

  $scope.search = function () {
    console.log("Got the search request!");
    console.log("The query is: " + $scope.query)
    $scope.query = $scope.query.replace('?', '%3F');
    $location.url('search/'+$scope.query);
  };
});
