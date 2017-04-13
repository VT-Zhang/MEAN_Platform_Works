var app = angular.module("app");
app.controller("editController",
    ["$scope", "routeParams", "friendsFactory",
    function($scope, $routeParams, friendsFactory){
    friend = {};

    var findFriend = function(){
        friendsFactory.getFriend($routeParams._id, function(factoryData){
            friend = factoryData;
        });
    }
    findFriend();

    $scope.update = function(){
        friendsFactory.update($scope.friend, function(returned_data){
            console.log(returned_data);
        });
    }
}])
