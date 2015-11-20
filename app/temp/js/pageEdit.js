var pageEditApp = angular.module('pageEditApp', ['common']);

pageEditApp.controller('pageCtrl', ['$scope', '$state', 'utils', function($scope, $state, utils) {
	$scope.projPageData = projPageData;
	
	//弹出区块定制编辑窗口
	$scope.edit = function(projBlkId) {
		$scope.projBlkId = projBlkId;
		$state.go("blkEdit");
	};
	//备份页面效果
	$scope.backup = function() {
		if($scope.projPageData.bakConf.bak.length >= 1){
			$scope.disabled = true;
		}
		$scope.projPageData.bakConf.bak.push(new Date().getTime());
	};
	//删除页面效果备份
	$scope.delBackup = function(idx) {
		$scope.projPageData.bakConf.bak.splice(idx, 1);
		$scope.disabled = false;
	};
	//对比效果
	$scope.compare = function(){
		if($scope.projPageData.bakConf.bak.length < 2){
			utils.alertBox("提示","对比至少需要两个效果备份！");
			return;
		}
		if('same' == $scope.projPageData.bakConf.type){
			window.open ('compare.html', '_blank');
		}else{
			//window.open ('http://www.baidu.com', '_blank', 'fullscreen=1, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no'); 
			window.open ('/pccms/proj/projPageTpl/5603648d9ea9303192396a3d/view', '_blank');
			window.open ('/pccms/proj/projPageTpl/5603648d9ea9303192396a3d/view', '_blank');
		}
	}
	//保存页面设计
	$scope.savePageDesign = function(){
		utils.alertBox("提示","保存页面设计");
	}
	//退出页面设计
	$scope.outPageDesign = function(){
		utils.alertBox("提示","退出页面设计");
	}
}]);

pageEditApp.controller('blkCtrl', ['$scope', '$state', '$http', function($scope, $state, $http) {
	//过滤页面状态
	if(!$scope.projBlkId){
		$state.go('page');
		return;
	}
	//获取区块配置信息
	$http.get('../json/pageEdit.json')
		.success(function(data) {
	    	if(data.isSuccess){
	    		$scope.tplDate = data.data[$scope.projBlkId];
	    	}else{
	    		utils.alertBox("提示","获取失败："+html+"！");
	    	}
	    })
	    .error(function(data, status, headers, config) {
	    	utils.alertBox("提示","系统异常或网络不给力！");
	    });
	
	$scope.save = function() {
		/*
		var postData = {pageConfId: $scope.projPageData.id, blkConfId: $scope.blkConfId, tarBlockConfId: $scope.tarBlkId, dsData: $scope.projPageData.conf[$scope.blkConfId].dsData, confData: $scope.projPageData.conf[$scope.blkConfId].conf};
		//console.info(angular.toJson(projPageData.conf[$scope.blkConfId].dsData));
		$http.get('/pccms/page/updTplConf?pageConfId='+postData.pageConfId
				+'&blkConfId='+postData.blkConfId
				+'&tarBlockConfId='+postData.tarBlockConfId
				+'&dsData='+angular.toJson(postData.dsData)
				+'&confData='+angular.toJson(postData.confData)
				)
			.success(function(data, status, headers, config) {
		    	console.info(data);
		    	if(data.isSuccess){
		    		//保存成功
		    		var html = data.data;
		    		angular.element("#"+$scope.blkConfId).children("ul").replaceWith(html);
		    		$scope.projPageData.conf[$scope.blkConfId].tplId = $scope.tarBlkId;
					$state.go('page');
		    	}else{
			    	alert('保存失败：'+html+'！');
		    	}
		    })
		    .error(function(data, status, headers, config) {
		    	alert('系统异常或网络不给力！');
		    });
		    */
	};

	$scope.cancel = function() {
		$state.go('page');
	};

	//切换选中模板
	$scope.tplSelected = function(val){
		if(val && val == $scope.tplDate.tplId){
			return;
		}
		$scope.tplDate.tplId = val;
		$scope.tplDate.conf = $scope.tplDate.tplList[val].conf;
		$scope.tplDate.tplDs = $scope.tplDate.tplList[val].tplDs;
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
				templateUrl: 'blkEdit.html',
				controller: 'blkCtrl'
			}
		}
	});
}]);



