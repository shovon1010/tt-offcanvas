"use strict";angular.module("tt.Offcanvas",[]),angular.module("tt.Offcanvas").factory("ttConfigData",function(){var a={ttCanvasTemplateUrl:"/scripts/ttoffcanvas/views/canvastemplate/index.html",ttNavTemplateUrl:"/scripts/ttoffcanvas/views/navtemplate/index.html"};return a}),angular.module("tt.Offcanvas").controller("ttocController",["$scope","ttConfigData",function(a,b){a.initTt=b,a.ocStatus=!1,a.checkStatus=function(){a.ocStatus===!1?a.ocStatus=!0:a.ocStatus=!1,console.log(a.ocStatus)}}]),angular.module("tt.Offcanvas").directive("ttCanvas",function(){return{restrict:"A",controller:"ttocController",template:'<div ng-include="initTt.ttCanvasTemplateUrl"></div>'}}).directive("ttNav",function(){return{restrict:"A",controller:"ttocController",template:'<div ng-include="initTt.ttNavTemplateUrl"></div>'}});