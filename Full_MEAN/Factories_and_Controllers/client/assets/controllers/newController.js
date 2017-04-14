var app = angular.module("app");
app.controller("newController", ["$scope", "friendsFactory", "$location", function($scope, friendsFactory, $location){

    $scope.create = function(){
        friendsFactory.create($scope.newfriend, function(factoryData){
            console.log(factoryData);
            $scope.friends = factoryData;
        })
        $location.url("/");
    }
}])
