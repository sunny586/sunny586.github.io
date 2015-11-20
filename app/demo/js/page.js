demoApp.controller('pageCtrl', ['$scope', function ($scope){
	
	//分页条
	$scope.totalItems = 64;
	$scope.currentPage = 4;

	$scope.setPage = function (pageNo) {
	  $scope.currentPage = pageNo;
	};

	$scope.pageChanged = function() {
	  $log.log('Page changed to: ' + $scope.currentPage);
	};

	$scope.maxSize = 5;
	$scope.bigTotalItems = 175;
	$scope.bigCurrentPage = 1;
	
	//进度条
	$scope.visible = true;
    $scope.w = 0 ; 
    
    $scope.increase = function(){
    	if($scope.w >=100){
    		return;
    	}
    	$scope.w += 10;
    	$scope.style = {width: $scope.w+'%'};   	
    } 
}]);