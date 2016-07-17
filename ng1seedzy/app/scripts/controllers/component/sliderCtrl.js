/**
* app Module
*
* Description
*/
angular.module('app')
	.controller('sliderCtrl', ['$scope', function($scope){
		

		$scope.currencyFormatting = function(value) {
				return value.toString() + '%';
			}

	}]);