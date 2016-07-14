angular.module('app')
	.controller('selectCtrl', ['$scope','$timeout', function($scope,$timeout){
		
	
	$scope.products = [
        { id: 1, name: 'apple' },
        { id: 2, name: 'mi' },
        { id: 3, name: 'tcl' },
        { id: 4, name: 'samsung' },
        { id: 5, name: 'huawei' },
      ];


      $scope.changed = function(){
      	console.log($scope.product)
      }


	}])