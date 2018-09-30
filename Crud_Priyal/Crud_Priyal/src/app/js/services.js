app.factory('LoginService', function () {
    var service = {};

    service.login = function (username, password, callback) {
        var response = { success: username === 'test' && password === 'test' };
        if (!response.success) {
            response.message = 'Username or password is incorrect';
        }
        callback(response);
    }
    return service;
});

app.service('GetDataService', ['$http', function ($http) {
        this.get = function (url) {
            var promise = $http.get(url)
                .then(function (data, status) {
                    return data;
                },function (error) {
                        return { "status": false };
                });
            return promise;
        }
    
}]);