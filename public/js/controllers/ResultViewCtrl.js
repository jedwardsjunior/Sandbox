angular.module('ResultViewCtrl', []).controller('ResultViewController', function($scope, $http, searchResults)
{
  $scope.query = searchResults.getQuery();
  $scope.result = searchResults.getResult();
  $scope.url = searchResults.getUrl();
  $scope.image = searchResults.getImage();

});
