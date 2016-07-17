/**
 * app Module
 *
 * Description
 */
angular.module('app')
	.controller('uploadCtrl', ['$scope', function($scope) {

		$scope.uploader = function(){
			console.log($scope.upload);			
		}
		

	}]);