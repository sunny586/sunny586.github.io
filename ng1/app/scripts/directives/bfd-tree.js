'use strict';
/**
 * @ngdoc function
 * @name app.directive:bfdTree & bfdEditTree
 * @description
 * # bfdTree & bfdEditTree
 * Directive of the app
 */
angular.module('app')
  .directive('bfdTree',['$timeout',function($timeout) {
    return {
      restrict: 'E',
      require: 'ngModel',
      scope: {
        ngModel: '='
      },
      templateUrl: 'bfd-tree.html',
      controller: ['$scope', function($scope) {

        $scope.isChoose = function(node) {
          if (node.child && node.child.length > 0) {
            node.choose ?
              angular.forEach(node.child, function(item, i) {
                item.choose = true;
              }) :
              angular.forEach(node.child, function(item, i) {
                item.choose = false;
              })
          }
          handleChoose($scope.ngModel);
        };

        $scope.hasChild = false;
        $scope.$watch('ngModel', function(data) {
          angular.forEach(data, function(item, i) {
            if (item.child && item.child.length > 0) {
              $scope.hasChild = true;
            }
          });
        });

        function handleChoose(array) {
          angular.forEach(array, function(item, i) {
            if (item.child && item.child.length > 0) {
              //子节点全选/全不选
              var __choose = [];
              angular.forEach(item.child, function(item, i) {
                __choose.push(item.choose);
              })
              if (__choose.indexOf(true) != -1) {
                item.choose = true;
              }
              if (__choose.indexOf(true) == -1) {
                item.choose = false;
              }
              handleChoose(item.child);
            }
          })
        };

      }],
      replace: true,
      link: function(scope, element, attr, ctrl) {
        scope.$watch('ngModel', function(value) {
          ctrl.$setViewValue(value);
        });
      }
    }
  }])

.run(['$templateCache', function($templateCache) {

  $templateCache.put('bfd-tree.html', '\
      <ul class="list">\
          <li class="item" ng-repeat="node in ngModel" ng-include="\'bfd_nodes_renderer.html\'" bfd-toggle-tree></li>\
      </ul>');

  $templateCache.put('bfd_nodes_renderer.html', '\
      <div class="node-content" ng-class="{\'bfd-lt18\':!node.child || node.child.length==0,\'bfd-has-child\':hasChild}">\
        <button type="button" class="btn btn-primary toggle" ng-hide="!node.child || node.child.length==0" ng-disabled="!node.child || node.child.length==0">\
          <span class="fa fa-minus"></span>\
        </button>\
        <div class="node-item">\
          <label class="md-check">\
            <input type="checkbox" ng-model="node.choose" ng-click="isChoose(node)">\
            <i></i>\
          </label>\
          <i class="fa bfd-icon" ng-class="{true: \'fa-folder-open\', false: \'fa-folder\'}[node.child.length>0]"></i>\
          <label>{{node.name}}</label>\
        </div>\
      </div>\
      <ul class="list" ng-show="node.child.length>0">\
        <li  class="item" ng-repeat="node in node.child" ng-include="\'bfd_nodes_renderer.html\'" bfd-toggle-tree></li>\
      </ul>');

}])

.directive('bfdEditTree',['$timeout', function($timeout) {
  return {
    restrict: 'E',
    require: 'ngModel',
    scope: {
      ngModel: '='
    },
    templateUrl: 'bfd-edit-tree.html',
    replace: true,
    link: function(scope, element, attr, ctrl) {
      scope.$watch('ngModel', function(value) {
        ctrl.$setViewValue(value);
      });
    }
  }
}])

.run(['$templateCache', function($templateCache) {

  $templateCache.put('bfd-edit-tree.html', '\
      <ul class="list">\
          <li class="item" ng-repeat="node in ngModel" ng-include="\'bfd_edit_nodes_renderer.html\'" bfd-toggle-tree></li>\
      </ul>');

  $templateCache.put('bfd_edit_nodes_renderer.html', '\
      <div class="node-content" ng-class="{\'bfd-lt18\':!node.child || node.child.length==0}">\
        <button type="button" class="btn btn-primary toggle" ng-hide="!node.child || node.child.length==0" ng-disabled="!node.child || node.child.length==0">\
          <span class="fa fa-minus"></span>\
        </button>\
        <div class="node-item">\
          <i class="fa bfd-icon" ng-class="{true: \'fa-folder-open\', false: \'fa-folder\'}[node.child.length>0]"></i>\
          <label class="m-r">{{node.name}}</label>\
          <label class="md-check mm-tt" ng-repeat="row in node.auth">\
            <input type="checkbox" ng-model="row.choose">\
            <i></i>\
            {{row.name}}\
          </label>\
        </div>\
      </div>\
      <ul class="list" ng-show="node.child.length>0">\
        <li  class="item" ng-repeat="node in node.child" ng-include="\'bfd_edit_nodes_renderer.html\'" bfd-toggle-tree></li>\
      </ul>');

}])

.directive('bfdToggleTree',['$timeout', function($timeout) {
  return {
    restrict: 'A',
    link: function(scope, element, attr) {
      var o = element.find('button.toggle');
      element.children('.list').hide();
      o.find('span').attr('class', 'fa fa-plus');

      o.bind('click', function() {
        var _this = angular.element(this);
        _this.find('span').attr('class') == 'fa fa-minus' ?
          (function() {
            _this.find('span').attr('class', 'fa fa-plus');
            _this.parent().next().hide();
            _this.next().find('.bfd-icon').attr('class', 'fa fa-folder bfd-icon');
            })() :
          (function() {
            _this.find('span').attr('class', 'fa fa-minus');
            _this.parent().next().show();
            _this.next().find('.bfd-icon').attr('class', 'fa fa-folder-open bfd-icon');
           })();           
       });
    }
  }
}]);