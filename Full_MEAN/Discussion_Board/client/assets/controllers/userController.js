app.controller("userController", ["$scope", "boardFactory", "$routeParams", "$location", "$cookies", function($scope, boardFactory, $routeParams, $location, $cookies){
    var show = function(){
        boardFactory.showUser($routeParams.id, function(data){
            $scope.user = data;
        });
    }
    show();

    $scope.logout = function(){
        $cookies.remove("user_id");
        $cookies.remove("user_name");
        $location.url("/");
    }
}]);
