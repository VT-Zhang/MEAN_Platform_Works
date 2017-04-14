var app = angular.module("app");
app.controller("showController",
    ["$scope", "$routeParams", "friendsFactory",
    function($scope, $routeParams, friendsFactory){
        friends = {};
        (function(id){
            friendsFactory.show(id, function(data){
                $scope.friend = data;
                console.log($scope.friend);
            })
        }($routeParams.id));

    }])
