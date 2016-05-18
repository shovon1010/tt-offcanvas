/**
 * Created by user on 5/19/2016.
 */
'use strict';
angular.module('tt.Offcanvas')
.directive('ttCanvas',function(){
  return {
    restrict: 'A',
    controller: 'ttocController',
    template: '<div ng-include="initTt.ttCanvasTemplateUrl"></div>'
  };
})
.directive('ttNav',function(){
  return {
    restrict: 'A',
    controller: 'ttocController',
    template: '<div ng-include="initTt.ttNavTemplateUrl"></div>'
  };
});
