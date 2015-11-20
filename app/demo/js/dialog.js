demoApp.controller('dialogCtrl', ['$scope', '$modal', '$log', 'utils', function ($scope, $modal, $log, utils) {
	
	$scope.items = [ '测试一', '测试二', '测试三' ];

	$scope.open = function(size) {
		var modalInstance = $modal.open({
			backdrop : 'static',
			templateUrl : 'myModalContent.html',
			controller : 'modalInstanceCtrl',
			size : size,
			resolve : {
				items : function() {
					return $scope.items;
				}
			}
		});

		modalInstance.result.then(function(selectedItem) {
			$scope.selected = selectedItem;
		}, function() {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};

	$scope.openUtils = function(type) {
		if('alert' == type){
			utils.alertBox('操作提示', '这里是提示的语句！！！');
			
		}else if('confirm' == type){
			utils.confirmBox('确认提示', '确认删除吗？？？',
				function(){
					alert('点击了\'确认\'按钮！！！');
				},
				function(){
					alert('点击了\'取消\'按钮！！！');
				}
			);
			
		}else if('openWin' == type){
			var html = [];
			html[html.length] = '<h4 class="text-success">注：该方法接收六个参数</h4>';
			html[html.length] = '<div class="text-default">title：弹窗标题</div>';
			html[html.length] = '<div class="text-default">msg：弹窗内容，内空可以是字符串，也可以是html片段</div>';
			html[html.length] = '<div class="text-default">ok：确认按钮回调方法，可以return false,阻止窗体关闭</div>';
			html[html.length] = '<div class="text-default">cancel：取消按钮回调方法，可以return false,阻止窗体关闭</div>';
			html[html.length] = '<div class="text-default">size：弹窗大小，默认为中等大小，lg表示大窗口，sm表示小窗口</div>';
			html[html.length] = '<div class="text-default">btnLbl：确认按钮的提示文本，默认为"确认"</div>';
			
			utils.openWin('通用弹出窗', html.join(''),
				function(){
					alert('点击了\'确认\'按钮！！！,并且阻止弹窗关闭');
					return false;
				},
				function(){
					alert('点击了\'取消\'按钮！！！');
				}
			);
		}
	};
}]);

demoApp.controller('modalInstanceCtrl',['$scope', '$modalInstance', 'items', function($scope, $modalInstance, items) {
	$scope.items = items;
	
	$scope.selected = {
		item : $scope.items[0]
	};

	$scope.ok = function() {
		$modalInstance.close($scope.selected.item);
	};

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
}]);
