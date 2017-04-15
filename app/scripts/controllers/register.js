'use strict';

angular.module('projectApp')
  .controller('RegisterCtrl', function ($scope, $http) {
    $scope.submit = function() {
      console.log('submit triggered!');
      console.log($scope.register.email.$viewValue);
      var url = '/';
      var user = {
        email: $scope.register.email.$viewValue,
        password: $scope.register.password.$viewValue
      };

      $http.post(url, user)
        .then(
          function successCallback(response){
          console.log('success');
          },
          function errorCallback(error) {
            alert('warning', 'Oops', 'Could not register!');
          })
    };
  });
