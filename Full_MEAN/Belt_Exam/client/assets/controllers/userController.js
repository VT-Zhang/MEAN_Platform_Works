app.controller("userController", ["$scope", "mainFactory", "$routeParams", "$location", "$cookies", function($scope, mainFactory, $routeParams, $location, $cookies){

    var index = function(){
        if(!$cookies.get("user_id")){
            $cookies.put("message", "Dude, don't even think about sneak in other urls without log in..");
            $location.url("/");
        };
        mainFactory.userIndex($routeParams.id, function(data){
            $scope.main_dones = data.main_dones;
            $scope.tag_dones = data.tag_dones;
            $scope.main_pendings = data.main_pendings;
            $scope.tag_pendings = data.tag_pendings;
            $scope.user = data.user;
        });

        $scope.user_id = $cookies.get("user_id");
    }
    index();

    $scope.logout = function(){
        $cookies.remove("user_id");
        $cookies.remove("user_name");
        $cookies.remove("message");
        $location.url("/");
    }
}]);
