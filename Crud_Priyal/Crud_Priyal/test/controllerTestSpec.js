(function () {
	'use strict';
	describe('Controller Test', function () {
		var ctrl, scope, location, loginService;
		beforeEach(module('crudApp'));

		beforeEach(inject(function ($controller, $rootScope, $location, LoginService) {
			scope = $rootScope.$new();

			location = $location;
			loginService = LoginService;
			ctrl = $controller('LoginController', {
				$scope: scope,
				$location: location,
				LoginService: LoginService
			});
			$scope.username="test";
			$scope.password="test";
			$scope.login();
			expect(location.path()).toBe('/dataList');
		}));
		});
}());