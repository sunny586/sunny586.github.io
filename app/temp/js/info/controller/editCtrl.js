//文章录入。
infoApp.controller('editCtrl', ['$scope', '$http', '$state', '$stateParams', 'commonTool','utils',
						function($scope,   $http,   $state,   $stateParams,   commonTool,utils) {

		//init.
		$scope.init = function() {

			$scope.bean = {};
			$scope.bean.seo = {};
			$scope.classify = {};
			$scope.bean.imgSm = {};
			$scope.classify.activeItemBean ={};
			$scope.imageExist = false; //是否存在缩略图，默认为false。

			$scope.categoryDialog = false;
			$scope.mask = false;

			$scope.isLinkFlag = false; //是否有外部链接。
			$scope.isThumbnail = false; //是否有缩略图。

			$scope.infoSeo = true;
			$scope.infoOther = true;			

			$scope.configContent = {
				maximumWords: 20000
			};
			$scope.configDesc = {
				maximumWords: 300
			};
			$scope.configSeoDesc = {
				maximumWords: 150
			};

			//加载下拉树。
			$scope.classify.activeItemBean = {};
				 
			$http.get('/pccms/proj/infoCtg/tree/all?moduleId='+$stateParams.moduleId)
				.success(function(data, status, headers, config) {
					if (data.isSuccess) {
						$scope.collectionBean = data.data;
						//设置初始值
						$scope.classify.activeItemBean = {
							_id: data.data[0]._id,
						    name: data.data[0].name	
						}
					} else {
						console.log('操作失败。' + data.data);
					}
				})
				.error(function(data, status, headers, config) {
					console.log('系统异常或网络不给力！');
				});			

			//修改就去加载表单数据。
			if ($stateParams.id) {

				console.log($stateParams.isLink);
				//if($stateParams.isLink) $scope.hasLink();
				if($stateParams.isLink === 'true'){
					
					$scope.hasLink();
				}
				//$scope.beanStatus = $stateParams.name + '修改';
				$http.get('/pccms/proj/infoArticle/' + $stateParams.id)
					.success(function(data, status, headers, config) {						
						if (data.isSuccess) {
							$scope.bean = data.data;
							//图片。
							if (data.data.imgSm.url) {
								$scope.imageExist = true;
								$scope.isThumbnail = true;
								$scope.img = {};
								$scope.img.thumbnail = [];
								$scope.img.thumbnail[0] = {};
								$scope.img.thumbnail[0].path = data.data.imgSm.url;
							}							
							$scope.classify.activeItemBean = {
								_id: data.data.ctgs[0].id,
								name: data.data.ctgs[0].name
							};
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
				$scope.classify.activeItemBean ={};
			}
		};

		//验证网页访问地址是否重复
		$scope.verRepeat = function() {

			var id = '';
			if ($scope.bean._id) {
				id = $scope.bean._id;
			}

			$http({
				method: 'GET',
				url: '/pccms/proj/infoArticle/page',
				params: {
					'staticPageName': $scope.bean.seo.staticPageName,
					'id': id
				}
			}).success(function(data, status, headers, config) {

				if (data.isSuccess) {
					$scope.bean.seo.staticPageName = data.data;
				} else {
					utils.alertBox('操作提示', data.data);
				}

			}).error(function(data, status, headers, config) {
				console.log('系统异常或网络不给力！');
			});

		};

		$scope.setNetAddress = function() {		
			if (!$scope.bean.title) {	
				$scope.titlelostflag=true;
				$scope.bean.seo = {};
				$scope.bean.seo.staticPageName = '';
			
				//utils.alertBox('操作提示', "输入不能为空！");
			} else {
				$scope.titlelostflag=false;
				$http({
					method: 'GET',
					url: '/pccms/proj/infoArticle/page',
					params: {
						'staticPageName': codefans_net_CC2PY($scope.bean.title),
						'id': ''
					}
				}).success(function(data, status, headers, config) {
					if (data.isSuccess) {
						if ($stateParams.id == undefined) {
							$scope.bean.seo = {};
							$scope.bean.seo.staticPageName = data.data;
						}
					} else {
						console.log('操作失败。' + data.data);
					}
				}).error(function(data, status, headers, config) {
					console.log('系统异常或网络不给力！');
				});

			}
		};

		$scope.keyWordErr = false;
		$scope.keyWordInvalid = false;
		$scope.$watch('bean.seo.keyword', function(newOptions, oldOptions) {	
			(newOptions && (newOptions.split(',').length > 5 ||
				newOptions.split(' ').length > 5 ||
				newOptions.split('|').length > 5)) ?
			($scope.keyWordErr = true, $scope.keyWordInvalid = true) :
			($scope.keyWordErr = false, $scope.keyWordInvalid = false);		
		}, true);

		//提交操作。(文章录入)
		$scope.saveAirticle = function() {

			if ($stateParams.moduleId) {
				$scope.bean.moduleId = $stateParams.moduleId;
			}

			$scope.bean.ctgs = [];

			$scope.bean.ctgs[0] = {
				id: $scope.classify.activeItemBean._id,
				name: $scope.classify.activeItemBean.name
			}		

			$scope.bean.imgSm.url = $('#thumbnail').attr('src');

			var _saveAirticle;			
			if ($stateParams.id) { //修改。	
				_saveAirticle = $http.put('/pccms/proj/infoArticle/' + $stateParams.id, $scope.bean);
				
			} else { //新增。
				_saveAirticle = $http.post('/pccms/proj/infoArticle', $scope.bean);				
			}			
			_saveAirticle.success(function(data, status, headers, config) {

					if (data.isSuccess) {
						if ($stateParams.moduleId && $stateParams.name && $stateParams.page){
							$state.go('list', {
								'moduleId': $stateParams.moduleId,
								'name': $stateParams.name,
								'page': $stateParams.page
							});
						}else{
							$state.go('list');
						}							
					} else {
						console.log('文章录入失败。' + data.data);
						utils.alertBox('操作提示', data.data);
					}
				}).error(function(data, status, headers, config) {
					console.log('系统异常或网络不给力！');
				});

		}	

		//添加分类。
		$scope.addCategory = function() {

			$scope.categoryDialog = true;
			$scope.mask = true;
			$scope.cTitle = '';	

			//加载下拉树。
			$scope.classify.ksActiveItemBean = {};
				 
			$http.get('/pccms/proj/infoCtg/tree/all?moduleId='+$stateParams.moduleId)
				.success(function(data, status, headers, config) {
					if (data.isSuccess) {
						$scope.ksCollectionBean = data.data;
					} else {
						console.log('操作失败。' + data.data);
					}
				})
				.error(function(data, status, headers, config) {
					console.log('系统异常或网络不给力！');
				});	

		};
		

		//关闭快速添加分类、
		$scope.closeCategoryDialog = function(){
			$scope.categoryDialog = false;
			$scope.mask = false;
		};

		//快速添加分类。
		$scope.saveAddCategory = function() {			

			var obj = {};
			    obj.name = $scope.cTitle;
			    obj.path = $scope.classify.ksActiveItemBean.path ? 
			    		   $scope.classify.ksActiveItemBean.path +$scope.classify.ksActiveItemBean._id+','  :
			               ','+$scope.classify.ksActiveItemBean._id+',';
			    obj.moduleId=$stateParams.moduleId;
			    
			$http.post('/pccms/proj/infoCtg', obj)
				.success(function(data, status, headers, config) {
				if (data.isSuccess) {									
					$scope.categoryDialog = false;
					$scope.mask = false;

					//加载下拉树。
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
					
				} else {
					console.log('失败。' + data.data);
					utils.alertBox('操作失败', data.data);
				}
			}).error(function(data, status, headers, config) {
				console.log('系统异常或网络不给力！');
			});

		};

		//清空表单。
		$scope.clearFormBtn = function() {
			$state.go('add', {
				'moduleId': $stateParams.moduleId,
				'name': $stateParams.name,
				'page': $stateParams.page
			}, {
				reload: true
			});
		};

		//存在外部链接。
		$scope.hasLink = function() {
			$scope.bean.isLink = true;
			$scope.isLinkFlag = true;
			$scope.infoSeo = false;
			$scope.infoOther = false;
		};

		//没有缩略图。
		$scope.hasNotThumbnail = function() {
			$scope.isThumbnail = false;
		};

		//有缩略图。
		$scope.hasThumbnail = function() {
			$scope.isThumbnail = true;
		};
	}
]);