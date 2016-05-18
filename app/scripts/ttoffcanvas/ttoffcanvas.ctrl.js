'use strict';

/**
 * @ngdoc function
 * @name ngOffcanvasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngOffcanvasApp
 */
angular.module('tt.Offcanvas')
.controller('ttocController', function ($scope,ttConfigData) {
  $scope.initTt = ttConfigData;
  $scope.ocStatus = false;
  $scope.checkStatus = function(){
    $scope.ocStatus === false ? $scope.ocStatus = true : $scope.ocStatus = false;
    console.log($scope.ocStatus);
  };
});
