demoApp.controller('httpCtrl', ['$scope', '$http', function ($scope, $http) {
	
	$scope.getHttp = function(){
		$http({
			method: 'GET',
			url: '/pccms/tpl/pubPageTpl/single/1',
			params: {'pageSize': 20, 'tagIds': 'TAG001'}
		}).success(function(data, status, headers, config) {
	    	if(data.isSuccess){
	    		alert('成功：'+angular.toJson(data.data));
	    	}else{
		    	alert('获取失败！'+data.data);
	    	}
	    }).error(function(data, status, headers, config) {
	    	alert('系统异常或网络不给力！');
	    });
		//简写
		/*
		$http.get('/pccms/tpl/pubPageTpl/single/1?pageSize=20&tagIds=TAG001')
		.success(function(data, status, headers, config) {
	    	if(data.isSuccess){
	    		alert('成功：'+angular.toJson(data.data));
	    	}else{
		    	alert('获取失败！'+data.data);
	    	}
	    }).error(function(data, status, headers, config) {
	    	alert('系统异常或网络不给力！');
	    });
	    */
	};
	
	$scope.putHttp = function(){
		$http({
			method: 'PUT',
			url: '/pccms/pubPageTpl/5600d083ec26f5124ccbe748',
			data: {'id': '1111111', 'name': '测试'}
		}).success(function(data, status, headers, config) {
	    	if(data.isSuccess){
	    		alert('成功！'+data);
	    	}else{
		    	alert('获取失败！'+data.data);
	    	}
	    }).error(function(data, status, headers, config) {
	    	alert('系统异常或网络不给力！');
	    });
		//简写
		/*
		$http.put('/pccms/pubPageTpl/5600d083ec26f5124ccbe748',{'id': '1111111', 'name': '测试'})
		.success(function(data, status, headers, config) {
	    	if(data.isSuccess){
	    		alert('成功：'+angular.toJson(data.data));
	    	}else{
		    	alert('获取失败！'+data.data);
	    	}
	    }).error(function(data, status, headers, config) {
	    	alert('系统异常或网络不给力！');
	    });
	    */
		
	};
	
	$scope.postHttp = function(){
		$http({
			method: 'POST',
			url: '/pccms/projectTemplate/addPageTpl',
			data: {'tplId': '5600d083ec26f5124ccbe748', 'nodeId': '5601ff316b6af012d4e84ecb'}
		}).success(function(data, status, headers, config) {
	    	if(data.isSuccess){
	    		alert('成功：'+angular.toJson(data.data));
	    	}else{
		    	alert('获取失败！'+data.data);
	    	}
	    }).error(function(data, status, headers, config) {
	    	alert('系统异常或网络不给力！');
	    });
		//简写
		/*
		$http.post('/pccms/projectTemplate/addPageTpl', {'tplId': '5600d083ec26f5124ccbe748', 'nodeId': '5601ff316b6af012d4e84ecb'})
		.success(function(data, status, headers, config) {
	    	if(data.isSuccess){
	    		alert('成功：'+angular.toJson(data.data));
	    	}else{
		    	alert('获取失败！'+data.data);
	    	}
	    }).error(function(data, status, headers, config) {
	    	alert('系统异常或网络不给力！');
	    });
	    */
	};
	
	$scope.deleteHttp = function(){
		//$http.delete("").success(function(){}).error(function(){});
		$http({
			method: 'DELETE',
			url: '',
			params: {}
		})
		.success(function(data, status, headers, config) {
	    	if(data.isSuccess){
	    		alert('成功：'+angular.toJson(data.data));
	    	}else{
		    	alert('获取失败！'+data.data);
	    	}
	    })
	    .error(function(data, status, headers, config) {
	    	alert('系统异常或网络不给力！');
	    });
	};
}]);