'use strict';

angular.module('app')
  .directive('bfdDatetime', ['$timeout', function($timeout) {
    return {
      restrict: 'A',
      require: 'ngModel',
      scope: {
        eventChange: '&'
      },
      link: function(scope, element, attr, ctrl) {
        element.datepicker({
          format: 'yyyy-mm-dd'
        });
        element.bind('blur', function() {
          $timeout(function() {
            ctrl.$setViewValue(element.val());
            scope.eventChange();
          },300);
        });
      }
    }
  }])