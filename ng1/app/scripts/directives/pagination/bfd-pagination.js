'use strict';
/**
 * @ngdoc function
 * @name app.directive:bfdPagination
 * @description
 * # bfdPagination
 * Directive of the app
 */
angular.module('app')
  .directive('bfdPagination', ['$timeout', function($timeout) {
    return {
      restrict: 'ACE',
      require: 'ngModel',
      controller: ['$scope', function($scope) {

        $scope.keyUp = function() {
          var pagers = Math.ceil($scope.totalItems / $scope.pageSize);
          var reg = /^[0-9]$/;
          var num = '';
          for (var i = 0; i < $scope.goPage.length; i++) {
            if (reg.test($scope.goPage.charAt(i))) {
              num += $scope.goPage.charAt(i);
            }
          }
          if (parseInt(num) == 0) {
            $scope.goPage = 1;
          } else if (parseInt(num) > pagers) {
            $scope.goPage = pagers;
          } else {
            $scope.goPage = parseInt(num);
          }
        }

        $scope.$watch('total', function(newOptions) {
          $timeout(function() {
            $scope.totalItems = newOptions;
            $scope.totalItems <= $scope.pageSize ? $scope.isHasPagination = false : $scope.isHasPagination = true;
          })
        });

        $timeout(function() {
          $scope.currentPage = $scope.ngModel;
        });

        $scope.$watch('pageSize', function(newOptions) {
          $scope.pageSize = newOptions;
        });

      }],
      templateUrl: 'views/directives/bfd-pagination.html',
      transclude: true,
      replace: true,
      scope: {
        total: '=',
        maxSize: '=',
        pageSize: '=',
        ngModel: '=',
        change: '&'
      },
      link: function(scope, element, attr, ctrl) {

        scope.changePaged = function() {
          setCurrent(scope.currentPage);
        }
        scope.go = function() {
          scope.currentPage = scope.goPage;
          setCurrent(scope.goPage);
        }

        function setCurrent(data) {
          ctrl.$setViewValue(data);
          scope.change();
        }
      }
    };
  }]);