angular.module('app')
	.service('httpRequestService', ['$http', 'serviceHost', '$q', function($http, serviceHost, $q) {
		this.get = function(path, param) {
			var url = serviceHost + path;
			if (param == undefined) {
				param = {
					'noCache': new Date().getTime()
				};
			} else {
				param.noCache = new Date().getTime();
			}			
			return $http({
				url: url,
				method: "GET",
				params: param,
				cache: false
			});
		};
		this.post = function(path, param) {			
			var url = serviceHost + path;
			if (param) {
				param.noCache = new Date().getTime();
			} else {
				param = {
					'noCache': new Date().getTime()
				};
			}			
			return $http({
				method: 'post',
				url: url,
				data: param
			});
		};
		this.query = function(path, param) {
			var defer = $q.defer();
			var url = serviceHost + path;
			if (param == undefined) {
				param = {
					'noCache': new Date().getTime()
				};
			} else {
				param.noCache = new Date().getTime();
			}
			$http({
					method: 'GET',
					params: param,
					url: url
				})
				.success(function(data, status, headers, config) {
					defer.resolve(data);
				})
				.error(function(data, status, headers, config) {
					defer.reject();
				});			
			return defer.promise;
		};
	}]);