'use strict';

/**
 * @ngdoc function
 * @name app.directive:uiNav
 * @description
 * # uiScroll
 * Directive of the app
 */
angular.module('app')
  .directive('uiNav', ['$timeout', function($timeout) {
    return {
      restrict: 'AC',
      link: function(scope, el, attr) {
        el.on('click', 'a', function() {
          var li = angular.element(this).parent();
          var active = li.parent()[0].querySelectorAll('.active');
          li.toggleClass('active');
          angular.element(active).removeClass('active');
        });  
        el.on('click','.nav-sub>li',function(){          
          angular.element(this).addClass('bfd-select').siblings().removeClass('bfd-select');
        });
       
        scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
          el.find('.bfd-active')
            .addClass('bfd-select')
            .parents(".bfd-menu-item")
            .addClass('active');
        });
      }
    };
  }])
  .directive('onFinishRenderFilters',['$timeout', function($timeout) {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
        if (scope.$last === true) {
          $timeout(function() {
            scope.$emit('ngRepeatFinished');
          });
        }
      }
    };
  }]);