'use strict';
app.controller('LoginController',
    ['$scope','$location','LoginService',
        function ($scope, $location, LoginService) {
            // reset login status

            $scope.login = function () {
                LoginService.login($scope.username, $scope.password, function (response) {
                    if (response.success) {                        
                        $location.path('/dataList');
                        
                    } else {
                        $scope.error = response.message;
                        $scope.dataLoading = false;
                    }
                });

            }
        }]);
app.controller('DataController', ['$scope', '$cookieStore', 'GetDataService', function ($scope, $cookieStore, GetDataService) {
    GetEmployeeList();
    $scope.isAdd = false;
    $scope.isEdit = false;
    $scope.Employees = [];
    function GetEmployeeList() {
        if ($cookieStore.get('tasks') !== undefined) {
            $scope.tasks = $cookieStore.get('tasks');
        } else {

            GetDataService.get('src/app/jsonData/task.json')
                .then(function (response) {
                    $scope.tasks = response.data;
                    setcookies();
                });
       
    }
    }
    
    $scope.add = function () {
        $scope.isAdd = true;
        $scope.Action = "Add";
    }
    $scope.saveTask = function (newTask) {
        if (!$scope.isEdit) {
            console.log(newTask);
            if (newTask === null || newTask === angular.undefined) {
                alert('please reslove errors')
                return;
            }                
            $scope.tasks.tasks.push(newTask);
            
            $scope.newTask = [];
        } else {
            $scope.isEdit = false;
            $scope.newTask = [];
        }
        setcookies();
        $scope.isAdd = false;
    };
    // Deleting record.  
    $scope.deleteTasks = function () {
        var ans = confirm('Are you sure to delete it?');
        if (ans) {
            var oldList = $scope.tasks.tasks;
            $scope.tasks.tasks = [];
            angular.forEach(oldList, function (task) {
                if (!task.done) $scope.tasks.tasks.push(task);
            });
            setcookies();
        };

        }
           
    // Updateing Records  
    $scope.updateTask = function (task) {
        $scope.newTask = task;
        $scope.isAdd = true;
        $scope.isEdit = true;
    }

    function setcookies() {
        //$cookies.firstuser=$scope.username;
        $cookieStore.put('tasks', $scope.tasks);
    }
}])
