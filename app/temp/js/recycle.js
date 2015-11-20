var recycleApp = angular.module('recycleApp', ['ui.tree','common','ng.ueditor','ui.bootstrap','ui.bootstrap.pagination','ui.nested.combobox']);

//回收站
recycleApp.controller('recycleCtrl', ['$scope', '$http', '$state', 'utils', function($scope, $http, $state, utils) {
	
	$scope.totalItems = 0; //总条数
    $scope.currentPage = 1; //当前页，默认第一页
    $scope.pageSize = 10; //每页显示多少条 
    $scope.maxSize = 5; //设置分页条的长度

	//请求参数
	//$scope.queryParams = {'title':'', 'pageNum': 1, 'pagetSize': 100};
	
	//回收站，勾选
	$scope.checkAll = function(){
		$scope.isCheckAll = !$scope.isCheckAll;
		for(var key in $scope.dataList){
			var item = $scope.dataList[key];
			item.isChecked = $scope.isCheckAll;
		}
	};
	
	//全选
	$scope.check = function(dataList){
		var arr = [];
		$scope.isCheckAll = true;
		for(var key in $scope.dataList){
			var item = $scope.dataList[key];
				item.isChecked = true;
				arr.push(item._id);
		}
	};
	
	//反选
	$scope.fanCheck = function(dataList){
		var arr = [];
		for(var key in $scope.dataList){
			var item = $scope.dataList[key];
			if(item.isChecked){
				item.isChecked = false;
			}else{
				item.isChecked = true;
				$scope.isCheckAll = true;
				arr.push(item._id);
			}
		}
		if(arr.length != dataList.length){
			$scope.isCheckAll = false;
		}else{
			$scope.isCheckAll = true;
		}
	};
	
	//回收站，单行选中
	$scope.checkItem = function(item){		
		item.isChecked = !item.isChecked;
		$scope.isCheckAll = checkAllList();
	};

	//回收站，检查是否全选
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
	
	//回收站，批量删除
	$scope.deleteBatch = function(){
		var idArr = [];
		for(var key in $scope.dataList){
			var item = $scope.dataList[key];
			if(item.isChecked){
				idArr.push(item._id);
			}
		}
		$scope.delRecycle(idArr.join(','));
	};
	
	//回收站，批量还原
	$scope.replayBatch = function(){
		var idArr = [];
		for(var key in $scope.dataList){
			var item = $scope.dataList[key];
			if(item.isChecked){
				idArr.push(item._id);
			}
		}
		$scope.replayRecycle(idArr.join(','));
	};

	//回收站，关键字查询
	$scope.searchRecycle = function(){		
		if ($scope.queryParams.title.length > 64) {
			utils.alertBox('操作提示', '关键字查询字符应为0~64个字符');
			$scope.queryParams={'title':''};
			return;
		}
		//获取参数，进行查询操作
		getRecycleList(setParam());
	};
	
	//回收站，列表刷新
	$scope.reloadRecycle = function(){
		$scope.currentPage = 1;	
		//清空关键字。
		$scope.queryParams={'title':''};
		//获取参数，进行查询操作
		getRecycleList(setParam());
	};

	//回收站，分页查询
    $scope.pageChanged = function() {
      getRecycleList(setParam());
    };
    
	//回收站，还原
	$scope.replayRecycle = function(ids){
		if(!ids){
			utils.alertBox('操作提示', '请选择要还原的条目！');
			return;
		}
		utils.confirmBox('操作提示', '确认还原吗？',function(){
			$http({
				method: 'POST',
				url: '/pccms/recycleBin/restore',
				data: {'ids': ids}
			}).success(function(data, status, headers, config) {
		    	if(data.isSuccess){
		    		var idArr = ids.split(',');
		    		for(var i in idArr){
		    			for(var key in $scope.dataList){
			    			var item = $scope.dataList[key];
			    			if(idArr[i] == item._id){
			    				$scope.dataList.splice(key,1);
			    				break;
			    			}
			    		}
		    		}
		    		$scope.reloadRecycle();
		    	}else{
		    		alert('获取数据失败：' + data.data);
		    	}
		    }).error(function(data, status, headers, config) {
		    	alert('系统异常或网络不给力！');
		    });
		});
	};
	
	//回收站，彻底删除文章(物理删除)
	$scope.delRecycle = function(ids){
		if(!ids){
			utils.alertBox('操作提示', '请选择要彻底删除的条目！');
			return;
		}
		utils.confirmBox('操作提示', '确认彻底删除吗？',function(){
			$http({
				method: 'POST',
				url: '/pccms/recycleBin/deleteItem',
				data: {'ids': ids}
			}).success(function(data, status, headers, config) {
		    	if(data.isSuccess){
		    		var idArr = ids.split(',');
		    		for(var i in idArr){
		    			for(var key in $scope.dataList){
			    			var item = $scope.dataList[key];
			    			if(idArr[i] == item._id){
			    				$scope.dataList.splice(key,1);
			    				break;
			    			}
			    		}
		    		}
		    		$scope.reloadRecycle();	
		    	}else{
		    		alert('获取数据失败：' + data.data);
		    	}
		    }).error(function(data, status, headers, config) {
		    	alert('系统异常或网络不给力！');
		    });
		});
	};
	
	//清空回收站
	$scope.clearRecycle = function() {
		$http({
			method: 'POST',
			url: '/pccms/recycleBin/cleanItem',
		}).success(function(data, status, headers, config) {
			$scope.reloadRecycle();
		}).error(function(data, status, headers, config) {
	    	alert('系统异常或网络不给力！');
	    });	
	};
	
	//回收站，初始化列表数据
	$scope.reloadRecycle();	


	//回收站，设置参数
	function setParam() {
		var obj = new Object();
		obj.pageNum = $scope.currentPage;
		obj.pageSize = $scope.pageSize;
		if ($scope.queryParams.title) {
			obj.title = $scope.queryParams.title;
		} else {
			obj.title = '';
		}
		return obj;
	}

	//回收站，加载列表数据
	function getRecycleList(params){
		$http({
			method: 'GET',
			url: '/pccms/recycleBin/list',
			params: params
		}).success(function(data, status, headers, config) {
	    	if(data.isSuccess){ 		
	    		if(data.data){
	    			$scope.dataList = data.data.list;
	    			$scope.totalItems = data.data.totalItems;
	    		}else{
	    			$scope.dataList = [];
	    			$scope.totalItems = 0;
            		$scope.currentPage = 0;
	    			alert('暂无数据！');
	    			return;
	    		}
	    	}else{
	    		alert('获取数据失败：' + data.data);
	    	}
	    }).error(function(data, status, headers, config) {
	    	alert('系统异常或网络不给力！');
	    });
	};

}]);

//回收站，路由配置
recycleApp.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider.state('recycle', { //回收站
			url: '/',
			templateUrl: 'recycle.html',
			controller: 'recycleCtrl'
		});
	}

]);
