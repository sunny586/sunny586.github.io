var infoApp = angular.module('infoApp', ['ui.tree','common','ng.ueditor','ui.bootstrap','ui.bootstrap.pagination','ui.nested.combobox']);

infoApp.run(['$rootScope','$location','$http', function($rootScope,$location,$http) {   
	
	$rootScope.rootHttp = function(){
		$http({
			method: 'GET',
			url: '/pccms/module/extend/list/tree',
			
		}).success(function(data, status, headers, config) {
	    	if(data.isSuccess){
	    		$rootScope.menus = data.data;
	    	}
	    }).error(function(data, status, headers, config) {
	    	console.log('系统异常或网络不给力！');
	    });
	}
	$rootScope.rootHttp();
	$rootScope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        //下面是在menus完成后执行的js
      menulist();      
	});
}]);

//路由配置、
infoApp.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
		.state('list', { //文章列表。		
			url: '/list?moduleId&name&page',
			templateUrl: 'list.html',
			controller: 'listCtrl'
		})
		.state('add', { //文章录入。		
		    url: '/add?moduleId&name&page',
		    templateProvider: ['$stateParams', '$http', function ($stateParams,$http) {
		    	return $http
		            .get('../../module/extend/'+$stateParams.moduleId+'/'+$stateParams.page+'/render/')
		            .then(function(response) {
		                return response.data;
		            });
		    }],
			controller: 'editCtrl'
		})
		.state('info-add', { 
			url: "/info-add",
			templateUrl: 'edit.html',			  
			controller: 'editCtrl'
		})
		.state('edit', { //文章修改。	
		  url: '/edit?id&isLink&moduleId&name&page',
		  templateProvider: ['$stateParams', '$http', function ($stateParams,$http) {
		  	return $http
		          .get('../../module/extend/'+$stateParams.moduleId+'/'+$stateParams.page+'/render/')
		          .then(function(response) {
		              return response.data;
		          });
		  }],
		  controller: 'editCtrl'
		})
		.state('info-edit', { 
			url: '/info-edit?id&isLink&moduleId&name&page',
			templateUrl: 'edit.html',		  
			controller: 'editCtrl'
		})
		.state('classify', { //分类列表
			url: '/classify?moduleId&name&page',
			templateUrl: 'classify.html',
			controller: 'classifyCtrl'
		}).state('addClassify', { //分类录入 
			 url: '/addClassify?moduleId&name&page',
			 templateProvider: ['$stateParams', '$http', function ($stateParams,$http) {			
			 	return $http
			         .get('../../module/extend/'+$stateParams.moduleId+'/'+$stateParams.page+'/render/')
			         .then(function(response) {
			             return response.data;
			         });
			 }],
			controller: 'addClassifyCtrl'
		})
		.state('info-addClassify', { 
			 url: '/info-addClassify',
			 templateUrl: 'addClassify.html',		
			controller: 'addClassifyCtrl'
		})
		// .state('classifyEdit', { //分类修改。	
		//   url: '/classifyEdit?id&isLink&moduleId&name&page',
		//   templateProvider: ['$stateParams', '$http', function ($stateParams,$http) {
		//   	return $http
		//           .get('')
		//           .then(function(response) {
		//               return response.data;
		//           });
		//   }],
		//   controller: 'addClassifyCtrl'
		// })
		.state('info-classifyEdit', { 
			 url: '/info-classifyEdit?id&isLink&moduleId&name&page',
			 templateUrl: 'addClassify.html',		
			controller: 'addClassifyCtrl'
		})
		;
	}
	
]);

angular.module('infoApp').directive('leftInformation', function() {
	 return {
        restrict : 'ACE',
        replace : true,        
        scope : {},
        link : function(scope, element, attrs) { 
				element.find('button').bind('click',function(){					
				$(this).hide();
				element.find('.left-info').show();
			});        	
		}
    }
});


infoApp.factory('commonTool',function() {
	return {
		getLocalTime: function() {
			var today=new Date();
			var y=today.getFullYear();
			var mh = today.getMonth()+1;
			var d= today.getDate();
			var h=today.getHours();
			var m=today.getMinutes();
			return y+'-'+mh+'-'+d+' '+h+':'+m;
		}
	}
});

/************
 * 加载menu的点击动画效果  
 * a.添加angularjs 在menu 遍历完时的监控
 * b.当menu遍历完成时候  加载动画js menulist()
 * **********/

infoApp.directive('onFinishRenderFilters', function ($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function() {
                    scope.$emit('ngRepeatFinished');
                });
            }
        }
    };
});
