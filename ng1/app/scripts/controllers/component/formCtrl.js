angular.module('app')
	.controller('formCtrl', ['$scope','$timeout', function($scope,$timeout){
		
	
    $scope.ok = function(){
      console.log($scope.user)
    }

	}])