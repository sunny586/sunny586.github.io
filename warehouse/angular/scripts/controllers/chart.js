app.controller('ChartCtrl', ['$scope', function($scope) {
  $scope.plot_pie = [];
  var series = Math.floor(Math.random() * 4) + 3;

  for (var i = 0; i < series; i++) {
    $scope.plot_pie[i] = {
      label: "Series" + (i + 1),
      data: Math.floor(Math.random() * 100) + 1
    }
  }

  $scope.plot_line = [['a', 7.5], [2, 17.5], [3, 5.7], [4, 8.9], [5, 10], [6, 7], [7, 9], [8, 6], [9, 8], [10, 9]];
  $scope.plot_line_1 = [[1, 9.5], [2, 9.4], [3, 9.5], [4, 9.5], [5, 9.7], [6, 9.5], [7, 9], [8, 9.9], [9, 9.6], [10, 9.3]];
  $scope.plot_line_2 = [['a', 4.5], [2, 4.2], [3, 4.5], [4, 4.3], [5, 4.5], [6, 4.7], [7, 4.6], [8, 4.8], [9, 4.6], [10, 4.5]];
  $scope.plot_line_3 = [[1, 14], [2, 5.7], [3, 9.6], [4, 7.8], [5, 6.6], [6, 10.5]];
  $scope.ticks = [['a', 7.5], ['b', 7.5], ['c', 5.7], ['d', 8.9], ['e', 10], ['f', 7], ['g', 9], ['h', 6], ['i', 8], ['j', 9]];

}]);
