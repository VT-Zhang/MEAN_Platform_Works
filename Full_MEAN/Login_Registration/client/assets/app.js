var app = angular.module("app", ["ngRoute", "ngCookies"]);

app.factory("usersFactory", ["$http", function($http){
    var usersFactory = function(){
        this.login = function(data, callback, errback){
            $http.post("/login", data).then(callback, errback);
        }
        this.index = function(callback){
            $http.get("/users").then(callback);
        }
        this.register = function(data, callback, errback){
            $http.post("/register", data).then(callback, errback);
        }
    }
    return new usersFactoryl
}]);

app.controllers("loginController", ["$scope", "usersFactory", fucntion($scope, usersFactory){

    $scope.register = function(){
        uF.register($scope.registration, function(data){
            if(data.data.errors){
                $scope.errors = data.data.errors;
            }
            else {
                $scope.user = data.data;
            }
        }, function(err){
            console.log("I am an error", err);
        });
    }

    $scope.login = function(){
        usersFactory.login(
            $scope.userLogin, function(data){
                if(data.data.errors){
                    $scope.errors = data.data.errors;
                }
                else {
                    $scope.user = data.data;
                },
                function(err){
                    console.log("I am an error", err);
                });
            }
        )
    }
}])
