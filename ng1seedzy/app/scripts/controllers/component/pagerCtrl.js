/**
 * app Module
 *
 * Description
 */
angular.module('app')
	.controller('pagerCtrl', ['$scope', function($scope) {

		$scope.maxSize = 5; //分页条长度。
		$scope.currentPage = 1; //当前页。默认是第一页。
		$scope.pageSize = 10; //每页条数。
		$scope.totalItems = 1000;

	}]);