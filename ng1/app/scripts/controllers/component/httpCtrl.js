/**
 * app Module
 *
 * Description
 */
angular.module('app')
	.controller('httpCtrl', ['$scope', '$http', 'httpRequestService', 'MESSAGE', '$modal', '$state',
		function($scope, $http, httpRequestService, MESSAGE, $modal, $state) {

			$scope.maxSize = 5; //分页条长度。
			$scope.currentPage = 1; //当前页。默认是第一页。
			$scope.pageSize = 10; //每页条数。

			$scope.genres = [{
				value: 'css',
				name: 'CSS'
			}, {
				value: 'ng1',
				name: 'Angular1.x'
			}, {
				value: 'ng2',
				name: 'Angular2.0'
			}, {
				value: 'react',
				name: 'React'
			}, {
				value: 'node',
				name: 'NodeJS'
			}, {
				value: 'webpack',
				name: 'Webpack'
			}, {
				value: 'gulp',
				name: 'Gulp'
			}, {
				value: 'vue',
				name: 'Vue'
			}, {
				value: 'es6',
				name: 'ES6'
			}, {
				value: 'chart',
				name: '图表'
			},{
				value: 'python',
				name: 'Python'
			}, {
				value: 'other',
				name: '其他'
			}];
			$scope.genreList = angular.copy($scope.genres);
			$scope.genreList.unshift({
				value: '',
				name: '全部'
			})
			$scope.loadData = function() {
				console.log($scope.type)
				var params = {
					size: $scope.pageSize,
					page: $scope.currentPage,
					type: $scope.type,
					keywords: $scope.keywords
				}
				httpRequestService.get(MESSAGE.STUDY_LIST, params)
					.success(function(response) {
						if (response.success == 'ok') {
							$scope.totalItems = response.totalItems;
							$scope.studys = response.data;
						}
					})
					.error(function(err, code) {
						console.log(err);
					});

					// $.ajax({
					//     type: 'GET',
					//     url: 'http://10.12.8.138:8080/doc/getDocs',
					//     data: {
					//     	pageCurrent:1,
					//     	pageSize:10,
					//     	searchType:''
					//     },
					//     success: function(response){

					//     } 
					// });
			}

			//init
			$scope.loadData();

			$scope.edit = function(item) {


				$modal.open({
					templateUrl: 'views/app/component/modal/study-edit.html',
					controller: 'editStudyItemCtrl',
					backdrop: 'static',
					size: 'md',
					resolve: {
						tParams: function() {
							return {
								id: item.id || null,
								genres: $scope.genres
							}
						}
					}
				})
			}

			$scope.add = function() {
				$modal.open({
					templateUrl: 'views/app/component/modal/study-edit.html',
					controller: 'editStudyItemCtrl',
					backdrop: 'static',
					size: 'md',
					resolve: {
						tParams: function() {
							return {
								genres: $scope.genres
							}
						}
					}
				})
			}

			$scope.changed = function() {

				console.log('aaa')
			}

			//STUDY_ITEM_DEL
			$scope.delete = function(item) {
				console.log(item.id)
				httpRequestService.post(MESSAGE.STUDY_ITEM_DEL, {
						id: item.id
					})
					.success(function(response) {
						if (response.success == 'ok') {
							$scope.loadData();
						}
					})
					.error(function(err, code) {
						console.log(err);
					});
			}
		}
	]);

angular.module('app')
	.controller('editStudyItemCtrl', ['$scope', '$modalInstance', 'tParams', 'httpRequestService', 'MESSAGE', '$state',
		function($scope, $modalInstance, tParams, httpRequestService, MESSAGE, $state) {

			$scope.genres = tParams.genres;

			if (tParams.id) {
				httpRequestService.get(MESSAGE.STUDY_ITEM_GET, {
						id: tParams.id
					})
					.success(function(response) {
						if (response.success == 'ok') {
							$scope.study = response.data;
						}
					})
					.error(function(err, code) {
						console.log(err);
					});
			}

			$scope.ok = function() {
				httpRequestService.post(MESSAGE.STUDY_ITEM_SAVE, $scope.study)
					.success(function(response) {
						if (response.success == 'ok') {
							$modalInstance.close();
							$state.go('app.component-http', null, {
								reload: true
							});
						}
					})
					.error(function(err, code) {
						console.log(err);
					});
			};
			$scope.cancel = function() {
				$modalInstance.dismiss();
			};
		}
	])