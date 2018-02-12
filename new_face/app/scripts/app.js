'use strict';

/**
 * @ngdoc overview
 * @name newFaceApp
 * @description
 * # newFaceApp
 *
 * Main module of the application.
 */
angular
  .module('newFaceApp', [
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
