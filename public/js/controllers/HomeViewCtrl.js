angular.module('HomeViewCtrl', []).controller('HomeViewController', function($scope, $http, $location, searchResults)
{
  $scope.user = "Julia";
  $scope.query = "";

  $scope.search = function () {
    console.log("Got the search request!");
    console.log("The query is: " + $scope.query)

    if ($scope.query.indexOf("?") == -1) {
      $http({
        method: 'GET',
        url: '/searchWiki',
        params: { "q": $scope.query }
      }).
      success(function (data, status, headers, config) {
        console.log(data);
        searchResults.setQuery($scope.query);
        searchResults.setResult(data.main_text);
        searchResults.setImage(data.main_img);
        searchResults.setUrl(data.url);
        $location.url('/result');
      }).
      error(function (data, status, headers, config) {
        //$scope.query =
        console.log('Oops! There was an error.');
        $location.url('/error');
      });
    } else {
      $http({
        method: 'GET',
        url: '/searchWolfram',
        params: { "q": $scope.query }
      }).
      success(function (data, status, headers, config) {
        console.log("Response is: " + data);
        searchResults.setQuery($scope.query);
        searchResults.setResult(data.main_text);
        //searchResults.setImage(data.main_img);
        searchResults.setUrl(data.url);
        $location.url('/result');
      }).
      error(function (data, status, headers, config) {
        //$scope.query =
        console.log('Oops! There was an error.');
        $location.url('/error');
      });
    }
  }
});
