app.controller("userController", ["$scope", "mainFactory", "$routeParams", "$location", "$cookies", function($scope, mainFactory, $routeParams, $location, $cookies){

    var index = function(){
        if(!$cookies.get("user_id")){
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

}]);
