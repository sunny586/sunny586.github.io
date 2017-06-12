/**
 * app Module
 *
 * Description
 */
angular.module('app')
	.controller('confirmCtrl', ['$scope', 'utils', function($scope, utils) {

		$scope.ok = function() {
			
			utils.confirmBox('提示', '确认删除吗？', function() {
				alert('点击了确定')
			}, function() {
				alert('点击了取消')
			}, 'sm');
		};

		$scope.ok2 = function() {
			
			alert('点击了确定');
		};


	}]);