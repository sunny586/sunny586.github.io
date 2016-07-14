'use strict';
/**
 * @ngdoc function
 * @name MESSAGE
 * @description
 * # MESSAGE 
 */
angular.module('app')
	.value('MESSAGE', {		
		//字符提示
		'PROMPT': '提示',
		"M_DELETE_SITE": "删除站点的同时，站点包含的推荐栏位也会一同被删除，是否继续删除？",
		"M_NULL_MESS":"该策略模板不可使用，请重新选择其他策略模板！",
		"M_DELETE_RESOURCE":"是否继续删除该资源？"
	}); 	