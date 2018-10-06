'use strict';

/* Filters */
// need load the moment.js to use this filter. 
angular.module('app')
	.filter('fromNow', function() {
		return function(date) {
			return moment(date).fromNow();
		}
	})
	.filter('status', function() {
		return function(data) {
			var flag = null;
			data == "0" ? flag = false : flag = true;
			return flag;
		}
	});
