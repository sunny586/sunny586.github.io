angular.module('app')
   .controller('ChatsFormCtrl', ['$scope','$state','cacheService',function($scope,$state,cacheService) { 	
	  
   		$scope.role = cacheService.getLocalStorage('role');
   		
   }]);