var app = angular.module("app");
app.controller("editController",
    ["$scope", "$routeParams", "friendsFactory", "$location",
    function($scope, $routeParams, friendsFactory, $location){

    friend = {};

    (function(id){
        friendsFactory.show(id, function(data){
            $scope.friend = data;
        })
    }($routeParams.id));

    $scope.update = function(id){
        friendsFactory.update(id, $scope.updatedFriend);
        friendsFactory.index(function(factoryData){
            $scope.UpdatedFriends = factoryData;
        })
        $location.url("/");
    }
}])
