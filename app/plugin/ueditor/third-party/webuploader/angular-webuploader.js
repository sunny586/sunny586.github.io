angular.module('ng.webuploader', []).directive('webuploader', function() {
    return {
        restrict : 'A',
        scope: {
          config: "=",
          uploader: "="
        },
        link : function($scope, element, attr, ctrl) {
        	//复制扩展属性
            var opts = $scope.config ? $scope.config : {};
    	    var option = {
    	    	auto: false,//是否自动上传
    	    	server: "http://localhost:8083/pccms/file/local/upload",//文件上传接口
                swf: "/pccms/plugin/ueditor/third-party/webuploader/Uploader.swf",
    	        label: "上传图片",//文字标签
    	        formData: {},
    	        fileVal: "file",//上传文件域
    	        extensions: "gif,jpg,jpeg,bmp,png",//文件类型
                mimeTypes: "image/*",
    	        multiple: false,//是否多文件上传
    	        duplicate: true,//是否充许重复文件上传
    	        beforeFileQueued: null,//当文件添加前回调
    	        fileQueued: null,//当文件添加到队列时回调
    	        uploadStart: null,//当文件开始上传时
    	        uploadProgress: null,//文件上传进度回调
    	        uploadSuccess: null,//文件上传成功回调 
    	        uploadError: null,//文件上传失败回调
    	        uploadComplete: null,//当上传完成时回调
    	        uploadFinished: null,//当所有文件上传结束时触发
    	        error: null//验证失败时回调
    	    };

            angular.extend(option, opts);

    	    var _uploader;
    	    
			_uploader = WebUploader.create({
                // 选完文件后，是否自动上传。
                auto: option.auto,
                // swf文件路径
                swf: option.swf,
                // 文件接收服务端。
                server: option.server,
                // 内部根据当前运行是创建，可能是input元素，也可能是flash.
                pick: {
                    id: element,
                    label: option.label,
                    multiple: option.multiple
                },
                fileVal: option.fileVal,
                //只允许选择文件类型
                accept: {
                    title: "Files",
                    extensions: option.extensions,
                    mimeTypes: option.mimeTypes
                },
    	        duplicate: option.duplicate,
                button: element,
                formData: option.formData
            });
            // 当添加文件前
            _uploader.on("beforeFileQueued", function(file) {
                if(typeof(option.beforeFileQueued) == "function"){
                    return option.beforeFileQueued.apply(this, [_uploader, file]);
                }
            });
            
            // 当有文件添加进来的时候
			_uploader.on("fileQueued", function(file) {
                if(typeof(option.fileQueued) == "function"){
                    option.fileQueued.apply(this, [_uploader, file]);
                }
            });
            
            // 当有文件添加进来的时候
			_uploader.on("uploadStart", function(file) {
                if(typeof(option.uploadStart) == "function"){
                    option.uploadStart.apply(this, [_uploader, file]);
                }
            });
			
            // 文件上传过程中创建进度条实时显示。
			_uploader.on("uploadProgress", function(file, percentage) {
                if(typeof(option.uploadProgress) == "function"){
                    option.uploadProgress.apply(this, [_uploader, file, percentage]);
                }
            });
			
            // 文件上传成功
			_uploader.on("uploadSuccess", function(file, res) {
            	if(typeof(option.uploadSuccess) == "function"){
                    option.uploadSuccess.apply(this, [_uploader, file, res]);
                }
            });
			
            // 文件上传失败，显示上传出错。
			_uploader.on("uploadError", function(file) {
                if(typeof(option.uploadError) == "function"){
                    option.uploadError.apply(this, [_uploader, file]);
                }
            });
			
            // 完成上传完了，成功或者失败
			_uploader.on("uploadComplete", function(file) {
                if(typeof(option.uploadComplete) == "function"){
                    option.uploadComplete.apply(this, [_uploader, file]);
                }
            });
			
            // 当所有文件上传结束时触发
			_uploader.on("uploadFinished", function(file) {
                if(typeof(option.uploadFinished) == "function"){
                    option.uploadFinished.apply(this, [_uploader, file]);
                }
            });
			
			_uploader.on("error", function(res){
            	//Q_EXCEED_NUM_LIMIT 文件数量超出
            	//Q_EXCEED_SIZE_LIMIT 文件总大小超出
            	//Q_TYPE_DENIED 文件类型不正确
                if(typeof(option.error) == "function"){
                    option.error.apply(this, [_uploader, res]);
                }
            });
			//返回图片上传实例
            if (typeof $scope.uploader === "function") {
            	$scope.uploader(_uploader);
            }
        }
    }
});