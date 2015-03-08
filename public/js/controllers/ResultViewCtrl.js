angular.module('ResultViewCtrl', [])

.controller('ResultViewController', function($scope, $http, $routeParams)
{
  $scope.query = $routeParams.id
  $scope.source = 'wiki';

  $scope.findPrimarySource = function() {
    // Which data source should we use?
    if($scope.query.indexOf('?') != -1 || $scope.query.indexOf('%3F') != -1) {
      $scope.source = 'wolfram'
    }
  }

  $scope.findPrimarySource();
  if($scope.source == 'wolfram') {
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
