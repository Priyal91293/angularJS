var app = angular.module('crudApp', ['ngRoute', 'ngCookies' ]);
app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', {
            controller: 'LoginController',
            templateUrl: 'src/app/view/login.html',
        })
        .when('/dataList', {
            controller: 'DataController',
            templateUrl: 'src/app/view/data.html',
        })
     
        .otherwise({ redirectTo: '/' });
}]);

