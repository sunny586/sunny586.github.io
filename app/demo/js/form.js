demoApp.controller('formCtrl', ['$scope', function ($scope){

	$scope.dataList = [
	    {"id": "100001","title": "标题1","category": "分类1","time": "2015-09-25 15:00:00","isDisable": "1"},
	    {"id": "100002","title": "标题2","category": "分类2","time": "2015-09-25 15:00:00","isDisable": "0"},
	    {"id": "100003","title": "标题3","category": "分类3","time": "2015-09-25 15:00:00","isDisable": "0"},
	    {"id": "100004","title": "标题4","category": "分类4","time": "2015-09-25 15:00:00","isDisable": "1"},
	    {"id": "100005","title": "标题5","category": "分类5","time": "2015-09-25 15:00:00","isDisable": "0"},
	    {"id": "100006","title": "标题6","category": "分类6","time": "2015-09-25 15:00:00","isDisable": "1"},
	    {"id": "100007","title": "标题7","category": "分类7","time": "2015-09-25 15:00:00","isDisable": "1"},
	];
	
	
	$scope.treeDataList = [
	           	    {"id": "100001","title": "标题1","category": "分类1","time": "2015-09-25 15:00:00","isDisable": "1","pid":"0"},
	           	    {"id": "1000011","title": "标题11","category": "分类11","time": "2015-09-25 15:00:00","isDisable": "1","pid":"100001"},
	           	    {"id": "1000012","title": "标题12","category": "分类12","time": "2015-09-25 15:00:00","isDisable": "1","pid":"100001"},
					{"id": "1000013","title": "标题13","category": "分类13","time": "2015-09-25 15:00:00","isDisable": "1","pid":"100001"},

	           	    {"id": "100002","title": "标题2","category": "分类2","time": "2015-09-25 15:00:00","isDisable": "0","pid":"0"},
	           	    {"id": "1000021","title": "标题21","category": "分类21","time": "2015-09-25 15:00:00","isDisable": "0","pid":"100002"},
	           	    {"id": "1000022","title": "标题22","category": "分类22","time": "2015-09-25 15:00:00","isDisable": "0","pid":"100002"},
	           	    {"id": "1000023","title": "标题23","category": "分类23","time": "2015-09-25 15:00:00","isDisable": "0","pid":"100002"}	           	   	           	  
	           	];
	
	$scope.collapsed = true;
	var _pid = {};	
	$scope.toggleData = function(item,collapsed){		
		if(!collapsed){
			_pid[item.id] = item.id;
		}else{
			_pid[item.id] = -1;
		}          
	}
	$scope.showData = function(item){
		var flag = true;		
		for(var k in _pid){
			if(_pid[k] == item.pid){
				flag = false;
			}
		}
		return flag;
	}
}]);
