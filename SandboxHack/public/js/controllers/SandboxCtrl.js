angular.module('SandboxCtrl', []).controller('SandboxController', function($scope) {
  $scope.query = "";
  
  $scope.submitQuery = function() {
    if ($scope.query) {
      console.log($scope.query);
    }
  };

});
