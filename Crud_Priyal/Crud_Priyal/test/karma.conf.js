module.exports = function (config) {
	'use strict';

	config.set({
		basePath: '../../',
		frameworks: ['jasmine'],
		files: [
			'Crud_Priyal/node_modules/angular/angular.js',
			'Crud_Priyal/node_modules/angular-mocks/angular-mocks.js',
			'Crud_Priyal/node_modules/angular-route/angular-route.js',
			'Crud_Priyal/node_modules/angular-cookies/angular-cookies.js',			
			'Crud_Priyal/src/app/js/**/*.js',
			'Crud_Priyal/test/controllerTestSpec.js'
		],
		port: 8080,
		autoWatch: true,
		singleRun: false,
		browsers: ['Chrome']
	});
};