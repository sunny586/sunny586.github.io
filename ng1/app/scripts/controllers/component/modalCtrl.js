/**
 *  Module
 *
 * Description
 */
app.controller('modalCtrl', ['$scope', '$modal',
	function($scope, $modal) {
		$scope.open = function() {			
			$modal.open({
				templateUrl: 'views/app/component/open-modal.html',
				controller: 'openModalCtrl',
				backdrop: 'static',
				size: 'md'
			})
		};
	}
]);
app.controller('openModalCtrl', ['$scope','$modalInstance',
	function($scope,$modalInstance) {
		$scope.ok = function() {
			$modalInstance.close();
		};
		$scope.cancel = function() {
			$modalInstance.dismiss();
		};
	}
]);