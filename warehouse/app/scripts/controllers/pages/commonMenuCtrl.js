angular.module('app')
	.controller('commonMenuCtrl', ['$scope', '$location', 'authService', 'popupService','userInfo',
		function($scope, $location, authService, popupService,userInfo) {
			$scope.logout = function() {
				userInfo.clear();
				$location.path('/access/signin');
			}
		}
	]);