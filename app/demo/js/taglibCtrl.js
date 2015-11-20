demoApp.controller('taglibCtrl', ['$scope', '$modal', 'utils', '$http', '$animate',
	function($scope, $modal, utils, $http, $animate) {	

		
	}
]);


/*
demoApp.controller('taglibWinCtrl', ['$scope', '$modalInstance', '$http', '$modal', 'utils','$animate','result',
	function($scope, $modalInstance, $http, $modal, utils,$animate,result) {	
		

		$scope.tab1={active:true};

		//切换tab事件
		$scope.tabSelected = function(tab){
			$scope.activeTab = tab;			
		};

		var arr = []; //初始化一个数组，用来存放标签。
		
		$scope.ctgs={};
		
		console.log(JSON.stringify(result));

		if(result){
			arr = result.ctgs;
			var nameArr = [];
			for(var key in arr){
				nameArr.push(arr[key].name);
			}
			$scope.tagName = nameArr.join(',');
		}

		//初始化查询标签列表。
		$http.get('/pccms/projTagCtgList/findAllTags')
			.success(function(data, status, headers, config) {					
				if (data.isSuccess && data.data) {

					$scope.items = data.data;
					
					if(result && result.name) $scope.tagName = result.name;

					for(var k in $scope.items){
						for(var j in $scope.items[k].tags) {
							if(result && result.ctgs){
								for(var m in result.ctgs){
									if($scope.items[k].tags[j]._id==result.ctgs[m].id){
										$scope.items[k].tags[j].isChecked = true;
									}
								}
							}							
						}
					}

					if (data.data[0].tags && data.data[0].tags.length > 0) {
						$scope.tags = data.data[0].tags;						
					}
						
					$scope.items[0].isChecked = true;			

				} else {
					console.log('操作失败:' + data.data);
				}
			})
			.error(function(data, status, headers, config) {
				console.log('系统异常或网络不给力！');
			});

		//获取化所属栏目下拉列表。
		$http.get('/pccms/projTagCtgList')
		.success(function(data, status, headers, config) {
			if (data.isSuccess && data.data.length>0) {
				$scope.opts = data.data;
			} else {
				console.log('操作失败:' + data.data);
			}
		})
		.error(function(data, status, headers, config) {
			console.log('系统异常或网络不给力！');
		});


		//选择标签类型。
		$scope.tagLabels = function(data) {
			$scope.tags = data.tags;
			$animate.addClass(angular.element(event.target), 'c-selected');
			$animate.removeClass(angular.element(event.target).siblings(), 'c-selected');
		};		

		//选择标签。
		$scope.checkedLabel = function(data) {

			if (!data.isChecked) data.isChecked = false;
			data.isChecked = !data.isChecked;

			var _o = {
				id: data._id,
				name: data.name
			};			

			if (data.isChecked && !hasObjFromArr(arr, _o)) {
				arr.push(_o);
			} else if (!data.isChecked && hasObjFromArr(arr, _o)) {
				arr = removeObjFromArr(arr, _o);
			} else {
				return;
			}
			
			var tagNameArr = [];

			for (var key in arr) {			  
				if (arr[key] && arr[key].name)   tagNameArr.push(arr[key].name);
			}
			
			$scope.tagName = tagNameArr.join(',');

			$scope.result = {				
				ctgs:arr
			}


		};

		function removeObjFromArr(array, obj) {
			if (!array instanceof Array) {
				throw new error("arguments[0] are not Array");
				return;
			}
			for (var i = 0; i < array.length; i++) {
				if (array[i].id == obj.id) {
					array.splice(i, 1);
				}
			}
			return array;
		};

		function hasObjFromArr(array, obj) {
			if (!array instanceof Array) {
				throw new error("arguments[0] are not Array");
				return;
			}
			var flag = false;
			for (var i = 0; i < array.length; i++) {
				var _f = true;
				for (var key in array[i]) {
					if (array[i][key] != obj[key]) {
						_f = false;
					}
				}
				if (_f) {
					flag = true;
				}
			}
			return flag;
		};

		//确定
		$scope.ok = function() {
			switch($scope.activeTab){
				case 'list':					
					$modalInstance.close($scope.result);
					break;
				case 'add':	
					addTags();
				    break;
				default:
				    break;
			}
		};

		//取消
		$scope.cancel = function() {

			$modalInstance.dismiss('cancel');
		};

		function addTags(){	
			$http.post('/pccms/projTag/tag', $scope.ctgs)
				.success(function(data, status, headers, config) {					
				if (data.isSuccess) {				
					$scope.tab1.active = true;
				} else {
					console.log('添加失败。' + data.data);
					utils.alertBox('操作提示', data.data);
				}
			}).error(function(data, status, headers, config) {
				console.log('系统异常或网络不给力！');
			});
		}

	}
]);
demoApp.directive('tagLib', ['$modal', '$parse', function($modal, $parse) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) { 

        ngModel.$render = function() {
            // not implemented: hightlight current image using ngModel.$viewValue
        };

        element.bind('click', function(e){

            e.stopPropagation();

            //图片库弹窗
            var modalInstance = $modal.open({
                backdrop : 'static',
                templateUrl :'views/taglibWin.html',
                controller : 'taglibWinCtrl',
                size : 'lg',
                resolve: {
                    result: function () {
		          		return scope.result;
		        	}
                }
            });

            modalInstance.result.then(function(data) {
            	if(data){
            		 ngModel.$setViewValue(data);
            	}
            	          
            });
       	});
    }
  };
}]);
*/

// demoApp.filter("showCtgsName", function() {
// 	return function(array) {		
// 		var _arr = [];
// 		if(array instanceof Array){
// 			for(var k in array){
// 				_arr.push(array[k].name);
// 			}
// 		}
// 		return _arr.join(',');
// 	}
// });