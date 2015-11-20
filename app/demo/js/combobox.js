demoApp.controller('comboboxCtrl', ['$scope', '$timeout', function ($scope, $timeout){

    localStorage.getItem('isdev') == 'true' ? $scope.status = true : $scope.status = false;

	// $scope.resetCombobox = function(){
 //        $scope.activeItem = {};
 //    };

	$scope.itemChanged = function () {
		console.info('item changed');
        console.log($scope.activeItem);
    };

    //设置初始值
    $scope.activeItem = {
        _id:2,
        name:'item1_1'
    };
	
	//初始数据集合
	$scope.collection = [
         {
             _id:1,
             name:'item1',
             children:[
                 {
                     _id:2,
                     name:'item1_1'
                 },
                 {
                     _id:3,
                     name:'item2_2'
                 }
             ]
         },
         {
             _id:4,
             name:'item2',
             children:[
                 {
                     _id:5,
                     name:'item2_1'
                 },
                 {
                     _id:6,
                     name:'item2_2',
                     children:[
                         {
                             _id:7,
                             name:'item2_2_1'
                         },
                         {
                             _id:8,
                             name:'item2_2_2'
                         }
                     ]
                 }
             ]

         }
     ];
}]);