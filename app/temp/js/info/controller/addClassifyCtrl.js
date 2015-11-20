//文章分类录入
infoApp.controller('addClassifyCtrl',['$scope', '$http', '$state', 'utils','$stateParams', 
							  function($scope,   $http,   $state,   utils,  $stateParams){
	 
	$scope.bean = {};
	$scope.bean.seo = {};
	$scope.bean.imgSm={};
	$scope.bean.imgMd={};

	$scope.bean.seo = {};
	$scope.infoSeo = true;
	$scope.infoOther = true;
	$scope.faceCheck = true;

	$scope.isLinkFlag = false;

	$scope.isThumbnail = false; //是否有缩略图。

	//加载下拉树。
	$scope.classify ={};
	$scope.classify.activeItemBean = {};
	$http.get('/pccms/proj/infoCtg/tree/all?moduleId='+$stateParams.moduleId)
		.success(function(data, status, headers, config) {
			if (data.isSuccess) {
				$scope.collectionBean = data.data;
			} else {
				console.log('操作失败。' + data.data);
			}
		})
		.error(function(data, status, headers, config) {
			console.log('系统异常或网络不给力！');
		});



	//没有缩略图。
	$scope.hasNotThumbnail = function(){
		$scope.isThumbnail = false; 
	};
	//有缩略图。
	$scope.hasThumbnail = function(){
		$scope.isThumbnail = true; 
	};
	//存在外部链接。
	$scope.hasLink = function(){		
		$scope.isLinkFlag = true;

		$scope.infoSeo = false;
		$scope.infoOther = false;
		$scope.faceCheck = false;
	};



	//修改就去加载表单数据。
	if ($stateParams.id) {	
	
		if ($stateParams.isLink === 'true') {
			$scope.hasLink();
		}
	
		$http.get('/pccms/proj/infoCtg/' + $stateParams.id)
			.success(function(data, status, headers, config) {

				if (data.isSuccess) {
					 $scope.bean = data.data;

					//图片。
					$scope.img = {};
					if (data.data.imgSm.url) {
						$scope.imageExist = true;
						$scope.isThumbnail = true;						
						$scope.img.thumbnail = [];
						$scope.img.thumbnail[0] = {};
						$scope.img.thumbnail[0].path = data.data.imgSm.url;
					}

					$scope.classify.activeItemBean = {
						_id: data.data.parentCtg.id,
						name: data.data.parentCtg.name
					};

					if (data.data.imgMd.url) {						
						$scope.img.lmicon = [];
						$scope.img.lmicon[0] = {};
						$scope.img.lmicon[0].path = data.data.imgMd.url;
					}

				} else {
					console.log('操作失败。' + data.data);
					utils.alertBox('操作失败', data.data);
				}
			}).error(function(data, status, headers, config) {
				console.log('系统异常或网络不给力！');
			});

	} else {
		$scope.bean = {};
		$scope.bean.seo = {};
		$scope.classify = {};
		$scope.bean.imgSm = {};
		$scope.classify.activeItemBean = {};
	}



	$scope.setNetAddress = function() {
		//console.log(JSON.stringify($scope.bean));
		if ($scope.bean.name) {
			$http({
				method: 'GET',
				url: '/pccms/proj/infoCtg/page ',
				params: {
					'staticPageName': codefans_net_CC2PY($scope.bean.name),
					'id': ''
				}
			}).success(function(data, status, headers, config) {
				if (data.isSuccess) {
					$scope.bean.seo.staticPageName = data.data;
				} else {
					console.log('操作失败。' + data.data);
				}
			}).error(function(data, status, headers, config) {
				console.log('系统异常或网络不给力！');
			});
		} else {
			$scope.bean.seo.staticPageName = '';
		}
	};
	
	//验证网页访问地址是否重复
	$scope.verRepeat = function(){
		$http({
			method: 'GET',
			url: '/pccms/proj/infoCtg/page',
			params: {'staticPageName': $scope.bean.seo.staticPageName, 'id': ''}
		}).success(function(data, status, headers, config) {
			if (data.isSuccess) {
			    $scope.bean.seo.staticPageName = data.data;
			} else {
				console.log('操作失败。' + data.data);
			}
		}).error(function(data, status, headers, config) {
			console.log('系统异常或网络不给力！');
		});
    };

	
	//加载下拉树。
	$scope.classify ={};
	$scope.classify.activeItemBean = {};
	$http.get('/pccms/proj/infoCtg/tree/all?moduleId='+$stateParams.moduleId)
		.success(function(data, status, headers, config) {
			if (data.isSuccess) {
				$scope.collectionBean = data.data;
				$scope.classify.activeItemBean = {
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

	//获取列表模板
	$http({
			method: 'GET',
			url: '/pccms/proj/projPageTplPack/list/type'			
		}).success(function(data, status, headers, config) {
	    	if(data.isSuccess){	 
	    		if(data.data){
	    			$scope.temp = data.data;
	    		}
	    	}else{
	    		console.log('获取数据失败：' + data.data);
	    	}
	    }).error(function(data, status, headers, config) {
	    	console.log('系统异常或网络不给力！');
	    });
	
	$scope.bean.pageTpl = [];
	//列表模板选中。
	$scope.listTempOk = {};
	for (var k in $scope.listTempOk) {
		$scope.listTempOk[k] = false;
	}
	$scope.selectListImageOne = function(row) {
		for (var k in $scope.listTempOk) {
			$scope.listTempOk[k] = false;
		}
		$scope.listTempOk[row._id] = true;
		$scope.bean.pageTpl[0] = {
			'id': row._id,
			'type': 'LIST'
		}
	};
	
	//详情模板选中。
	$scope.detailTempOk = {};
	for (var k in $scope.detailTempOk) {
		$scope.detailTempOk[k] = false;
	}	
	$scope.selectDetailImageOne = function(row) {
		for (var k in $scope.detailTempOk) {
			$scope.detailTempOk[k] = false;
		}
		$scope.detailTempOk[row._id] = true;
		$scope.bean.pageTpl[1] = {
			'id': row._id,
			'type': 'DETAIL'
		}
	};


	
	//提交保存。
	$scope.saveBean = function() {

		//获取moduleId。
		if ($stateParams.moduleId) {
			$scope.bean.moduleId = $stateParams.moduleId;
		}

		//获取下拉树参数、		
		$scope.classify.activeItemBean.path 
			?$scope.bean.path = $scope.classify.activeItemBean.path + $scope.classify.activeItemBean._id+','
			:$scope.bean.path = ','+ $scope.classify.activeItemBean._id +',';

		$scope.bean.imgSm.url = $('#thumbnail').attr('src')||'';
		$scope.bean.imgMd.url = $('#lmicon').attr('src')||'';

		var _saveBean;
		if ($stateParams.id) { //修改。	
				_saveBean = $http.post('/pccms/proj/infoCtg/'+ $stateParams.id, $scope.bean);
				
			} else { //新增。
				_saveBean = $http.post('/pccms/proj/infoCtg', $scope.bean);		
			}

			_saveBean.success(function(data, status, headers, config) {

				if (data.isSuccess) {
					$state.go('classify',{
						'moduleId': $stateParams.moduleId,
						'name': $stateParams.name,
						'page': $stateParams.page
					});
				} else {
					console.log('分类录入失败。' + data.data);
					utils.alertBox('操作提示', data.data);
				}
			}).error(function(data, status, headers, config) {
				console.log('系统异常或网络不给力！');
			});
	};


}]);