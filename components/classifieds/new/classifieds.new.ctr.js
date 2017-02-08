(function() {

	"use strict";

	angular
		.module('ngClassifieds')
		.controller('newClassifiedsCtrl', function($state, $scope, $mdSidenav, $timeout, $mdDialog, classifiedsFactory) {

			var vm = this;
			vm.closeSidebar = closeSidebar;
			vm.saveClassified = saveClassified;

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

			function saveClassified(classified) {
				if(classified)
				{
					classified.contact = {
						name: 'Oscar Hedblad',
						phone: '(407) 555 5555',
						email: 'oscarhedblad@gmail.com'
					}
					$scope.$emit('newClassified', classified);
					vm.sidenavOpen = false;
				}
			}
			
		});

})();