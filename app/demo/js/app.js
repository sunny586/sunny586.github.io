var demoApp = angular.module('demoApp', ['common', 'ng.webuploader', 'ui.tree', 'ng.ueditor', 'ui.bootstrap', 'ui.bootstrap.pagination', 'ui.nested.combobox']);

demoApp.run(['$rootScope','$location', function($rootScope,$location) {
	//监听路由变化,选中菜单
    $rootScope.$on('$stateChangeSuccess', function(evt, toState){
    	$rootScope.menuItem = toState.name;
    });  
    
    localStorage.setItem('isdev',$location.search()['isdev']);    
}]);

demoApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/path');
	
    $stateProvider.state('tree', {
		url: '/tree',
		templateUrl: 'views/tree.html',
		controller: 'treeCtrl'
	})
	.state('path', {
		url: '/path',
		templateUrl: 'views/path.html'
	})
	.state('btn', {
		url: '/btn',
		templateUrl: 'views/btn.html',
		controller: 'btnCtrl'
	})
	.state('dialog', {
		url: '/dialog',
		templateUrl: 'views/dialog.html',
		controller: 'dialogCtrl'
	})
	.state('form', {
		url: '/form',
		templateUrl: 'views/form.html',
		controller: 'formCtrl'
	})
	.state('http', {
		url: '/http',
		templateUrl: 'views/http.html',
		controller: 'httpCtrl'
	})
	.state('ueditor', {
		url: '/ueditor',
		templateUrl: 'views/ueditor.html',
		controller: 'ueditorCtrl'
	})
	.state('page', {
		url: '/page',
		templateUrl: 'views/page.html',
		controller: 'pageCtrl'
	})
	.state('combobox', {
		url: '/combobox',
		templateUrl: 'views/combobox.html',
		controller: 'comboboxCtrl'
	})
	.state('imglib', {
		url: '/imglib',
		templateUrl: 'views/imglib.html',
		controller: 'imglibCtrl'
	})
	.state('taglib', {
		url: '/taglib',
		templateUrl: 'views/taglib.html',
		controller: 'taglibCtrl'
	});

}]);