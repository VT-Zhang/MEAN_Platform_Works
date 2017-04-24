app.controller("dashController", ["$scope", "mainFactory", "$location", "$cookies", function($scope, mainFactory, $location, $cookies){

    $scope.user_name = $cookies.get("user_name");
    $scope.newList = {};

    var index = function(){
        if(!$cookies.get("user_id")){
            $cookies.put("message", "Dude, don't even think about sneak in other urls without log in..");
            $location.url("/");
        };
        mainFactory.dashIndex($cookies.get("user_id"), function(data){
            $scope.users = data.users;
            $scope.current_user = data.current_user;
        });
    }
    index();

    $scope.create = function(){
        $scope.newList._user = $cookies.get("user_id");
        console.log($scope.newList)
        mainFactory.createList($scope.newList, function(data){
            if(data.errors){
                console.log(data.errors);
                $scope.errors = data.errors;
            }
            else{
                $scope.errors = [];
            }
            index();
            $scope.newList = {};
        });
    }

    $scope.check = function(id){
        mainFactory.updateList(id, function(data){
            if(data.errors){
                console.log(data.errors);
                $scope.errors = data.errors;
            }
            else{
                $scope.errors = [];
            }
            index();
            $scope.newList = {};
        })
    }

    $scope.logout = function(){
        $cookies.remove("user_id");
        $cookies.remove("user_name");
        $cookies.remove("message");
        $location.url("/");
    }
}]);
