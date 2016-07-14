'use strict';

angular.module('app')
  .directive('bfdDatetime',['$timeout', function($timeout) {
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
        angular
          .element('.datepicker-days') 
          .find('table')
          .find('tbody')        
          .bind('click', function(e) {            
            e.preventDefault();
            $timeout(function() {              
                ctrl.$setViewValue(element.val());
                scope.eventChange();              
            });
          });
      }
    }
  }])

