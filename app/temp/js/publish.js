var publishApp = angular.module('publishApp', ['ui.tree','common','ng.ueditor','ui.bootstrap','ui.bootstrap.pagination','ui.nested.combobox']);


//网站发布
publishApp.controller('publishCtrl', ['$scope', '$http', '$state', 'utils', '$timeout',function($scope, $http, $state, utils,$timeout) {
	
	$scope.start = true;//发布入口显示
	$scope.startPublish = false;//发布列表页面 隐藏
	$scope.pulishBtn = true;//发布按钮 显示
	$scope.publishTip = false;//发布后的提示信息  隐藏
	$scope.pauseBtn = $scope.timesBtn = $scope.progress = false;//暂停、取消、进度条 隐藏
	$scope.publishBtn = true;
	//发布首页提示数目
	$http({
		method: 'GET',
		url: '/pccms/publish/publishIndex',
	}).success(function(data, status, headers, config) {
		if(data.isSuccess){
			$scope.channel = data.totalModule;
			$scope.page = data.totalArticle;
			if($scope.channel> 0 || $scope.page> 0){
				$scope.publishBtn = false;
			}else{
				$scope.publishBtn = true;
			}
		}
    }).error(function(data, status, headers, config) {
    	alert('系统异常或网络不给力！');
    });
	
	//勾选
	$scope.checkAll = function(){
		$scope.isCheckAll = !$scope.isCheckAll;
		for(var key in $scope.dataList){
			var item = $scope.dataList[key];
			item.isChecked = $scope.isCheckAll;
		}
	};
	
	//单行选中
	$scope.checkItem = function(item){
		item.isChecked = !item.isChecked;
		$scope.isCheckAll = checkAllList();
	};

	//检查是否全选
	function checkAllList(){
		var flag = true;
		if($scope.dataList.length == 0){
			flag = false;
		}else{
			for(var key in $scope.dataList){
				var item = $scope.dataList[key];
				if(!item.isChecked){
					flag = false;
					break;
				}
			}
		}
		return flag;
	};
	
	
	$scope.retSummary = function(){//返回汇总
		$state.go('publish');
		$scope.start = true;//发布入口显示
		$scope.startPublish = false;//发布列表页面 隐藏
	};
	
	$scope.channelPublished = function(){
		$scope.start = false;
		$scope.startPublish = true;
		$http({
			method: 'GET',
			url: '/pccms/publish/list',
			params: {'pageSize': 20, 'pageNum': 1}
		}).success(function(data, status, headers, config) {
	    	if(data.isSuccess){
	    		$scope.dataList = data.data.list;
	    		$scope.totalItems = data.data.totalItems;
	    	}else{
		    	alert('获取失败！'+data.data);
	    	}
	    }).error(function(data, status, headers, config) {
	    	alert('系统异常或网络不给力！');
	    });
	};
	
	var timestamp;//时间戳
	var timer;//定时器
	$scope.published = function(){//点击开始发布
		$scope.w = '';
	    $scope.style = '';
	    timestamp = new Date().getTime();
	    var idArr = [];
		for(var key in $scope.dataList){
			var item = $scope.dataList[key];
			if(item.isChecked){
				idArr.push(item._id);
			}
		};
		if(idArr.length<=0){
			alert('请选择!')
			return;
		}else{
			$scope.pulishBtn = false;//发布按钮  隐藏
			$scope.pauseBtn = $scope.timesBtn = $scope.progress = true;//暂停、取消、进度条显示
			$scope.publishTip = false;//发布后的提示信息 隐藏
		    $http({
				method: 'GET',
				url: '/pccms/publish',//点击发布
				params: {'taskId': timestamp, 'channelIds': idArr.join(',')}
			}).success(function(data, status, headers, config) {				
							
		    }).error(function(data, status, headers, config) {
		    	alert('系统异常或网络不给力！');
		    });
		}
		updateClock();
		timer = setInterval(function(){updateClock()}, 500);
	};
	
	var processCount = 0;//进度
	
//	function updateClock() {//执行逻辑
//		$http({
//			method: 'GET',
//			url: '/pccms/progress/common?taskId='+timestamp,//获取发布日志
//		}).success(function(data, status, headers, config) {
//			processCount++;
//			if(data.percent == '100' || data.percent == 100 || processCount >= 100) {
//				$scope.w = 100;
//		    	$scope.style = {width:'100%'};
//		    	clearInterval(timer);
//				$timeout(function(){
//					tip(timestamp);//瞬间弹出发布成功后的域名展示
//				},100);
//		    	
//				$scope.$watch('style.width', function(newOptions, oldOptions) {
//					if(newOptions === '100%'){							
//						clearInterval(timer);
//						$timeout(function(){
//							tip(timestamp);//瞬间弹出发布成功后的域名展示
//						},100);
//						$http({
//							method: 'GET',
//							url: '/pccms/publish/getPublishLog',
//							params: {'taskId': timestamp}
//						}).success(function(data, status, headers, config){		
//							$scope.publishTip = false;//发布按钮下面的提示信息隐藏
//							$scope.pauseBtn = $scope.timesBtn = $scope.pulishBtn = false;//暂停、取消、发布按钮 隐藏
//							$scope.progress = true;//此时进度条显示100%
//							$scope.sucPage = data.sucPage;//成功个数
//							$scope.failDetails = data.failDetails;//失败个数
//							$scope.unPublishedPage = data.unPublishedPage;//未发布完成个数
//							$scope.totPage = data.totPage;//总个数
//						});
//					}		
//				}, true);
//			}else if(processCount <100){
//				
//				$scope.w = processCount;
//		    	$scope.style = {width: processCount+'%'};
//				
//				
//			};					
//	    }).error(function(data, status, headers, config) {
//	    	alert('系统异常或网络不给力！');
//	    });  
//     };
	
	
	function updateClock() {//执行逻辑
		$http({
			method: 'GET',
			url: '/pccms/progress/common?taskId='+timestamp,//获取发布日志
		}).success(function(data, status, headers, config) {
			
			if(data.data.percent == 100) {
				$scope.w = 100;
		    	$scope.style = {width:'100%'};
		    	clearInterval(timer);
				$scope.$watch('style.width', function(newOptions, oldOptions) {
					if(newOptions === '100%'){							
						clearInterval(timer);
						$timeout(function(){
							tip(timestamp);//瞬间弹出发布成功后的域名展示
						},3000);
						$http({
							method: 'GET',
							url: '/pccms/publish/getPublishLog',
							params: {'taskId': timestamp}
						}).success(function(data, status, headers, config){		
							$scope.publishTip = false;//发布按钮下面的提示信息隐藏
							$scope.pauseBtn = $scope.timesBtn = $scope.pulishBtn = false;//暂停、取消、发布按钮 隐藏
							$scope.progress = true;//此时进度条显示100%
							$scope.sucPage = data.sucPage;//成功个数
							$scope.failDetails = data.failDetails;//失败个数
							$scope.unPublishedPage = data.unPublishedPage;//未发布完成个数
							$scope.totPage = data.totPage;//总个数
						});
					}		
				}, true);
			}else if(data.data.percent < 98 && data.data.percent>1){
				$scope.w = data.data.percent;
		    	$scope.style = {width: data.data.percent+'%'};
			}
			if(data.data.percent >= 98 && data.data.percent < 100 ){
				$scope.w = data.data.hint+" "+data.data.percent;
		    	$scope.style = {width: data.data.percent+'%'};
			}
//			if(data.data.percent == 0){
//				$scope.w = data.data.hint;
//		    	$scope.style = {width: data.data.percent+'%'};
//			}
			
			
			;		
			
	    }).error(function(data, status, headers, config) {
	    	alert('系统异常或网络不给力！');
	    });  
     };
	
	
	
     
	//发布成功后的弹框提示
	function tip(timestamp){
		$scope.mask = true;//域名展示弹框显示
		$http({
			method: 'GET',
			url: '/pccms/publish/getDomainAddress',
			params: {'taskId': timestamp}
		}).success(function(data, status, headers, config){		
			$scope.datalist = data;
		});
	};
	
	$scope.publishPaused = function(){//发布暂停
		utils.confirmBox(nsw.Constant.TIP, nsw.Constant.PAUSE,function(){
			$scope.published();
		},function(){
			$scope.pauseBtn = $scope.timesBtn = $scope.progress = false;//暂停、取消、进度条 隐藏
			$scope.pulishBtn = true;//发布按钮 显示
			$scope.publishTip = true;//发布后的提示信息 显示
		})
	};  
	
	$scope.publishCancled = function(){//发布取消
		$http({
			method: 'GET',
			url: '/pccms/publish/cancelPublish',
			params: {'taskId': timestamp}
		}).success(function(data, status, headers, config){
			if(data.isSuc){
				utils.confirmBox(nsw.Constant.TIP, nsw.Constant.CONFIRCANCLE,function(){
					clearInterval(timer);
					$scope.pauseBtn = $scope.timesBtn = $scope.progress = false;//暂停、取消、进度条 隐藏
					$scope.pulishBtn = true;//发布按钮 显示
					$scope.publishTip = true;//发布后的提示信息 显示					
					//$scope.$on("$destroy",function(event) {
	                    //$timeout.cancel(timer);
	                //});
					console.log('确认取消');
				},function(){
					/*timer = setInterval(function(){
						updateClock();
					},1000);*/
					updateClock();
					console.log('不确认取消');
				});
			};
				
		}).error(function(data, status, headers, config) {
		    alert('系统异常或网络不给力！');
		});
	};
	
	//域名展示弹框后的取消
	$scope.cancelTpl = function(){
		$scope.mask = false;//弹框隐藏
		$scope.pulishBtn = false;//发布按钮隐藏
		$scope.pauseBtn = $scope.timesBtn = $scope.progress = false;//暂停、取消、进度条 隐藏
		$scope.publishTip = true;//发布后的提示信息 显示		
		//$scope.sucPage = data.sucPage;//成功个数
		//$scope.failDetails = data.failDetails;//失败个数
		//$scope.unPublishedPage = data.unPublishedPage;//未发布完成个数
		//$scope.totPage = data.totPage;//总个数
	};
	
	
}]);

//回收站，路由配置
publishApp.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider.state('publish', {
			url: '/',
			templateUrl: 'publish.html',
			controller: 'publishCtrl'
		});
	}

]);
