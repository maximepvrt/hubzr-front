'use strict';

var module = angular.module('hubzrApp');

module.config(function($urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
    });

module.config(
    function($stateProvider) {

            $stateProvider

                .state('webapp', {
                    abstract: true,
                    url: '',
                    templateUrl: 'views/webapp.html',
                })

                .state('webapp.login', {
                    url :'/login',
                    views :  {
                        '': {
                            templateUrl: 'views/login.html',
                            controller: 'hubzrApp.login',
                        },
                    },
                })


    });
