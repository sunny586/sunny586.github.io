/**
 * app Module
 *
 * Description
 */
angular.module('app')
	.controller('httpCtrl', ['$scope', '$http', 'httpRequestService', 'MESSAGE',
		function($scope, $http, httpRequestService, MESSAGE) {

			$scope.maxSize = 5; //分页条长度。
			$scope.currentPage = 1; //当前页。默认是第一页。
			$scope.pageSize = 10; //每页条数。

			$scope.loadData = function() {
				var params = {
					size: $scope.pageSize,
					page: $scope.currentPage
				}
				httpRequestService.get(MESSAGE.STUDY_LIST, params)
					.success(function(response) {
						if (response.success == 'ok') {
							$scope.totalItems = response.totalItems;
							$scope.studys = response.data;
						}
					})
					.error(function(err, code) {
						console.log(err);
					});
			}
			$scope.loadData();
		}
	])