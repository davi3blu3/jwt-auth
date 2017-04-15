'use strict';

angular.module('projectApp')
  .directive('sameAs', function () {
    return {
      require: 'ngModel',
      link: function(scope, element, attrs, ngModelCtrl) {
        function sameAs(value) {
          var valid = (value === scope.$eval(attrs.sameAs));
          ngModelCtrl.$setValidity('equal', valid);
          return valid ? value : undefined;
        }
        ngModelCtrl.$parsers.push(sameAs);
        ngModelCtrl.$formatters.push(sameAs);

        scope.$watch(attrs.sameAs, function() {
          ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue);
        });
      }
    };
  });
