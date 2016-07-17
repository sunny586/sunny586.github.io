/**
 * app Module
 *
 * Description
 */
angular.module('app')
	.controller('treeCtrl', ['$scope', function($scope) {
		$scope.treeOptions = {
			nodeChildren: "children",
			dirSelectable: true,
			injectClasses: {
				// ul: "a1",
				// li: "a2",
				// liSelected: "a7",
				// iLeaf: "a5",
				// label: "a6",
				// labelSelected: "a8",
				iExpanded: "fa fa-caret-down",
				iCollapsed: "fa fa-caret-right"
			}
		}
		$scope.dataForTheTree =
			[{
				"name": "Joe",
				"age": "21",
				"children": [{
					"name": "Smith",
					"age": "42",
					"children": []
				}, {
					"name": "Gary",
					"age": "21",
					"children": [{
						"name": "Jenifer",
						"age": "23",
						"children": [{
							"name": "Dani",
							"age": "32",
							"children": []
						}, {
							"name": "Max",
							"age": "34",
							"children": []
						}]
					}]
				}]
			}, {
				"name": "Albert",
				"age": "33",
				"children": []
			}, {
				"name": "Ron",
				"age": "29",
				"children": []
			}];


	$scope.treedata=[
         {label: "Documents", type: "folder", children: [
             {label: "a picture", type: "pic"},
             {label: "another picture", type: "pic"},
             {label: "a doc", type: "doc"},
             {label: "a file", type: "file"},
             {label: "a movie", type: "movie"}
         ]},
         {label: "My Computer", type: "folder", children: [
             {label: "email", type: "email"},
             {label: "home", type: "home"}
         ]},
         {label: "trash", type: "trash"}

     ];
     $scope.showSelected = function(sel) {
         $scope.selectedNode = sel;
     };


     $scope.onNodeToggle = function(node,$event){
     	console.log(node);
     	console.log('=======')
     	
     }
	}])