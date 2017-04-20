app.controller("loginController", ["$scope", "mainFactory", "$location", "$cookies", function($scope, mainFactory, $location, $cookies){
    $scope.login = function(){
        console.log($scope.user.name);
        mainFactory.login($scope.user, function(data){
            console.log(data);
            if(data.errors){
                $scope.errors = data.errors;
                $location.url("/");
            }
            else {
                $cookies.put("user_id", data._id);
                $cookies.put("user_name", data.name);
                $location.url("/dashboard/"+data.id);
            }
        });
    }
}]);
