(function (){
'use strict';

/**
 * @ngdoc overview
 * @name newFaceApp
 * @description
 * # newFaceApp
 *
 * Main module of the application.
 */
angular.module('newFaceApp', [
    'ngResource',
    'ngRoute'
  ])
  .controller('newFaceApp', function ($scope) {
    $scope.name ="Elija Amponsa";
  });
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
})();
