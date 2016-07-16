/**
 * app Module
 *
 * Description
 */
angular.module('app')
	.controller('uploadCtrl', ['$scope', 'FileUploader', function($scope, FileUploader) {

		var uploader = $scope.uploader = new FileUploader({
			url: 'https://angular-file-upload-cors-srv.appspot.com/upload'
		});
		
		// FILTERS
		uploader.filters.push({
			name: 'customFilter',
			fn: function(item /*{File|FileLikeObject}*/ , options) {
				//去重。
				var isReapet = false;
				angular.forEach(this.queue, function(_item, i) {
					if (_item._file.name === item.name) isReapet = true;
				});
				//上传文件数量，不能超过10个。
				var isMaxLength = this.queue.length < 10;
				return isMaxLength && !isReapet;
			}
		});

		// // CALLBACKS
		// uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/ , filter, options) {
		// 	console.info('onWhenAddingFileFailed', item, filter, options);
		// };
		// uploader.onAfterAddingFile = function(fileItem) {
		// 	console.info('onAfterAddingFile', fileItem);
		// };

		// uploader.onAfterAddingAll = function(addedFileItems) {
		// 	console.info('onAfterAddingAll', addedFileItems);
		// };
		// uploader.onBeforeUploadItem = function(item) {
		// 	console.info('onBeforeUploadItem', item);
		// };
		// uploader.onProgressItem = function(fileItem, progress) {
		// 	console.info('onProgressItem', fileItem, progress);
		// };
		// uploader.onProgressAll = function(progress) {
		// 	console.info('onProgressAll', progress);
		// };
		uploader.onSuccessItem = function(fileItem, response, status, headers) {
			//console.info('onSuccessItem', fileItem, response, status, headers);

			console.log(response)
		};
		// uploader.onErrorItem = function(fileItem, response, status, headers) {
		// 	console.info('onErrorItem', fileItem, response, status, headers);
		// };
		// uploader.onCancelItem = function(fileItem, response, status, headers) {
		// 	console.info('onCancelItem', fileItem, response, status, headers);
		// };
		// uploader.onCompleteItem = function(fileItem, response, status, headers) {
		// 	console.info('onCompleteItem', fileItem, response, status, headers);
		// };
		// uploader.onCompleteAll = function() {
		// 	console.info('onCompleteAll');
		// };

		// console.info('uploader', uploader);



	}]);