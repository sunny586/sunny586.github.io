var tplMarketApp = angular.module('tplMarketApp', ['ui.tree','common','ng.ueditor','ui.bootstrap','ui.bootstrap.pagination']);

//模板市场
tplMarketApp.controller('tplMarketCtrl', ['$scope', '$http', '$state', '$stateParams', 'utils', function($scope, $http, $state, $stateParams, utils) {
	//筛选类型
	$scope.filterType = 'single';
	//记录选中项
	$scope.selectList = [];
	//记录筛选列表数据
	$scope.filterData = {};
	$scope.mask = false;
	//加载标签列表
	$http.get('/pccms/tpl/loadTplTag').success(function(data, status, headers, config) {
	    if(data.isSuccess){
	    	$scope.tagList = data.data;
	    	initTagState();
	    	//加载初始筛选列表
	    	filterTplList($http, $scope.selectList.join(","));
	    }else{
		    utils.alertBox(nsw.Constant.TIP, nsw.Constant.TAGFAILURE);
	    }
	 })
	 .error(function(data, status, headers, config) {
	     utils.alertBox(nsw.Constant.TIP,nsw.Constant.NETWORK);
	 });
	
	//初始化标签选择状态
	function initTagState(){
		for(var i in $scope.tagList){
			var item = $scope.tagList[i];
			for(var j in item.children){
				var child = item.children[j];
			}		
		}
	};
	
	//标签选择事件
	$scope.selectTag = function(tag, tags){
		if(tags.isDisabled){
			return;
		}
		if(tag.selected){
			tag.selected = false;
			removeTag(tag._id);
		}else{
			removeSelectTag(tags);
			tag.selected = true;
			$scope.selectList.push(tag._id);
		}
		filterTplList($http, $scope.selectList.join(","));	
	};
	
	//去除同级标签选中项
	function removeSelectTag(tags){
		for(var i in tags.children){
			var item = tags.children[i];
			if(item.selected){
				item.selected = false;
				removeTag(item._id);
			}
		}
	};
	
	//移除选择项
	function removeTag(tagId){
		for(var i in $scope.selectList){
			if(tagId == $scope.selectList[i]){
				$scope.selectList.splice(i,1)
				return;
			}
		}
	};
	
	//弹出新增模板
	$scope.addTpl = function() {
		$scope.mask = true;
	};
	
	//公用模板保存
	$scope.saveTpl = function(){
		var obj = {};
			obj.tag = $scope.selectList.join(",");
			obj.name = $scope.name;
			obj.content = $scope.content;
			obj.isPubTpl = true;
			if($scope.res) obj.imgSm = $scope.res[0].path || '';
			if($scope.res1) obj.imgMd = $scope.res1[0].path || '';
			if($scope.res2)obj.imgLg = $scope.res2[0].path || '';
			if($scope.res3)obj.imgFr = $scope.res3[0].path || '';
			
		$http({
			method: 'POST',
			url: '/pccms/tpl/page/add',
			data: obj
		}).success(function(data, status, headers, config) {
	    	if(data.isSuccess){
	    		closeDialog();
	    		//加载 单页模板
	    		filterTplList($http, $scope.selectList.join(","));
	    	}else{
		    	utils.alertBox(nsw.Constant.TIP,nsw.Constant.OPERATION);
		    }
	    }).error(function(data, status, headers, config) {
	    	utils.alertBox(nsw.Constant.TIP,nsw.Constant.NETWORK);
	    });
	};
	
	//取消
	$scope.cancelTpl = function(){
		closeDialog();
	};
	
	//关闭弹框
	function closeDialog(){
		$scope.mask = false;
	};
	
	//点击模版市场 ‘预览’
    $scope.filType = function(type){
    	$scope.filterType = type;
    	filterTplList($scope.filterType, $scope.selectList.join(","));   	
    };
    
    //在模板市场中预览单页,单页id为singleId
	$scope.preSinglePag = function(singleId){
		$state.go('preview', {'id': singleId});
	};
	
	//在模板市场中预览套装,套装id
	$scope.previewPackPag = function(packId){
		$state.go('previewPack', {'id': packId});
	};  
	
	//筛选模板
	function filterTplList(http,tagArr){
		var requestUrl = '/pccms/tpl/pubPageTpl/' + $scope.filterType + '/1';
		$http({
			method: 'GET',
			url: requestUrl,
			params: {'pageSize': 20, 'tagIds':tagArr||'', 'isPubTpl': true}
		})
		.success(function(data, status, headers, config) {
	    	if(data.isSuccess){
	    		$scope.filterData = data.data;
	    		for(var i in $scope.filterData){
	    			var item = $scope.filterData[i];
	    			for(var j in item){
	    				if(item[j].imgSm == undefined){
	    					item[j].imgSm = '../../img/nsw.png';
	    				}
	    			}
	    		};
	    	}else{
		    	utils.alertBox(nsw.Constant.TIP, nsw.Constant.TAGFAILURE);
	    	}
	    })
	    .error(function(data, status, headers, config) {
	    	utils.alertBox(nsw.Constant.TIP,nsw.Constant.NETWORK);
	    });
	}
	
}]);

//单页面预览
tplMarketApp.controller('previewCtrl', ['$scope','$http','$state','$stateParams','utils',function ($scope,$http,$state,$stateParams,utils) {
	$scope.tplId = $stateParams.id;
	//筛选类型
	$scope.filterType = $stateParams.type;
	//效果图、框架图之间的切换
	$scope.isShow = true;
	$scope.mask = false;
	//取消
	$scope.cancelTpl = function(){
		closeDialog();
	}
	//关闭弹框
	function closeDialog(){
		$scope.mask = false;
	}
	//筛选模板
	$http.get('/pccms/tpl/pubPageTpl/' + $stateParams.id)
	     .success(function(data, status, headers, config) {
			 if(data.isSuccess){
				 $scope.dat = data.data;
			 }else{
		    	 utils.alertBox(nsw.Constant.TIP,nsw.Constant.OPERATION);
		     }
         }).error(function(data, status, headers, config) {
   	         utils.alertBox(nsw.Constant.TIP,nsw.Constant.NETWORK);
    });
	
   //右侧菜单效果图
   $scope.desket = true;
   $scope.clickDesSketch = function(){
	   $scope.frmchat = $scope.design = $scope.source = $scope.tpldes = $scope.used = false;
	   $scope.isShow = true;
	   $scope.desket = true;
   }
   //右侧菜单框架图
   $scope.clickFrmChart = function(){
	   $scope.desket = $scope.design = $scope.source = $scope.tpldes = $scope.used = false;
	   $scope.isShow = false;
	   $scope.frmchat = true;
	   
   }
  
   var _tplId;
   //编辑公有页面源码
   $scope.editSource = function(tplId){
	   _tplId = tplId;
	   $scope.mask = true;
	   $scope.desket = $scope.frmchat = $scope.design = $scope.tpldes = $scope.used = false;
	   $scope.source = true;
	   $http({
		   method: 'GET',
		   url: '/pccms/tpl/page/load/'+tplId+'/?isPubTpl ='+ GetRequest(),
		}).success(function(data, status, headers, config) {
	    	if(data.isSuccess){
	    		$scope.name = data.name;
	    		$scope.content = data.htmlContent; 
	    		$scope.res = [];
	    		$scope.res[0] = {};
	    		$scope.res[0].path = data.imgSm;
	    		
	    		$scope.res1 = [];
	    		$scope.res1[0] = {};
	    		$scope.res1[0].path = data.imgMd;
	    		
	    		$scope.res2 = [];
	    		$scope.res2[0] = {};
	    		$scope.res2[0].path = data.imgLg;	
	    		
	    		$scope.res3 = [];
	    		$scope.res3[0] = {};
	    		$scope.res3[0].path = data.imgFr;
   		
	    	}else{
		    	utils.alertBox(nsw.Constant.TIP,nsw.Constant.OPERATION);
		    }
	    }).error(function(data, status, headers, config) {
	    	utils.alertBox(nsw.Constant.TIP,nsw.Constant.NETWORK);
	    });
   }
   
   $scope.saveTpl = function(){
		var obj = {};
		obj.name = $scope.name;
		obj.content = $scope.content;
		obj.isPubTpl = true;
		if($scope.res) obj.imgSm = $scope.res[0].path || '';
		if($scope.res1) obj.imgMd = $scope.res1[0].path || '';
		if($scope.res2)obj.imgLg = $scope.res2[0].path || ''; 
		if($scope.res3)obj.imgFr = $scope.res3[0].path || ''; 
		saveCode(obj);
	}
   
   function saveCode(_obj){
	   console.log(JSON.stringify(_obj))
	   $http({//保存
			method: 'POST',
			url: '/pccms/tpl/page/'+_tplId+'/?isPubTpl ='+ GetRequest(),
			data: _obj
		}).success(function(data, status, headers, config) {
	    	if(data.isSuccess){
	    		closeDialog();
	    		$state.go('preview',{'id': _tplId});
	    	}else{
	    		utils.alertBox(nsw.Constant.TIP,nsw.Constant.OPERATION);
	    	}
	    }).error(function(data, status, headers, config) {
	    	utils.alertBox(nsw.Constant.TIP,nsw.Constant.NETWORK);
	    });
   };
   
   //通过url，获取参数
   function GetRequest() {   
	   //var url = location.search; //获取url中"?"符后的字串   
	   alert('1');
	  /* var theRequest = new Object();   
	   if (url.indexOf("?") != -1) {   
	      var str = url.substr(1);   
	      strs = str.split("&");   
	      for(var i = 0; i < strs.length; i ++) {   
	         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);   
	      }   
	   }   
	   return theRequest;  */ 
	};
	
   //公有页面模板的设计
   $scope.tplDesign = function(tplId){
	   $scope.desket = $scope.frmchat = $scope.source = $scope.design = $scope.used = false;
	   $scope.tpldes = true;
	   var url = '/pccms/pageTpl/design/'+tplId+'/edit?isPubTpl=true';
	   window.open(url);	   
   }
   
   //取消
   $scope.cancelTpl = function(){
	   closeDialog();
   }
   //关闭弹框
   function closeDialog(){
	   $scope.mask = false;
   }
   //返回
   $scope.clickRet = function(){
	   $state.go('tplMarket');   
   }

}]);

//套装页面预览
tplMarketApp.controller('previewPackCtrl', ['$scope','$http','$state','$stateParams','utils', function ($scope,$http,$state,$stateParams,utils) {
	$scope.packId = $stateParams.id;
	$http.get('/pccms/tpl/pubPageTplPack/'+$scope.packId)
	.success(function(data, status, headers, config) {
	 	if(data.isSuccess){
	 		$scope.data = data.data[0];
	 	}else{
	    	utils.alertBox(nsw.Constant.TIP,nsw.Constant.OPERATION);
	    }
	 })
	 .error(function(data, status, headers, config) {
	 	 utils.alertBox(nsw.Constant.TIP,nsw.Constant.NETWORK);
	 });
   //套装树形结构页面返回操作
   $scope.packUsedBack = function(){
	   $state.go('preview');
   };
   //树形列表，鼠标移动到缩略图，中图显示
   $scope.mdShowed = function(name){
	   $scope.nodeName = name;
   };
   //树形列表，鼠标移动到缩略图，中图隐藏
   $scope.mdHided = function(name){
	   $scope.nodeName = !name; 
   };
   //树形列表，点击缩略图，进入套装效果图页面
   $scope.singlePage = function(id){
	   $state.go('preview',{'id': id, 'type': 'pack'});
   };
   
   var _tplId;
   //编辑公有页面源码
   $scope.editSource = function(tplId){
	   alert(GetRequest())
	   _tplId = tplId;
	   $scope.mask = true;
	   $scope.desket = $scope.frmchat = $scope.design = $scope.tpldes = $scope.used = false;
	   $scope.source = true;
	   $http({
		   method: 'GET',
		   url: '/pccms/tpl/page/load/'+tplId+'/?isPubTpl ='+ GetRequest(),
		}).success(function(data, status, headers, config) {
	    	if(data.isSuccess){
	    		$scope.name = data.name;
	    		$scope.content = data.htmlContent; 
	    		$scope.res = [];
	    		$scope.res[0] = {};
	    		$scope.res[0].path = data.imgSm;
	    		
	    		$scope.res1 = [];
	    		$scope.res1[0] = {};
	    		$scope.res1[0].path = data.imgMd;
	    		
	    		$scope.res2 = [];
	    		$scope.res2[0] = {};
	    		$scope.res2[0].path = data.imgLg;	
	    		
	    		$scope.res3 = [];
	    		$scope.res3[0] = {};
	    		$scope.res3[0].path = data.imgFr;	
   		
	    	}else{
		    	utils.alertBox(nsw.Constant.TIP,nsw.Constant.OPERATION);
		    }
	    }).error(function(data, status, headers, config) {
	    	utils.alertBox(nsw.Constant.TIP,nsw.Constant.NETWORK);
	    });
   }
   
   $scope.saveTpl = function(){
		var obj = {};
		obj.name = $scope.name;
		obj.content = $scope.content;
		obj.isPubTpl = false;
		if($scope.res) obj.imgSm = $scope.res[0].path || '';
		if($scope.res1) obj.imgMd = $scope.res1[0].path || '';
		if($scope.res2)obj.imgLg = $scope.res2[0].path || ''; 
		if($scope.res3)obj.imgFr = $scope.res3[0].path || ''; 
		saveCode(obj);
	}
   
   function saveCode(_obj){
	   $http({//保存
			method: 'POST',
			url: '/pccms/tpl/page/'+_tplId+'/?isPubTpl ='+ GetRequest(),
			data: _obj
		}).success(function(data, status, headers, config) {
	    	if(data.isSuccess){
	    		closeDialog();
	    		$state.go('previewPack',{'id': _tplId});
	    	}else{
	    		utils.alertBox(nsw.Constant.TIP,nsw.Constant.OPERATION);
	    	}
	    }).error(function(data, status, headers, config) {
	    	utils.alertBox(nsw.Constant.TIP,nsw.Constant.NETWORK);
	    });
   }
   
   //公有页面模板的设计
   $scope.tplDesign = function(tplId){
	   $scope.desket = $scope.frmchat = $scope.source = $scope.design = $scope.used = false;
	   $scope.tpldes = true;
	   window.open('/pccms/pageTpl/design/'+tplId+'/edit?isPubTpl=true');
   };
   
   //通过url，获取参数
   function GetRequest() {   
	   //var url = location.search; //获取url中"?"符后的字串   
	   alert("123");
//	   var theRequest = new Object();   
//	   if (url.indexOf("?") != -1) {   
//	      var str = url.substr(1);   
//	      strs = str.split("&");   
//	      for(var i = 0; i < strs.length; i ++) {   
//	         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);   
//	      }   
//	   }   
//	   return theRequest;   
	};
   
}]);

//模板市场，路由配置
tplMarketApp.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider.state('tplMarket', {
			url: '/',
			templateUrl: 'tplMarket.html',
			controller: 'tplMarketCtrl'
		}).state('preview', {
			url: '/preview/{id}/{type}',
			templateUrl: 'preview.html',
			controller: 'previewCtrl'
		}).state('previewPack', {
			url: '/previewPack/{id}',
			templateUrl: 'previewPack.html',
			controller: 'previewPackCtrl'
	})}
]);
