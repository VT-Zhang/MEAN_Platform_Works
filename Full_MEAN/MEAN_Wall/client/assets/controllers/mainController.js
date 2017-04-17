app.controller("mainController", ["$scope", "wallsFactory", "$location", "$cookies", function($scope, wallsFactory, $location, $cookies){
    $scope.user_name = $cookies.get("user_name");
    var index = function(){
        if(!$cookies.get("user_id")){
            $location.url("/");
        };
        wallsFactory.index(function(data){
            $scope.messages = data.messages;
        });
    }
    index();
    $scope.message = {};

    $scope.createMessage = function(){
        console.log($scope.message);
        wallsFactory.createMessage($scope.message, $cookies.get("user_id"), function(data){
            if(data.errors){
                console.log(data.errors);
            }
            index();
            $scope.message = {};
        });
    }

    $scope.comment = {};
    $scope.createComment = function(message_id, index){
        wallsFactory.createComment($scope.comment[index], $cookies.get("user_id"), message_id, function(data){
            if(data.errors){
                console.log(data.errors);
            }
            wallsFactory.index(function(data){
                $scope.messages = data.messages;
            });
            $scope.message = {};
            $scope.comment[index] = {};
        });
    }

    $scope.logout = function(){
        $cookies.remove("user_id");
        $cookies.remove("user_name");
        $location.url("/");
    }
}]);
