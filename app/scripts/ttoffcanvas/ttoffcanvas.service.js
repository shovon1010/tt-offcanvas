/**
 * Created by shovon-pc on 5/18/2016.
 */
'use strict';
angular.module('tt.Offcanvas')
  .factory('ttConfigData',function(){
    var initTt = {
      ttCanvasTemplateUrl: '/scripts/ttoffcanvas/views/canvastemplate/index.html',
      ttNavTemplateUrl: '/scripts/ttoffcanvas/views/navtemplate/index.html'
    };
    return initTt;
  });
