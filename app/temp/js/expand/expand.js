var expandApp = angular.module('expandApp', ['ui.tree','common','ng.ueditor','ui.bootstrap','ui.bootstrap.pagination','ui.nested.combobox']);

var module;

/*********
 * 加载左侧的导航
 * 
 * *******/
expandApp.run(['$rootScope','$location','$http', function($rootScope,$location,$http) {
	   
	
	$rootScope.rootHttp = function(){
		$http({
			method: 'GET',
			url: '/pccms/module/extend/list/tree',
			
		}).success(function(data, status, headers, config) {
	    	if(data.isSuccess){
	    		$rootScope.menus = data.data;
	    	}
	    }).error(function(data, status, headers, config) {
	    	
	    	utils.alertBox(nsw.Constant.TIP,'系统异常或网络不给力！');
	    });
	}
	$rootScope.rootHttp();
	$rootScope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        //下面是在menus完成后执行的js
      menulist();
	});
}]);
//频道扩展。
expandApp.controller('channelCtrl', ['$scope', '$rootScope','$http', '$state', 'utils','$modal', function($scope,$rootScope,$http, $state, utils,$modal) {
	
	getExtendList();
	//加载列表数据
	function getExtendList(params){
		$http({
			method: 'GET',
			url: '/pccms/module/extend/list/all',
			params: params
		}).success(function(data, status, headers, config) {			
	    	if(data.isSuccess){	    		
	    		if(data.data){
	    			$scope.modules = data.data;
	    		}else{
	    			utils.alertBox(nsw.Constant.TIP,'暂无数据！');
	    			return;
	    		}
	    	}else{
	    		//alert('获取数据失败：' + data.data);
	    		utils.alertBox(nsw.Constant.TIP,data.data);
	    	}
	    }).error(function(data, status, headers, config) {
	    	utils.alertBox(nsw.Constant.TIP,'系统异常或网络不给力！');
	    });
	};
	
	//复制模板
	$scope.copyModule = function(params){
		if(params.isDisabled){
			//alert("你访问的被锁了");
			utils.alertBox(nsw.Constant.TIP,"你访问的被锁了");
		}else{
			$http.post('/pccms/module/extend/'+params._id+'/copy')
			.success(function(data, status, headers, config) {
		    	if(data.isSuccess){
		    		getExtendList();
		    		$scope.rootHttp();
		    	}else{
			    	//alert('获取失败！'+data.data);
			    	utils.alertBox(nsw.Constant.TIP,data.data);
		    	}
		    }).error(function(data, status, headers, config) {
		    	utils.alertBox(nsw.Constant.TIP,'系统异常或网络不给力！');
		    });
		}
	} 
	//打开lock 提示弹窗
	$scope.lockinfo = function(params) {
		
		module=params;
		if(params.isDisabled){
				if(module.isDisabled == true){
					module.isDisabled = false;
				}else{
					module.isDisabled = true;
				}
				
				$http.put('/pccms/module/extend/'+module._id, module)
				.success(function(data, status, headers, config) {
			    	if(data.isSuccess){
			    		$scope.rootHttp();
			    		//$state.go('channel',null,{reload:true});
			    	}else{
				    	//alert('获取失败！'+data.data);
				    	utils.alertBox(nsw.Constant.TIP,data.data);
			    	}
			    }).error(function(data, status, headers, config) {
			    	utils.alertBox(nsw.Constant.TIP,'系统异常或网络不给力！');
			    });
		}else{
			$modal.open({
				templateUrl: 'lockinfo.html?module=',
				controller: 'lockinfoCtrl',
				backdrop: 'static',
				size: 'md'
			});	
		}
    };
	//打开删除弹窗
    $scope.deletebox = function(params) {
    	$rootScope.deletmodule=params;
		
		$modal.open({
			templateUrl: 'deletebox.html',
			controller: 'deleteboxCtrl',
			backdrop: 'static',
			size: 'md'
		});	
		
		
		
    };
    //打开增加频道弹窗
	$scope.addChannel = function() {	
			$modal.open({
				templateUrl: 'addChannelmodalBox.html',
				controller: 'addChannelmodalBoxCtrl',
				backdrop: 'static',
				size: 'md'
			});	
	};
}])

//加锁控制器
.controller('lockinfoCtrl', ['$scope', '$modalInstance', '$http','$state','utils', function($scope,$modalInstance,$http,$state,utils) {
	$scope.cancel = function() {
		$modalInstance.dismiss();
	};
$scope.updModule = function(){
	
		if(module.isDisabled == true){
			module.isDisabled = false;
		}else{
			module.isDisabled = true;
		}
		
		$http.put('/pccms/module/extend/'+module._id, module)
		.success(function(data, status, headers, config) {
	    	if(data.isSuccess){
	    		$scope.rootHttp();
	    		//$state.go('channel',null,{reload:true});
	    	}else{
		    	//alert('获取失败！'+data.data);
		    	utils.alertBox(nsw.Constant.TIP,data.data);
	    	}
	    }).error(function(data, status, headers, config) {
	    	utils.alertBox(nsw.Constant.TIP,'系统异常或网络不给力！');
	    });
		$modalInstance.close();
	} 

}])
//增加页面控制器
.controller('addChannelmodalBoxCtrl', ['$scope', '$modalInstance','$http','$state','utils', function($scope,$modalInstance,$http,$state,utils) {

	$scope.ok = function() {		
		
		$modalInstance.close();
	};

	$scope.cancel = function() {
		$modalInstance.dismiss();
	};
	  /********添加频道**************/	
	$scope.addModule = function(){
		$http.post('/pccms/module/extend/',$scope.formData)
		.success(function(data, status, headers, config) {
	    	if(data.isSuccess){
	    		//getExtendList();
	    		$scope.rootHttp();
	    		$modalInstance.close();
	    		$state.go('channel',null,{reload:true});
	    	}else{
		    	//alert('获取失败！'+data.data);
		    	utils.alertBox(nsw.Constant.TIP,data.data);
	    	}
	    }).error(function(data, status, headers, config) {
	    	utils.alertBox(nsw.Constant.TIP,'系统异常或网络不给力！');
	    });
		
	} 
}])


//分类配置。
expandApp.controller('categoryCtrl', ['$scope','$state','$http','$stateParams','$modal','utils','$rootScope',function($scope,$state,$http,$stateParams,$modal,utils,$rootScope) {
	
	$scope.pagename = $stateParams.page=="ctg"? "分类配置":"文章配置";

	$scope.fromData={};
	$scope.infoBases;
	$scope.infoSEOs = [];
	$scope.todata = function(obj,value){
		 obj.isShow=value;
	}
	/********分类配置start**************/
	$scope.getHttp = function(){
		$http({
			method: 'GET',
			url: "/pccms/module/extend/"+$stateParams.moduleId+"/"+$stateParams.page+"/compotent",
		}).success(function(data, status, headers, config) {
	    	if(data.isSuccess){
	    		$scope.basedata = data.data;
	    		$scope.infoBases = data.data.infoBase;
	    		$scope.infoSeos = data.data.infoSeo;
	    		$scope.infoOthers = data.data.infoOther;
	    		
	    	}else{
	    		utils.alertBox(nsw.Constant.TIP,data.data);
	    	}
	    }).error(function(data, status, headers, config) {
	    	utils.alertBox(nsw.Constant.TIP,'系统异常或网络不给力！');
	    });
	}
	$scope.getHttp();
	  /********分类配置end**************/	
	
	  /********提交修改start**************/
	$scope.changeOK = function(){
		$http({
			method: 'PUT',
			url: '/pccms/module/extend/compotent',
			data: $scope.basedata
		}).success(function(data, status, headers, config) {
	    	if(data.isSuccess){
	    		utils.alertBox(nsw.Constant.TIP,nsw.Constant.SAVESUC);
	    	}else{
		    	alert('获取失败！');
	    	}
	    }).error(function(data, status, headers, config) {
	    	utils.alertBox(nsw.Constant.TIP,'系统异常或网络不给力！');
	    });
	};
	/********提交修改end**************/
	
	
	/********  其他属性  新建 end**************/
	$scope.addtype = function() {	
		$modal.open({
			templateUrl: 'addProperty.html',
			controller: 'addOtherTypeCtrl',
			backdrop: 'static',
			size: 'md'
		});	
     };
     /********其他属性  新建end**************/
 	$rootScope.lists=[];
 	$rootScope.long = 1;
 	$rootScope.mylist=[];
   //修改数据  传入序号与方式
 	$scope.changtype=function(index,way){
 		console.log($rootScope.long);
 		for(list in $scope.mylist){
 			if(way=="up"){
 				if($scope.mylist[list].index==index){
 					
 	 				$scope.mylist[list].index=index-1;
 				}else if($scope.mylist[list].index==(index-1)){
 					console.log("ok");
 					$scope.mylist[list].index=index;
 				}
 			}else if(way=="down"){
 				if($scope.mylist[list].index==index){
 					$scope.mylist[list].index=index+1;
 				}else if($scope.mylist[list].index==(index+1)){
 					$scope.mylist[list].index=index;
 				}
 			}
 		}
 		jtou();
 		pxun()
 		//console.log($scope.lists);
 	}
 	//箭头状态
 	function jtou(){
		for(list in $scope.mylist){
			if($rootScope.long == 1){
				$scope.mylist[list].up=false;
				$scope.mylist[list].down=false;
				
			}else if($scope.mylist[list].index==1){
				$scope.mylist[list].down=true;
				$scope.mylist[list].up=false;
			}else if($scope.mylist[list].index==$rootScope.long-1){
				$scope.mylist[list].up=true;
				$scope.mylist[list].down=false;
			}else{
				$scope.mylist[list].up=true;
				$scope.mylist[list].down=true;
			}
		}
	}
 	//对数据排序
 	function pxun(){
 		$rootScope.mylist = [];
 		
 		for(var i = 0 ; i<$scope.lists.length; i++){
				for(var j = 0; j<$scope.lists.length;j++){
					if($scope.lists[j].index==(i+1)){
						$rootScope.mylist.push($scope.lists[j]);
		 			}
			   }
 		}
 		
 		console.log($scope.mylist)
 	}
	
 	//删除数据
 	$scope.deletOtherType = function(index){
 		for(var i=index;i<$scope.mylist.length;i++){
 			if($scope.mylist[i].index>(index+1)){
 				$scope.mylist[i].index = $scope.mylist[i].index-1;
 			}
 		}
 		$scope.mylist.splice(index,1);
 		$scope.lists.splice(index,1);
 		$rootScope.long--;
 		console.log($scope.mylist);
 	}
}]);

//deletebox 页面。
expandApp.controller('deleteboxCtrl', ['$scope','$http','$modalInstance','$state','utils', function($scope,$http,$modalInstance,$state,utils) {
    $scope.ok = function() {		
		
		$modalInstance.close();
	};

	$scope.cancel = function() {
		$modalInstance.dismiss();
	};
	
	$scope.deleteboxHttp = function(){
		$http({
			method: 'GET',
			url: '/pccms/module/extend/'+$scope.deletmodule._id+'/ctgNum',
			params: {'pageSize': 20, 'tagIds': 'TAG001'}
		}).success(function(data, status, headers, config) {
	    	if(data.isSuccess){
	    		$scope.deletemoduledata = data.data;
	    	}else{
		    	alert('获取失败！'+data.data);
	    	}
	    }).error(function(data, status, headers, config) {
	    	utils.alertBox(nsw.Constant.TIP,'系统异常或网络不给力！');
	    });
	}
	$scope.deleteboxHttp();
	 $scope.delModule = function(){
			
			$http({
				method: 'DELETE',
				url: '/pccms/module/extend/'+$scope.deletmodule._id,
				params: {}
			}).success(function(data, status, headers, config) {
		    	if(data.isSuccess){
		    		$scope.rootHttp();
		    		$state.go('channel',null,{reload:true});
		    		$scope.ok();
		    	}else{
			    	alert('获取失败！'+data.data);
		    	}
		    }).error(function(data, status, headers, config) {
		    	utils.alertBox(nsw.Constant.TIP,'系统异常或网络不给力！');
		    });
		
		
	} 
}]);

//文章配置。
expandApp.controller('airticleCtrl', ['$scope', function($scope) {
 
	

}]);


//其他属性添加
expandApp.controller('addOtherTypeCtrl', ['utils','$scope','$modalInstance','$rootScope', function(utils,$scope,$modalInstance,$rootScope) {
	 $scope.ok = function() {		
			
			$modalInstance.close();
		};

		$scope.cancel = function() {
			$modalInstance.dismiss();
		};
	   //选择文件类型
		var type="text";
	$scope.checkway = function(mod){
		type="mod";
		 if(mod=="text"){
			
			 $(".textbox").show();
			 $(".dtbox").hide();
		 }else{
			 $(".textbox").hide();
			 $(".dtbox").show();
		 }
	}
	
	//显示input  还是textarea
	var flag=true;
	$scope.moretoggle = function(){
		console.log("!!!!");
		if(flag){
			$(".areat").show();
			$(".textx").hide();
			flag = false;
		}else{
			$(".textx").show();
			$(".areat").hide();
			flag = true;
		}
	}
	
	
	//添加属性个数
	var index=5;
    $scope.inputlist =[{"num":"1"},{"num":"2"},{"num":"3"},{"num":"4"},{"num":"5"}];
    
	$scope.addtext = function(){
		index++;
		 $scope.inputlist.push({'num':index})

		 
	}
	
	//定义数据
	$scope.adddata={};//定义一级容器

	
	//添加数据
	$scope.adddatafun = function (){
		
		if(type=="text"){
			$scope.adddata.value = $scope.zdcdbg&&!flag?$scope.zdcdbg:$scope.zdcd;
		}else{
			$scope.adddata.value = [];
			for(var i = 0;i< $scope.inputlist.length;i++){
				if($scope.inputlist[i].sx){
				    $scope.adddata.value.push($scope.inputlist[i].sx)

				}
			}
		
		}
		$scope.adddata.index=$rootScope.long;
		$scope.lists.push($scope.adddata);
		$rootScope.mylist.push($scope.adddata);
		 jtou();
		 $rootScope.long++;
		//console.log($rootScope.mylist);
		$scope.adddata = {};		
	}
	
	//总数据
   
	//通过序号判断上下箭头
	function jtou(){
		for(list in $scope.lists){
			if($rootScope.long == 1){
				$scope.mylist[list].up=false;
				$scope.mylist[list].down=false;
				
			}else if($scope.mylist[list].index==1){
				$scope.mylist[list].down=true;
				$scope.mylist[list].up=false;
			}else if($scope.mylist[list].index==$rootScope.long){
				$scope.mylist[list].up=true;
				$scope.mylist[list].down=false;
			}else{
				$scope.mylist[list].up=true;
				$scope.mylist[list].down=true;
			}
		}
	}
}]);


//路由配置。
expandApp.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	     $urlRouterProvider.otherwise('/channel');
				$stateProvider.state('channel', { //频道扩展。
			url: '/channel',
			templateUrl: 'channel.html',
			controller: 'channelCtrl'
		}).state('category', { //分类配置。
			url: '/category?moduleId&page',
			templateUrl: 'category.html',
			controller: 'categoryCtrl'
		})		
	}
]);


/************
 * 加载menu的点击动画效果  
 * a.添加angularjs 在menu 遍历完时的监控
 * b.当menu遍历完成时候  加载动画js menulist()
 * **********/

expandApp.directive('onFinishRenderFilters', function ($timeout) {
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
