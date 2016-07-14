'use strict';
/**
 * @ngdoc function
 * @name app.directive:bfdInput
 * @description
 * # bfdInput
 * Directive of the app
 */
angular.module('app')
  .directive('bfdInput', function() {
    return {
      restrict: 'EAC',
      require: 'ngModel',
      template: '<div class="bfd-input-sm"><input type="text" ng-model="value" class="form-control"/><i ng-show="isIE" class="mdi-content-clear text-lg m-t-sm pull-left"></i></div>',
      transclude: true,
      replace: true,
      scope: {},
      link: function(scope, element, attr, ctrl) {            
        if(!!navigator.userAgent.match(/MSIE/i) || !!navigator.userAgent.match(/Trident.*rv:11\./)){
           scope.isIE = false;
           element.find('input').css({'padding-right':'0px'})
        }else{
          scope.isIE = true;
        }
        element.find('i').bind('click', function() {
          scope.value = '';
        });
        scope.$watch('value', function() {
          ctrl.$setViewValue(scope.value);
        });
      }
    }
  });