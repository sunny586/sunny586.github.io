/**
 * app Module
 *
 * Description
 */
angular.module('app')
	.controller('messageCtrl', ['$scope', 'utils', function($scope, utils) {

		$scope.error = function(type) {
			type == 'close'　 ?
				utils.message('这是失败信息', 'error', 'close') :
				utils.message('这是失败信息', 'error');
		}

		$scope.success = function(type) {
			type == 'close'　 ?
				utils.message('这是成功信息', 'success', 'close') :
				utils.message('这是成功信息', 'success');
		}

		$scope.warning = function(type) {
			type == 'close'　 ?
				utils.message('这是警告信息', 'warning', 'close') :
				utils.message('这是警告信息', 'warning');
		}

	}]);