app.controller("mainController", ["$scope", "wallsFactory", "$location", "$cookies", function($scope, wallsFactory, $location, $cookies){
    var index = function(){
        if(!cookies.get("user_id")){
            $location.url("/");
        };
        wallsFactory.index(function(data){
            $scope.messages = data.messages;
        });
    }
    index();
    $scope.message = {};

    $scope.createMessage = function(){
        wallsFactory.createMessage($scope.message, $cookies.get("user_id"), function(data){
            if(data.errors){
                console.log(data.errors);
            }
            index();
            $scope.message = {};
        });
    }

    $scope.newComment = {};
    $scope.createComment = function(message_id, i){
        wallsFactory.createComment($scope.newComment[i], $cookies.get("user_id"), message_id, function(data){
            if(data.errors){
                console.log(data.errors);
            }
            index();
            $scope.newComment[i] = {};
        });
    }

    $scope.logout = function(){
        $cookies.remove("user_id");
        $location.url("/");
    }
}]);
