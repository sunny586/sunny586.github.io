demoApp.controller('treeCtrl', ['$scope', function ($scope){

	localStorage.getItem('isdev') == 'true' ? $scope.status = true : $scope.status = false;
	
	$scope.getParent = function (scope) {
		//获取父节点数据
		if(scope.$nodeScope.$parentNodeScope){
			var parentNode = scope.$nodeScope.$parentNodeScope.$modelValue;
			alert("父节点为：id="+parentNode.id+",name="+parentNode.name);
		}else{
			alert("该节点已是根节点，没有父节点了，谢谢！！！");
		}
	};

	$scope.newSubItem = function (scope) {
		var nodeData = scope.$modelValue;
		if(!nodeData.nodes){
			nodeData.nodes = [];
		}
		nodeData.nodes.push({
			id: nodeData.id * 10 + nodeData.nodes.length,
			name: nodeData.name + '.' + (nodeData.nodes.length + 1),
			nodes: []
		});
	};

	$scope.data = [{
		id: '0',
		name: '网站首页',
		nodes: [{
			'id': 1,
			'name': '产品频道',
			'nodes': [
			{
				'id': 12,
				'name': '产品列表'
			},
			{
				'id': 13,
				'name': '产品详情'
			}]
		},{
			'id': 1,
			'name': '资讯频道',
			'nodes': [{
				'id': 11,
				'name': '资讯首页'
			},
			{
				'id': 12,
				'name': '资讯列表'
			},
			{
				'id': 13,
				'name': '资讯详情'
			}]
		}]
	}];
}]);