'use strict';

/**
 * @ngdoc overview
 * @name ngOffcanvasApp
 * @description
 * # ngOffcanvasApp
 *
 * Main module of the application.
 */
angular
  .module('app', ['tt.Offcanvas']);
angular.module('app')
.controller('mainCtrl',function($scope,ttConfigData){
  $scope.initTt = ttConfigData;
});
