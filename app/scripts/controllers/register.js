'use strict';

angular.module('projectApp')
  .controller('RegisterCtrl', function ($scope) {
    $scope.submit = function() {
      console.log('submit triggered!');
    };
  });
