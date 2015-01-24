angular.module('ResultViewCtrl', []).controller('ResultViewController', function($scope, $http, $routeParams)
{
  $scope.query = $routeParams.id
  if($scope.query.indexOf('?') != -1) {

    $http.get('/wolfram/search/'+$scope.query.replace('?', '%3F')).
      success(function(data) {
        $scope.result = data.main_text;
        $scope.url = data.url;
        $scope.url_text = data.url_text;
    });

  } else {

    $http.get('/wiki/search/'+$scope.query).
      success(function(data) {
        $scope.result = data.main_text;
        $scope.url = data.url;
        $scope.url_text = data.url_text;
        $scope.image = data.main_img;
    });

  }
});
