'use strict';

angular.module('projectApp')
  .controller('RegisterCtrl', function ($scope, $http) {
    $scope.submit = function() {
      console.log('submit triggered!');
      var url = '/';
      var user = {
        email: $scope.register.email.$viewValue,
        password: $scope.register.password.$viewValue
      };
      console.log(user);

      $http.post(url, user)
        .then(
          function successCallback(response){
          console.log('success: ', response);
          },
          function errorCallback(error) {
            alert('warning', 'Oops', 'Could not register!');
            console.log(error);
          });
    };
  });
