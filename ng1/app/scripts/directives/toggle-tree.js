'use strict';
/**
 * @ngdoc function
 * @name app.directive:toggleTree
 * @description
 * # toggleTree
 * Directive of the app
 */
angular.module('app')
  .directive('toggleTree', ['$timeout',function($timeout) {
    return {

      restrict: 'EAC',
      scope: {},
      link: function(scope, element, attr) {

        var tp = element.find('button.toggle');

        tp.bind('click', function() {

          var _self = angular.element(this);

          if (_self.find('span').attr('class') == 'fa fa-minus') {

            _self.find('span').attr('class', 'fa fa-plus')
            _self.parent().find('ul').hide();

            element.css('margin-bottom','10px');

          } else {
            _self.find('span').attr('class', 'fa fa-minus')
            _self.parent().find('ul').show();
            element.css('margin-bottom','0px');
          }
          
        });      

        $timeout(function(){
            if (element.find('>ul>li').length == 1) {             
              element.find('.item-child').attr('class','item-child i-c-h item-o-f');
            }
        })
      }
    }
  }]);