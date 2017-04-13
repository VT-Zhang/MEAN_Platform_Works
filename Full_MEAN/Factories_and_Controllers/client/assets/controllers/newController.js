var app = angular.module("app");
app.controller("newController", ["$scope", "friendsFactory", function($scope, friendsFactory){
    $scope.friends = [];

    $scope.index = function(){
        friendsFactory.index(function(returned_data){
            $scope.friends = returned_data;
        })
    }
    $scope.index();

    $scope.create = function(){
        friendsFactory.create($scope.friend, function(newFriend){
            $scope.createdFriend = newFriend;
        })
    }
}])
