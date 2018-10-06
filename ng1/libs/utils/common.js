angular.module('common', ['ngLocale', 'ngSanitize', 'ui.router', 'ui.bootstrap'])

.factory('utils', ['$rootScope', '$location', '$http', '$modal', '$timeout',
	function($rootScope, $location, $http, $modal, $timeout) {

		function alertBox(title, msg, ok, size, btnLbl) {
			$modal.open({
					template: '<div class="defa-font"><div class="modal-header"><h3 class="modal-title">{{title}}</h3></div><div class="modal-body"><p ng-bind-html="msg"></p></div><div class="modal-footer"><button class="btn btn-primary" ng-click="ok()"><span class="glyphicon glyphicon-ok"></span> ' + (btnLbl ? btnLbl : '确定') + '</button></div></div>',
					controller: ['$scope', '$modalInstance', function($scope, $modalInstance) {
						$scope.title = title;
						$scope.msg = msg;
						$scope.ok = function() {
							$modalInstance.close();
						}
					}],
					backdrop: 'static',
					size: size ? size : 'sm'
				})
				.result.then(
					function() {
						if (ok != undefined) ok()
					}
				);
		}

		function confirmBox(title, msg, ok, cancel, size) {
			$modal.open({
					template: '<div class="defa-font"><div class="modal-header"><h3 class="modal-title">{{title}}<i ng-click="cancel()" class="mdi-content-clear text-lg m-t-sm pull-left"></i></h3></div><div class="modal-body"><p>{{msg}}</p></div><div class="modal-footer"><button class="btn btn-primary bfd-btn" ng-click="ok()">确定</button><button class="btn btn-default bfd-btn" ng-click="cancel()">取消</button></div></div>',
					controller: ['$scope', '$modalInstance', function($scope, $modalInstance) {
						$scope.title = title;
						$scope.msg = msg;
						$scope.ok = function() {
							$modalInstance.close();
						}
						$scope.cancel = function() {
							$modalInstance.dismiss();
						}
					}],
					backdrop: 'static',
					size: size ? size : 'sm'
				})
				.result.then(
					function() {
						ok()
					},
					function() {
						if (cancel != undefined) cancel()
					}
				);
		}

		function openWin(title, msg, ok, cancel, size, btnLbl) {
			var html = [];
			html[html.length] = '<div class="modal-header">';
			html[html.length] = '    <h3 class="modal-title">' + title + '</h3>';
			html[html.length] = '</div>';
			html[html.length] = '<div class="modal-body">' + msg + '</div>';
			html[html.length] = '<div class="modal-footer">';
			html[html.length] = '    <button class="btn btn-primary" type="button" ng-click="ok()">' + (btnLbl ? btnLbl : '确定') + '</button>';
			html[html.length] = '    <button class="btn btn-default" type="button" ng-click="cancel()">取消</button>';
			html[html.length] = '</div>';
			$modal.open({
				template: html.join(''),
				controller: ['$scope', '$modalInstance', function($scope, $modalInstance) {
					$scope.title = title;
					$scope.msg = msg;
					$scope.ok = function() {
						var flag = false;
						if (ok == undefined) {
							flag = true;
						} else if (typeof ok === 'function') {
							var state = ok();
							if (state || state === undefined) {
								flag = true;
							}
						}
						if (flag) {
							$modalInstance.close();
						}
					}
					$scope.cancel = function() {
						var flag = false;
						if (cancel == undefined) {
							flag = true;
						} else if (typeof cancel === 'function') {
							var state = cancel();
							if (state || state === undefined) {
								flag = true;
							}
						}
						if (flag) {
							$modalInstance.dismiss();
						}
					}
				}],
				backdrop: 'static',
				size: size ? size : ''
			});
		}
		//图片预览弹窗
		function imgPreview(image) {
			$modal.open({
				template: '<div class="c-dialog-img-preview"><i class="fa fa-times" ng-click="close();"></i><img src="' + image + '"/></div>',
				controller: ['$scope', '$modalInstance', function($scope, $modalInstance) {
					$scope.close = function() {
						$modalInstance.close();
					}
				}],
				backdrop: 'static',
				size: ''
			});
		}

		return {
			alertBox: alertBox,
			confirmBox: confirmBox,
			openWin: openWin,
			imgPreview: imgPreview,

			helpBox: function(image, size) {
				$modal.open({
					template: '<div class="defa-font"><div class="modal-body help"><img class="w-100" ng-src="{{asset(image)}}" /></div><div class="modal-footer"><button class="btn btn-default" ng-click="close()"><span class="glyphicon glyphicon-remove"></span> 关闭</button></div></div>',
					controller: ['$scope', '$modalInstance', function($scope, $modalInstance) {
						$scope.image = image;
						$scope.close = function() {
							$modalInstance.close();
						}
					}],
					backdrop: 'static',
					size: size ? size : 'md'
				});
			},
			message: function(msg, type, close) {
				var tp;
				angular.element('.alert[name="bfd-alert"]').remove();
				switch (type) {
					case 'success':
						close == 'close' ?
							tp = angular.element('<div class="alert alert-success" name="bfd-alert" role="alert"><i class="fa fa-check-circle" style="color: #3c763d;"></i>' + msg + '<a style="position: absolute;font-size: 14px;right: 10px;"><span class="fa fa-close"></span></a></div>') : tp = angular.element('<div class="alert alert-success" role="alert"><i class="fa fa-check-circle" style="color: #3c763d;"></i>' + msg + '<a style="position: absolute;font-size: 14px;right: 10px;"><span class="fa fa-close"></span></a></div>');
						break;
					case 'warning':
						close == 'close' ?
							tp = angular.element('<div class="alert alert-warning" name="bfd-alert" role="alert"><i class="fa fa-info-circle" style="color: #FF5400;"></i>' + msg + '<a style="position: absolute;font-size: 14px;right: 10px;"><span class="fa fa-close"></span></a></div>') : tp = angular.element('<div class="alert alert-warning" role="alert"><i class="fa fa-info-circle" style="color: #FF5400;"></i>' + msg + '<a style="position: absolute;font-size: 14px;right: 10px;"><span class="fa fa-close"></span></a></div>');
						break;
					case 'error':
						close == 'close' ?
							tp = angular.element('<div class="alert alert-danger" name="bfd-alert" role="alert"><i class="fa fa-times-circle" style="color: #ff7143;"></i>' + msg + '<a style="position: absolute;font-size: 14px;right: 10px;"><span class="fa fa-close"></span></a></div>') : tp = angular.element('<div class="alert alert-danger" role="alert"><i class="fa fa-times-circle" style="color: #ff7143;"></i>' + msg + '<a style="position: absolute;font-size: 14px;right: 10px;"><span class="fa fa-close"></span></a></div>');
						break;
					default:
						break;
				}
				tp.find('i').css({
					'font-size': '18px',
					'top': '16px',
					'left': '18px',
					'position': 'absolute'
				});
				tp.css({
					'position': 'absolute',
					'top': '-10%',
					'z-index': '9999',
					'padding-left': '40px',
					'min-width': '20%'
				}).animate({
					'top': '10%'
				}, 300);
				angular.element(document.body).append(tp);
				var w = tp.outerWidth(),
					winW = angular.element(window).width(),
					_left = Math.ceil(winW / 2 - w / 2) + 'px';
				tp.css('left', _left);				
				if (close !== 'close') {
					$timeout(function() {
						tp.remove();
					}, 2000);
				} else {
					tp.find('a').bind('click', function() {
						tp.remove();
					})
				}
			}
		};
	}
])

.directive('confirmClick', ['utils', function(utils) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			element.bind('click', function(e) {
				e.stopPropagation();

				if ((attrs.confirmWhen == undefined || scope.$eval(attrs.confirmWhen))) {
					utils.confirmBox('提示', attrs.confirmMsg,
						function() {
							scope.$eval(attrs.confirmClick);
						}
					)
				} else {
					scope.$eval(attrs.confirmClick);
				}
			});
		}
	}
}]);