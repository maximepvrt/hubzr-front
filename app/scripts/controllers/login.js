'use strict';

var module = angular.module('hubzrApp');

module.controller('hubzrApp.login', function ($rootScope, $scope, $http) {
  $scope.login = function() {
    $http.post($rootScope.apiPath + '/auth/authenticate/userpass', $scope.user).
        success(function (data, status, headers, config) {
          console.log("ok" + data)
        }).
        error(function (data, status, headers, config) {
          console.log(":(" + data)
        });
  }
});
