var pageEditApp = angular.module('pageEditApp', ['common'])

pageEditApp.controller('pageCtrl', ['$scope', '$state', '$http', 'utils', function($scope, $state, $http, utils) {
	$scope.sysBasePath = sysBasePath; 
	$scope.projPageData = projPageData;
	//弹出区块定制编辑窗口
	$scope.edit = function(projBlkName) {
		$scope.projBlkName = projBlkName;
		$state.go('blkEdit');
	};
	
	//源码编辑弹框
	$scope.editSource = function(tplId) {
		$http({
			   method: 'GET',
			   url: sysBasePath + '/tpl/page/load/'+tplId+'/?isPubTpl='+(GetRequest().isPubTpl == 'false'? false :true),
			}).success(function(data, status, headers, config) {
		    	if(data.isSuccess){
		    		console.log(JSON.stringify(data))
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
		$state.go('srcCodeEdit',{"id":tplId, "isPubTpl":GetRequest().isPubTpl});
	};
	
	//通过url，获取参数
	   function GetRequest() {   
		   var url = location.search; //获取url中"?"符后的字串   
		  var theRequest = new Object();   
		   if (url.indexOf("?") != -1) {   
		      var str = url.substr(1);   
		      strs = str.split("&");   
		      for(var i = 0; i < strs.length; i ++) {   
		         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);   
		      }   
		   }   
		   return theRequest;
		};

		
	//备份页面效果
	$scope.backup = function() {
		if($scope.projPageData.bakConf.bak.length >= 1){
			$scope.disabled = true;
		}
		
		$http.put(sysBasePath +'/pageTpl/design/' + $scope.projPageData.id + '/bak?isPubTpl='+$scope.projPageData.isPubTpl)
		.success(function(data, status, headers, config) {
	    	if(data.isSuccess){
	    		//操作成功！
	    		$scope.projPageData.bakConf.bak.push(data.data);
	    	}else{
	    		utils.alertBox(nsw.Constant.TIP, nsw.Constant.OPERATION);
	    	}
	    })
	    .error(function(data, status, headers, config) {
	    	utils.alertBox(nsw.Constant.TIP, nsw.Constant.NETWORK);
	    });
	};
	
	//删除页面效果备份
	$scope.delBackup = function(idx,bakId) {
		$http({
			method: 'DELETE',
			url:sysBasePath + '/pageTpl/design/' + $scope.projPageData.id + '/bak',
			params: {'bakId': bakId}
		}).success(function(data, status, headers, config) {
	    	if(data.isSuccess){
	    		$scope.projPageData.bakConf.bak.splice(idx, 1);
	    		$scope.disabled = false;
	    	}else{
	    		utils.alertBox(nsw.Constant.TIP, nsw.Constant.DATAFAILURE + data.data);
	    	}
	    }).error(function(data, status, headers, config) {
	    	utils.alertBox(nsw.Constant.TIP, nsw.Constant.NETWORK);
	    });
	};
	
	//项目页面对比效果
	$scope.compare = function(){
		/*if($scope.projPageData.bakConf.bak.length < 2){
			utils.alertBox('提示','对比至少需要两个效果备份！');
			return;
		}*/
		if('same' == $scope.projPageData.bakConf.type){
			var bak = $scope.projPageData.bakConf.bak;
			var url =sysBasePath + '/pageTpl/design/' + $scope.projPageData.id + '/sameCompare/'+bak[0]+'/'+bak[1]+'?isPubTpl='+$scope.projPageData.isPubTpl;
			window.open (url, '_blank');
		}else{
			var bak = $scope.projPageData.bakConf.bak;
			window.open (sysBasePath +'/pageTpl/design/' + $scope.projPageData.id + '/wideCompare/'+bak[0]+'?isPubTpl='+$scope.projPageData.isPubTpl, '_blank');
			window.open (sysBasePath +'/pageTpl/design/' + $scope.projPageData.id + '/wideCompare/'+bak[1]+'?isPubTpl='+$scope.projPageData.isPubTpl, '_blank');
		}
	}
	
	   
	   
	//保存页面设计
	$scope.savePageDesign = function(){
		$http.post(sysBasePath +'/pageTpl/design/' + $scope.projPageData.id + '?isPubTpl='+$scope.projPageData.isPubTpl)
		.success(function(data, status, headers, config) {
	    	if(data.isSuccess){
	    		//操作成功！
				utils.alertBox(nsw.Constant.TIP, nsw.Constant.SAVESUC);
	    		closeWebPage();
	    		$state.go('pageCtrl');
	    	}else{
	    		utils.alertBox(nsw.Constant.TIP, nsw.Constant.OPERATION);
	    	}
	    })
	    .error(function(data, status, headers, config) {
	    	utils.alertBox(nsw.Constant.TIP, nsw.Constant.NETWORK);
	    });
	}
	//退出页面设计
	$scope.outPageDesign = function(){
		$http({
			method: 'DELETE',
			url: sysBasePath +'/pageTpl/design/' + $scope.projPageData.id + '/compareExit'
		}).success(function(data, status, headers, config) {
	    	if(data.isSuccess){
	    		closeWebPage();
	    	}else{
	    		utils.alertBox(nsw.Constant.TIP, nsw.Constant.DATAFAILURE + data.data);
	    	}
	    }).error(function(data, status, headers, config) {
	    	utils.alertBox(nsw.Constant.TIP, nsw.Constant.NETWORK);
	    });
	}
	
	function closeWebPage(){
		if (navigator.userAgent.indexOf("MSIE") > 0) {
			if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
				window.opener = null;
				window.close();
			} else {
				window.open('', '_top');
				window.top.close();
			}
		}else if(navigator.userAgent.indexOf("Firefox") > 0) {
			window.location.href = 'about:blank ';
		} else {
			window.opener = null;
			window.open('', '_self', '');
			window.close();
		}
	}
}]);



pageEditApp.controller('blkCtrl', ['$scope', '$state', '$http','$animate','utils', function($scope, $state, $http, $animate, utils) {
	//过滤页面状态
	if(!$scope.projBlkName){
		$state.go('page');
		return;
	}
	
	
	
	//加载当前ProjBlkTpl基本信息加载
	$http.get(sysBasePath + '/pageTpl/design/'+$scope.projPageData.id+'/blkTpl/'+$scope.projBlkName+'?isPubTpl='+ $scope.projPageData.isPubTpl)
	.success(function(data) {	
    	if(data.isSuccess){    	
    		//模板、数据源、选项、源码
    		$scope.projBlkTpl = data.data.projBlkTpl;
    		//模板(key、value)
    		$scope.pubBlkTpls = data.data.pubBlkTpls;
    		//数据源填充
    		$scope.tplDs = data.data.tplDs;

    		for(var key in $scope.pubBlkTpls){
    			var item = $scope.pubBlkTpls[key];
    			if($scope.projBlkTpl._id == item._id){
    				item.imgSm = data.data.projBlkTpl.imgSm;
    			}
    		}
    		
    		/*if($scope.projBlkTpl.tplDs.label == undefined){
    			$scope.noSrcDataTip = true;//没有相应的数据源提示
    			$scope.noSrcData = false;
    		}else{
    			$scope.noSrcDataTip = false;
    			$scope.noSrcData = true;
    		}
    		if($scope.pubBlkTpls.key == undefined){
    			$scope.noData = true;//没有相应的模板数据提示
    		}else{
    			$scope.noData = false;
    		}*/
    	}else{
    		utils.alertBox(nsw.Constant.TIP, nsw.Constant.DATAFAILURE);
    	}
    }).error(function(data, status, headers, config) {
    	utils.alertBox(nsw.Constant.TIP, nsw.Constant.NETWORK);
    });
	
	$scope.save = function() {
		
		var projBlkName = $scope.projBlkName;
		var url = sysBasePath + '/pageTpl/design/'+$scope.projPageData.id+'/blkTpl/'+$scope.projBlkName+'?isPubTpl='+ $scope.projPageData.isPubTpl;
		var obj = {};
		    obj = $scope.projBlkTpl;  
		    obj.imgSm = angular.element(event.target).parents('.c-popup').find('#imgSmall').attr('src');

		$http.put(url, obj)
		.success(function(data, status, headers, config) {
	    	if(data.isSuccess){
	    		//保存成功
	    		$scope.projPageData.conf[projBlkName] = data.data;
				$state.go('page');
	    	}else{
	    		utils.alertBox(nsw.Constant.TIP, nsw.Constant.OPERATION);
	    	}
	    })
	    .error(function(data, status, headers, config) {
	    	utils.alertBox(nsw.Constant.TIP, nsw.Constant.NETWORK);
	    });
	};

	$scope.cancel = function() {
		$state.go('page');
	};
    
	//切换选中模板
	$scope.tplSelected = function(blk){
		var blkId = blk._id;
		if(blkId && blkId == $scope.projBlkTpl.pubTplId){
			return;
		}
		$scope.projBlkTpl.pubTplId = blkId;
		$scope.projBlkTpl.tplDs = blk.tplDs;
		$scope.projBlkTpl.confData = blk.confData;
		$scope.projBlkTpl.htmlContent = blk.htmlContent;
	};
	
	
	   
}]);

pageEditApp.controller('editSrcCtrl', ['$scope', '$state', '$http','$stateParams','utils', function($scope, $state, $http, $stateParams,utils) {
    $scope.saveTpl = function(){
	    var obj = {};
		obj.name = $scope.name;
		obj.content = $scope.content;
		obj.isPubTpl = ($stateParams.isPubTpl == 'false'? false :true);
		if($scope.res){
			obj.imgSm = $scope.res[0].path || '';
		} 
		if($scope.res1){
			obj.imgMd = $scope.res1[0].path || '';
		} 
		if($scope.res2){
			obj.imgLg = $scope.res2[0].path || '';
		} 
		if($scope.res2){
			obj.imgFr = $scope.res3[0].path || '';
		}
		saveCode(obj);
	}
   
   function saveCode(_obj){
	   $http({//保存
           method: 'POST',
           url: sysBasePath + '/tpl/page/'+$stateParams.id,
		   data: _obj
	   }).success(function(data, status, headers, config) {
	       if(data.isSuccess){
	    		$scope.cancel();
	    		location.reload();
	    	}else{
	    		utils.alertBox(nsw.Constant.TIP,nsw.Constant.OPERATION);
	    	}
	    }).error(function(data, status, headers, config) {
	    	utils.alertBox(nsw.Constant.TIP,nsw.Constant.NETWORK);
	    });
   };
   $scope.cancel = function() {
	   $state.go('page');
   };
	   
}]);

pageEditApp.config(['$stateProvider', '$urlRouterProvider', '$sceProvider', function ($stateProvider, $urlRouterProvider, $sceProvider) {
	//设置html序列化不过滤style属性
	$sceProvider.enabled(false);
	$urlRouterProvider.otherwise('/');
    $stateProvider.state('page', {
		url: '/',
		views: {
			'blkEdit': {
				template: ''
			}
		}
	}).state('blkEdit', {
		url: '/blkEdit',
		views: {
			'blkEdit': {
				templateUrl: sysBasePath + '/partials/pageedit/blkEdit.html',
				controller: 'blkCtrl'
			}
		}
	}).state('srcCodeEdit', {
		url: '/srcCodeEdit/{id}/{isPubTpl}',
		views: {
			'blkEdit': {
				templateUrl: sysBasePath + '/partials/pageedit/srcCodeEdit.html',
				controller: 'editSrcCtrl'
			}
		}
	});
}]);


/*
 * 20151031 解决模板编辑页面在加入div.tpl-blk 后出现的页面混乱问题
 * author：yaoyunchou
 * 
 * 
 * 
 */
function tofix(){
	try
	{
		$(".tpl-blk,.tpl-blk *").css("box-sizing","content-box");
		console.log($(".tpl-blk").css("width"));
		$(".tpl-blk").each(function(){
			$(this).css("padding","0px").css("margin","0px");
			if($(this).width()+parseInt($(this).css("padding-left"))+parseInt($(this).css("padding-right"))+2==$(this).parent().width()){
				$(this).css("width",(($(this).width()+parseInt($(this).css("padding-left"))+parseInt($(this).css("padding-right")))-2)+"px");
				
			}
			
			;
		})
		$(".tpl-blk .ng-binding").each(function(){
			
				 if($(this).children().length>1){
			    	  console.log($(this).children()[0]);
			    }else{
			    		$(this).parent().addClass($(this).children()[0].className);
			    }
			
		  
		   
		})
	}
	catch (e)
	{
	   
	} 
}
setTimeout(function(){
	tofix();
},1000)


