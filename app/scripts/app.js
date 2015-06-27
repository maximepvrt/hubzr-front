'use strict';

/**
 * @ngdoc overview
 * @name hubzrFrontApp
 * @description
 * # hubzrFrontApp
 *
 * Main module of the application.
 */
var module = angular.module('hubzrApp', [
  'ui.router',
  'ngMaterial'
  ]);

module.run(function($rootScope) {
  $rootScope.apiPath = "http://localhost:9000"
});

