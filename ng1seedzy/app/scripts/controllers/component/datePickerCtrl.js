/**
 * datePickerCtrl Module
 *
 * Description
 */
angular.module('app')
	.controller('datePickerCtrl', ['$scope', 'utils', function($scope, utils) {

		$scope.dateChanged = function() {

			if (new Date($scope.startTime).getTime() > new Date($scope.endTime).getTime()) {
				utils.message('开始时间不能大于结束时间', 'warning');
				return;
			}

			if (!$scope.startTime && !!$scope.endTime) {
				utils.message('请选择开始时间', 'warning');
				return;
			}

			if (!!$scope.startTime && !$scope.endTime) {
				utils.message('请选择结束时间', 'warning');
				return;
			}
		}
		$scope.$watch('startTime', function(data) {
			if (new Date(data).getTime() > new Date().getTime()) {
				$scope.startTime = getNowFormatDate();
			}
		});
		$scope.$watch('endTime', function(data) {
			if (new Date(data).getTime() > new Date().getTime()) {
				$scope.endTime = getNowFormatDate();
			}
		});
		function getNowFormatDate() {
			var date = new Date();
			var seperator1 = "-";
			var month = date.getMonth() + 1;
			var strDate = date.getDate();
			if (month >= 1 && month <= 9) {
				month = "0" + month;
			}
			if (strDate >= 0 && strDate <= 9) {
				strDate = "0" + strDate;
			}
			var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
			return currentdate;
		}

	}]);