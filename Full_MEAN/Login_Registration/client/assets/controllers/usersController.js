app.controller("usersController", ["$scope", "usersFactory", "$location", "$cookies",
function($scope, usersFactory, $location, $cookies){
    $scope.messages = [];
    $scope.flag = false;

    $scope.register = function(){
        usersFactory.register($scope.newUser, function(data){
            if(data.errors){
                if(typeof(data.errors)=="object"){
                    angular.forEach(data.errors, function(v, k){
                        $scope.messages.push(data.errors[k].message);
                    });
                }
                else {
                    $scope.messages.push(data.errors);
                }
                $scope.flag = true;
                $location.url("/");
            }
            else {
                $scope.flag = false;
                $cookies.put("user_id", data._id);
                $cookies.put("user_name", data.username);
                $scope.username = $cookies.get("user_name");
                $location.url("/success");
            }
        });
    }

    $scope.login = function(){
        usersFactory.login($scope.user, function(data){
            if(data.errors){
                $scope.message = data.errors;
                $scope.flag = true;
                $location.url("/login");
            }
            else {
                $scope.flag = false;
                $cookies.put("user_id", data._id);
                $cookies.put("user_name", data.username);
                $scope.username = $cookies.get("user_name");
                $location.url("/success");
            }
        });
    }



    $scope.logout = function(){
        var cookies = $cookies.getAll();
        angular.forEach(cookies, function(v, k){
            $cookies.remove(k);
        });
        $scope.messages.push("You have successfully logged out.");
        $location.url("/");
    }
}]);
