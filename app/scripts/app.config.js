'use strict';

angular.module('projectApp').config(function($stateProvider, $urlRouterProvider){

  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: '/views/main.html'
  })

  .state('register', {
    url: '/register',
    templateUrl: '/views/register.html',
    controller: 'RegisterCtrl'
  });

  $urlRouterProvider.otherwise('/');
});
