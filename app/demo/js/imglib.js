demoApp.controller('imglibCtrl', ['$scope', '$modal', 'utils', function ($scope, $modal, utils){


	localStorage.getItem('isdev') == 'true' ? $scope.status = true : $scope.status = false;
	

	//图片预览
	$scope.showImg = function(image){
		utils.imgPreview(image);
	};
	
	$scope.imgConfig = {
		'count' : 2,//限制图片张数
		'size' : 300,//图片大小,单位为k
		'width' : 800,//图片宽度
		'height' : 600,//图片高度
		'ext' : 'gif,jpg,jpeg,bmp,png'//图片扩展名
	};
	
	//图片库弹窗
	$scope.openImglibWin = function(){
		var modalInstance = $modal.open({
			backdrop : 'static',
			templateUrl : 'views/imglibWin.html',
			controller : 'imglibWinCtrl',
			size : 'lg',
			resolve: {
				imgConfig: function () {
		          return $scope.imgConfig;
		        }
		    }
		});
		
		modalInstance.result.then(function(imgList) {
			$scope.imgList = imgList;
		});
	};

}]);



demoApp.controller('imglibWinCtrl',['$scope', '$modalInstance', '$http', '$modal', 'imgConfig', 'utils', function($scope, $modalInstance, $http, $modal, imgConfig, utils) {
	//切换tab事件
	$scope.tabSelected = function(tab){
		$scope.activeTab = tab;
	};
	
	//获取上传组件实例
	var imgUploader;
	$scope.getUploader = function(uploader){
		imgUploader = uploader;
	};
	
	//图片预览队列
	$scope.fileQueued = {};
	//图片上传成功队列
	$scope.fileSuccessQueued = [];
	//图片库文件选择队列
	$scope.selectImgList = [];
	
	//是否多图片上传
	var multiple = imgConfig.count > 1;
	
	//图片上传配置
	$scope.imgConfig = {
        multiple: multiple,//是否多图片上传
        extensions: imgConfig.ext,
        beforeFileQueued: function(uploader, file){//当图片添加前回调
        	console.info(file);
        	//验证可上传图片的张数
        	var len = uploader.getFiles('queued').length;//查询上传队列中的文件数
        	if(len >= imgConfig.count){
    			utils.alertBox('提示', '只能上传 '+imgConfig.count+' 张图片！！！');
        		return false;
        	}
        },
        fileQueued: function(uploader, file){//当图片添加队列时回调
        	uploader.makeThumb(file, function(error, src){
                if(error){
                	//不支持预览
                    return;
                }
                //加入上传队列
                var id = file.id, img = {};
                img.src = src;
                img.name = delExtension(file.name);
                img.state = '准备上传';
                img.hasProgress = false;
                img.progress = 0;
                $scope.fileQueued[id] = img;
                //触发页面刷新
                $scope.$apply();
            }, 94, 79);
        },
        uploadStart: function(uploader, file){//当文件开始上传时
        	var id = file.id;
        	uploader.option('formData', {'zdyName':$scope.fileQueued[id].name});
        },
        uploadProgress: function(uploader, file, percentage){//图片上传进度回调
        	var id = file.id;
        	$scope.fileQueued[id].hasProgress = true;
        	$scope.fileQueued[id].progress = percentage;
            //触发页面刷新
            $scope.$apply();
        },
        uploadSuccess: function(uploader, file, res){//图片上传成功回调 
        	var id = file.id;
        	$scope.fileQueued[id].hasProgress = false;
        	$scope.fileQueued[id].progress = 100;
        	$scope.fileQueued[id].state = '上传成功';
        	$scope.fileSuccessQueued.push(res.data);
            //触发页面刷新
            $scope.$apply();
        },
        uploadError: function(uploader, file){//图片上传失败回调
        	var id = file.id;
        	$scope.fileQueued[id].hasProgress = false;
        	$scope.fileQueued[id].state = '上传失败';
            //触发页面刷新
            $scope.$apply();
        },
        uploadFinished: function(){//当所有文件上传结束时触发
        	//添加上传成功回调代码
			$modalInstance.close($scope.fileSuccessQueued);
        },
        error: function(uploader, res){//当图片验证出错时回调
        	if(res == 'Q_TYPE_DENIED'){
    			utils.alertBox('提示', '图片类型不正确！！！');
        	}else if(res == 'Q_EXCEED_SIZE_LIMIT'){
    			utils.alertBox('提示', '图片总大小超出！！！');
        	}else if(res == 'Q_EXCEED_NUM_LIMIT'){
    			utils.alertBox('提示', '图片数量超出！！！');
        	}
        }
	};
	
	//移除队列图片
	$scope.removeQueuedImg = function(key){
		delete $scope.fileQueued[key];//删除预览队列中的图片
		imgUploader.removeFile(key, true);//删除上传队列中的图片
	};
	
	//图片预览
	$scope.imgPreview = function(image,event){
		utils.imgPreview(image);
		event.stopPropagation();
	};
	
	//选择图片
	$scope.selectImg = function(item){
		if(item.selected){
			$scope.removeImg(item);
			return;
		}
		item.selected = true;
		$scope.selectImgList.push(item);
	};
	
	//移除选中图片
	$scope.removeImg = function(item){
		if(item.selected){
			item.selected = false;
		}
		for(var i in $scope.selectImgList){
			if(item._id == $scope.selectImgList[i]._id){
				$scope.selectImgList.splice(i,1)
				return;
			}
		}
	};
	
	
	//加载图片库列表
	$http.get('/pccms/file/list')
	.success(function(data, status, headers, config) {
    	if(data.isSuccess){
    		$scope.imglibList = data.data;
    	}else{
	    	alert('获取失败！');
    	}
    }).error(function(data, status, headers, config) {
    	alert('系统异常或网络不给力！');
    });
	
	//确定
	$scope.ok = function() {
		if('local' == $scope.activeTab){
        	var len = imgUploader.getFiles('queued').length;//查询上传队列中的文件数
        	if(len == 0){
    			utils.alertBox('提示', '请上传图片！！！');
    			return;
        	}
			//开始上传图片
			imgUploader.upload();
		}else if('imglib' == $scope.activeTab){
			//选择图库图片
			var len = $scope.selectImgList.length;
        	if(len == 0){
    			utils.alertBox('提示', '请选择图片！！！');
    			return;
        	}
			$modalInstance.close($scope.selectImgList);
		}else{
			$modalInstance.close();
		}
	};
	
	//取消
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
	
	//去掉图片的后缀名
	function delExtension(str){
		 var reg = /\.\w+$/;
		 return str.replace(reg,'');
	}
}]);


	