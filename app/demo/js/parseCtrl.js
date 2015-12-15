demoApp.controller('parseCtrl', ['$scope','$parse', function($scope,$parse) {

	$scope.context = {
		add: function(a, b) {
			return a + b;
		},
		mul: function(a, b) {
			return a * b
		}
	};

	$scope.expression = "mul(a, add(b, c))";

	$scope.data = {
		a: 3,
		b: 6,
		c: 9
	};

	var parseFunc = $parse($scope.expression);

	$scope.ParsedValue = parseFunc($scope.context, $scope.data);

}]);