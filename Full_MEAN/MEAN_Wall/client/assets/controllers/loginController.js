app.controller("loginController", ["$scope", "wallsFactory", "$location", "$cookies", function($scope, wallsFactory, $location, $cookies){
    $scope.login = function(){
        wallsFactory.login($scope.user, function(data){
            if(data.errors){
                $scope.errors = data.errors;
                $location.url("/");
            }
            else {
                $cookies.put("user_id", data._id);
                $cookies.put("user_name", data.username);
                $location.url("/wall");
            }
        })
    }
}])
