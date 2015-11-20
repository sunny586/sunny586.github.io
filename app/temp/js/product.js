var productApp = angular.module('productApp', ['ui.tree', 'common', 'ui.bootstrap', 'ui.bootstrap.pagination']);

//添加分类。
productApp.controller('categoryCtrl', ['$scope', '$http', '$state', '$stateParams', function($scope, $http, $state, $stateParams) {




}]);


productApp.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider.state('addCategory', {
			url: '/addCategory',
			templateUrl: 'category.html',
			controller: 'categoryCtrl'
		})
	}
]);