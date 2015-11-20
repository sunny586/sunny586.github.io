//文章分类列表
infoApp.controller('classifyCtrl',['$scope', '$http', '$state', 'utils','$stateParams', 
						   function($scope,   $http,   $state,   utils,  $stateParams){
	
	$scope.name = $stateParams.name;
	$scope.moduleId = $stateParams.moduleId;
	
	//高级
	$scope.advancedSearch = false;
	$scope.queryParams = {'title':''};
	//高级搜索。
	$scope.advancedBtn = function() {
		//高级搜索隐藏、显示
		$scope.advancedSearch ? $scope.advancedSearch = false : $scope.advancedSearch = true;
		
	};
	
	//关闭弹框
	$scope.closeForm = function(){		
		$scope.editForm = $scope.addForm = $scope.mask = false;
	};
	
	//资讯分类快速录入
	$scope.quickAdd = function() {
		$scope.addForm = true;
		$scope.mask = true;

		//加载下拉树。	
		$scope.enter={};			
		$scope.enter.activeItem = {};
		$http.get('/pccms/proj/infoCtg/tree/all?moduleId='+$stateParams.moduleId)
			.success(function(data, status, headers, config) {
				if (data.isSuccess) {
					$scope.collectionEnter = data.data;
					$scope.enter.activeItem = {
						_id: data.data[0]._id,
					    name: data.data[0].name	
					};
				} else {
					console.log('操作失败。' + data.data);
				}
			})
			.error(function(data, status, headers, config) {
				console.log('系统异常或网络不给力！');
			});

		
	};

	//快速录入.
	$scope.editComfirm = function(){
		if ($scope.enter.activeItem.path ) {
			$scope.beanEnter.path = $scope.enter.activeItem.path + $scope.enter.activeItem._id + ',';
		} else {
			$scope.beanEnter.path = ',' + $scope.enter.activeItem._id + ',';
		}	
		
		if($stateParams.moduleId){
			$scope.beanEnter.moduleId = $stateParams.moduleId;
		}
		
		$http.post('/pccms/proj/infoCtg', $scope.beanEnter)
	    .success(function(data, status, headers, config) {
			if (data.isSuccess) {
				$state.go('classify',{
					'moduleId': $stateParams.moduleId,
					'name': $stateParams.name,
					'page': $stateParams.page
				},{reload:true});
			} else {
				console.log('修改失败。' + data.data);
			}
		}).error(function(data, status, headers, config) {
			console.log('系统异常或网络不给力！');
		});

	};

	$scope.itemTreeChanged = function(){

		console.log($scope.editree.activeItem);

		if($scope.editree.activeItem.path == null){
			path = ','+$scope.editree.activeItem._id+ ',';
		}else{
			path = $scope.editree.activeItem.path + $scope.editree.activeItem._id+ ',';
		}
	};
	
	//资讯分类快速编辑
	$scope.editInfo = function(_data) {
		$http.get('/pccms/proj/infoCtg/' + _data._id).success(function(data, status, headers, config) {
			if (data.isSuccess) {
				$scope.editForm = true;
				$scope.mask = true;

				//默认是没有外部链接。
				$scope.editIsLink = false;				

				$scope.editBean = data.data;

				//加载下拉树。	
				$scope.editree = {};
				$scope.editree.activeItem = {
					_id: data.data.parentCtg.id,
					name: data.data.parentCtg.name
				};				
				$http.get('/pccms/proj/infoCtg/tree/all?moduleId='+$stateParams.moduleId)
					.success(function(data, status, headers, config) {
						if (data.isSuccess) {
							$scope.collectionEdit = data.data;
						} else {
							console.log('操作失败。' + data.data);
						}
					})
					.error(function(data, status, headers, config) {
						console.log('系统异常或网络不给力！');
					});

				if (data.data.isLink) {
					//有外部链接。
					$scope.editIsLink = true;
				} else {
					//没有外部链接。
					$scope.editIsLink = false;
				}
			} else {
				console.log('操作失败。' + data.data);
			}
		}).error(function(data, status, headers, config) {
			console.log('系统异常或网络不给力！');
		});

		var flagSpeedTree = false;
		$scope.itemTreeChanged = function(){
			flagSpeedTree = true;
		};

		//分类快速修改。
		$scope.speedEdit = function() {			

			if (flagSpeedTree) {
				$scope.editree.activeItem.path ?
					$scope.editBean.path = $scope.editree.activeItem.path + $scope.editree.activeItem._id + ',':
					$scope.editBean.path = ',' + $scope.editree.activeItem._id + ',';
			}

			$http({
				method: 'PUT',
				url: '/pccms/proj/infoCtg/' + _data._id,
				data: $scope.editBean
			}).success(function(data, status, headers, config) {
				if(data.isSuccess){
					$state.go('classify',{
						'moduleId': $stateParams.moduleId,
						'name': $stateParams.name,
						'page': $stateParams.page
					},{reload:true});
				}else{
					console.log(data.data);
				}				
			}).error(function(data, status, headers, config) {
				console.log('系统异常或网络不给力！');
			});
		};
	};

	//修改。
	$scope.goEdit = function(item) {
		if ($stateParams.moduleId) {
			$state.go('classifyEdit', {
				'id': item._id,
				'isLink': item.isLink,
				'moduleId': $stateParams.moduleId,
				'name': $stateParams.name,
				'page': 'info'
			});
		} else {
			$state.go('info-classifyEdit', {
				'id': item._id,
				'isLink': item.isLink,
				'moduleId': $stateParams.moduleId,
				'name': $stateParams.name,
				'page': 'info'
			});
		}
	};
	
	//验证网页访问地址是否重复
	$scope.verRepeat = function() {
		$http({
			method: 'GET',
			url: '/pccms/proj/infoCtg/page',
			params: {'staticPageName': $scope.editBean.seo.staticPageName, 'id': $scope.editBean._id}
		}).success(function(data, status, headers, config) {
			if (data.isSuccess) {
				if($stateParams.id == undefined){
					$scope.editBean.seo.staticPageName = data.data;
				}
			} else {
				console.log('操作失败。' + data.data);
			}
		}).error(function(data, status, headers, config) {
			console.log('系统异常或网络不给力！');
		});
	};
	
	//预览
	$scope.preview = function(id,isLink,linkUrl){
		if(isLink == true){
			window.open(linkUrl);
		}else{
			window.open('/pccms/proj/infoCtg/'+id+'/view');
		}
	};
	
	//删除前验证文章分类下的数量
	$scope.delInfoCtg = function(id){
		$http({
			method: 'GET',
			url: '/pccms/proj/infoCtg/infoArticle',
			params: {'ids': id}
		}).success(function(data, status, headers, config){
			if(data.isSuccess){
				var mes = data.data; 
				if(mes == ''){
					 mes = '该分类下无资讯';
				 }
					utils.confirmBox('提示', mes, function(){
						deleteCtgs(id);
					});
				 
			}
		}).error(function(data, status, headers, config) {
			console.log('系统异常或网络不给力！');
		});
		    
	}
	//删除分类
	function deleteCtgs(id){
		$http({
			method: 'DELETE',
			url: '/pccms/proj/infoCtg/list/all',
			params: {'ids': id}
		}).success(function(data, status, headers, config){
			if(data.isSuccess){
				console.log("删除分类成功!");
				$scope.reloadInfoArticle();
			}else{
				console.log(data.data);
			}
			console.info(data);
		}).error(function(data, status, headers, config) {
			console.log('系统异常或网络不给力！');
		});
	}
	
	//批量删除前验证文章分类下的数量
	$scope.deleteBatch = function(){
		var idArr = [];
		for(var key in $scope.dataList){
			var item = $scope.dataList[key];
			if(item.isChecked){
				idArr.push(item._id);
			}
		};
		if(!idArr.join(',')){
			utils.alertBox('提示', '请选择需要删除的资讯分类！');
			return;
		}else{
			$scope.delInfoCtg(idArr.join(','));
		};
	};
	
	//文章分类列表刷新
	$scope.reloadInfoArticle = function(){
		$scope.currentPage = 1;
		//清空关键字。
		$scope.queryParams={'title':''};
		//获取参数，进行查询操作、
		getInfoArticleList(setParam());
	};
	
	//推荐
	$scope.recommend = function(item){
		$scope.item = item;
		$scope.item.isRecommend = !item.isRecommend;
		$http({
			method: 'PUT',
			url: '/pccms/proj/infoCtg/updStatus/'+item._id,
			data: {'isRecommend': $scope.item.isRecommend}
		}).success(function(data, status, headers, config) {
		}).error(function(data, status, headers, config) {
	    	console.log('系统异常或网络不给力！');
	    });
	}
	
	//置顶	
    $scope.displayTop = function(item){
    	$scope.item = item;
    	$scope.item.isDisplayTop = !item.isDisplayTop;
		$http({
			method: 'PUT',
			url: '/pccms/proj/infoCtg/updStatus/'+item._id,
			data: {'isDisplayTop': $scope.item.isDisplayTop}
		}).success(function(data, status, headers, config) {
		}).error(function(data, status, headers, config) {
	    	console.log('系统异常或网络不给力！');
	    });

	};
    
    //显示
    $scope.display = function(item){
    	$scope.item = item;
    	$scope.item.isDisplay = !item.isDisplay;
		$http({
			method: 'PUT',
			url: '/pccms/proj/infoCtg/updStatus/'+item._id,
			data: {'isDisplay': $scope.item.isDisplay}
		}).success(function(data, status, headers, config) {
		}).error(function(data, status, headers, config) {
	    	console.log('系统异常或网络不给力！');
	    });
	};
	
	//向上排序
	$scope.arrowUp = function(elem,up){
		$http({
			method: 'PUT',
			url: '/pccms/proj/infoCtg/updIndex',
			data: {'id': elem._id,'path': elem.path, 'indexType': up, 'moduleId':$stateParams.moduleId}
		}).success(function(data, status, headers, config){
			if(data.isSuccess == false){
				console.log(data.data);
			};
			if(data.isSuccess == true){
				console.log(data.data);
			};			
			getInfoArticleList(setParam());
		}).error(function(data, status, headers, config){
	    	console.log('系统异常或网络不给力！');
	    });
	};
	
	//向下排序
	$scope.arrowDown = function(elem,down){
		console.log($stateParams.moduleId);
		$http({
			method: 'PUT',
			url: '/pccms/proj/infoCtg/updIndex',
			data: {'id': elem._id,'path': elem.path, 'indexType': down, 'moduleId':$stateParams.moduleId}
		}).success(function(data, status, headers, config){
			if(data.isSuccess == false){
				console.log(data.data);
			};
			if(data.isSuccess == true){
				console.log(data.data);
			};
			
			getInfoArticleList(setParam());
			
		//	getInfoArticleList();
		}).error(function(data, status, headers, config){
	    	console.log('系统异常或网络不给力！');
	    });
	};
	
	//关键字查询
	$scope.searchInfoArticle = function(){
		if ($scope.queryParams.title.length > 64) {
			utils.alertBox('操作提示', '关键字查询字符应为0~64个字符');
			$scope.queryParams={'title':''};
			return;
	    }
		//获取参数，进行查询操作
		getInfoArticleList(setParam());
	};
	

	
	//高级搜索查询。
	$scope.advancedSearchList = function(){
		var obj = setAdvancedParam();
		getInfoArticleList(obj);
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
	}
	
	//勾选
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
	}
	
	//反选
	$scope.fanCheck = function(dataList){
		var arr = [];
		for(var key in $scope.dataList){
			var item = $scope.dataList[key];
			if(item.isChecked){
				item.isChecked = false;
				$scope.isCheckAll = false;
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
	}


	//-------------------table tree start---------------------------

	//单行选中
	$scope.checkItem = function(item) {	
		item.isChecked = !item.isChecked;
		$scope.isCheckAll = checkAllList();		
		//父选子全选。
		checkSelectedChildren(item);		
		function checkSelectedChildren(_item) {
			//子级				
			for (var k in $scope.dataList) {
				var tmp = $scope.dataList[k].path.split(',');
				if (tmp.length > _item.path.split(',').length &&
					tmp[tmp.length - 2] == _item._id) {						
					checkSelectedChildren($scope.dataList[k]);
					$scope.dataList[k].isChecked = item.isChecked;
				}
			}
		};
		//子全选选父也全选选。
		checkSelectedParent(item);	
		function checkSelectedParent(_item){
			var pid = _item.path.split(',')[_item.path.split(',').length-2];
				if(checkedStatus(_item.path)){
					for(var k in $scope.dataList){
						if($scope.dataList[k]._id == pid){
							$scope.dataList[k].isChecked = true;
								checkSelectedParent($scope.dataList[k]);					
						}
					}	
				}else{
					for(var k in $scope.dataList){
						if($scope.dataList[k]._id == pid){
							$scope.dataList[k].isChecked = false;
								checkSelectedParent($scope.dataList[k]);	
						}
					}					
				}
		};
	};
	//判断相同的checkBox是否是全部选中。
	function checkedStatus(_path) {		
		var status = true;
		for (var k in $scope.dataList) {			
				if ($scope.dataList[k].path == _path) {
					if (!$scope.dataList[k].isChecked) {						
						status = false;
					}			
			}
		}
		return status;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
	};

	//表格折叠树效果。
	$scope.collapsed = true;
	var _pid = {};	
	$scope.toggleData = function(item,collapsed){			
		if(!collapsed){
			_pid[item._id] = item._id;
		}else{
			_pid[item._id] = -1;
		}          
	};
	$scope.showData = function(item){		
		var flag = true;
		for(var k in _pid){
		  if(item.path)	var arr = item.path.split(',');
			for(var i in arr){
				if(arr[i] == _pid[k])  flag = false;
			}
		}
		return flag;
	};
	
	//-------------------table tree end---------------------------
	
	//加载列表数据
	function getInfoArticleList(params){
		$http({
			method: 'GET',
			url: '/pccms/proj/infoCtg/list/all',
			params: params
		}).success(function(data, status, headers, config) {

	    	if(data.isSuccess){
	    		if(data.data){

	    			$scope.dataList = data.data;

	    			for(var k in $scope.dataList){
	    				$scope.dataList[k].isChecked = false;
	    			}

	    		}
	    	}else{
	    		console.log('获取数据失败：' + data.data);
	    	}
	    }).error(function(data, status, headers, config) {
	    	console.log('系统异常或网络不给力！');
	    });
	};
	
	//init quuery.
	getInfoArticleList(setParam());	
	
	
	//设置参数(高级搜索)。
	function setAdvancedParam() {
		var obj = new Object();
		
		if ($scope.advanced) {
			  
			if ($scope.advanced.title){
				obj.title = $scope.advanced.title || ''; //资讯分类名称
			}			
			if($scope.advanced.isRecommend){
				obj.isRecommend = $scope.advanced.isRecommend; //推荐
			}
			if($scope.advanced.isDisplayTop){
				obj.isDisplayTop = $scope.advanced.isDisplayTop; //置顶
			}
			if ($scope.advanced.isDisplay){
				obj.isDisplay = $scope.advanced.isDisplay; //显示、隐藏、不限
			}
			if($scope.moduleId){
				obj.moduleId = $scope.moduleId;
			}
		};
		return obj;
	};	
	
	//设置参数。(普通查询)
	function setParam() {
		
		var obj = new Object();
		
		if ($scope.queryParams.title) {
			obj.title = $scope.queryParams.title;
		} else {
			obj.title = '';
		}
		
		if($scope.moduleId){
			obj.moduleId = $scope.moduleId;
		}
		
		return obj;
	};
	
}]);