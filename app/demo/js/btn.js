demoApp.controller('btnCtrl', ['$scope', function ($scope){	

	localStorage.getItem('isdev') == 'true' ? $scope.status = true : $scope.status = false;
	
	$scope.singleModel = 1;

	$scope.radioModel = 'Middle';

	$scope.checkModel = {
		left : false,
		middle : true,
		right : false
	};

	$scope.checkResults = [];

	$scope.$watchCollection('checkModel', function() {
		$scope.checkResults = [];
		angular.forEach($scope.checkModel, function(value, key) {
			if (value) {
				$scope.checkResults.push(key);
			}
		});
	});
}]);