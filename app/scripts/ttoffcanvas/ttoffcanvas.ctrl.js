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
      }
    })
    .directive('ttCanvas',function(){
      return {
        restrict: 'A',
        controller: 'ttocController',
        template: '<div ng-include="initTt.ttCanvasTemplateUrl"></div>',
        link: function(scope, element) {

        }
      };
    })
    .directive('ttNav',function(){
      return {
        restrict: 'A',
        controller: 'ttocController',
        template: '<div ng-include="initTt.ttNavTemplateUrl"></div>',
        link: function(scope, element){
          //jQuery(element).find("button").click(function () {
          //  scope.ocStatus === false ? scope.ocStatus = true : scope.ocStatus = false;
          //  console.log(scope.ocStatus);
          //});
        }
      };
    });

