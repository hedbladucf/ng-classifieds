(function() {

	"use strict";

	angular
		.module('ngClassifieds')
		.controller('editClassifiedsCtrl', function($state, $scope, $mdSidenav, $timeout, $mdDialog, classifiedsFactory) {

			var vm = this;
			vm.classifieds = classifiedsFactory.ref;
			vm.closeSidebar = closeSidebar;
			vm.saveEdit = saveEdit;
			vm.classified = vm.classifieds.$getRecord($state.params.id);

			$timeout(function() {
				$mdSidenav('left').open();
			});

			$scope.$watch('vm.sidenavOpen', function(sidenavOpen) {
				if(sidenavOpen === false) {
					$mdSidenav('left')
						.close()
						.then(function() {
							$state.go('classifieds');
						});
				}
			});

			function closeSidebar() {
				vm.sidenavOpen = false;
			}

			function saveEdit() {
				vm.classifieds.$save(vm.classified).then(function() {
					$scope.$emit('editSaved', 'Edit saved!');
					vm.sidenavOpen = false;
				});
			}
		});
})();