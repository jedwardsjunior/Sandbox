'use strict';

angular.module('mean.homepage').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('Sandbox', {
      url: '/Sandbox/',
      templateUrl: 'homepage/views/index.html'
    });
  }
]);
