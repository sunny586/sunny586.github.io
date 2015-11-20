demoApp.controller('ueditorCtrl', ['$scope', function ($scope){

	localStorage.getItem('isdev') == 'true' ? $scope.status = true : $scope.status = false;

	$scope.content = '<p>Hello, content!</p>';
	
	$scope.content2 = '<p>Hello, content2!</p>';
	
	$scope.content3 = '<p>Hello, content3!</p>';
	
	$scope.content4 = '<p>Hello, content4!</p>';

	$scope.config2 = {
        //这里可以选择自己需要的工具按钮名称,此处仅选择如下五个
        toolbars: [
   			[
			 'fullscreen', 'source', '|', 'undo', 'redo', '|',
			 'bold', 'italic', 'underline', 'fontborder', 'strikethrough', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
			 'fontfamily', 'fontsize', '|',
			 'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|',
			 'link', 'unlink', '|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
			 'simpleupload', 'insertimage', 'emotion', 'scrawl', 'insertvideo', 'music', 'attachment', 'pagebreak', 'template', 'background', '|',
			 'horizontal', 'date', 'time', 'spechars', '|',
			 'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', 'charts'
			]
        ]
	};
	
	$scope.config3 = {
        toolbars: [
            [
             'FullScreen', 'Source', 'Undo', 'Redo', '|',
			 'bold', 'italic', 'underline', 'fontborder', 'strikethrough', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
			 'fontfamily', 'fontsize', '|',
			 'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', 'link', 'unlink'
			 ]
        ]
	};

	$scope.config4 = {
        toolbars: [],
        initialFrameHeight: 100, //设置高度
        wordCount: false, //关闭字数统计
        sourceEditorFirst: true ////编辑器初始化完成后是否进入源码模式，默认为否。
	};
	
}]);