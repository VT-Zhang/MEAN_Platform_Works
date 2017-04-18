app.controller("dashController", ["$scope", "boardFactory", "$location", "$cookies", function($scope, boardFactory, $location, $cookies){

    $scope.user_name = $cookies.get("user_name");

    var index = function(){
        if(!$cookies.get("user_id")){
            $location.url("/");
        };
        boardFactory.topicIndex(function(data){
            $scope.topics = data.topics;
            $scope.users = data.users;
            console.log($scope.topics);
            console.log($scope.users);
        });
    }
    index();
    $scope.newTopic = {};

    $scope.create = function(){
        $scope.newTopic._user = $cookies.get("user_id");
        console.log($scope.newTopic);
        boardFactory.createTopic($scope.newTopic, function(data){
            if(data.errors){
                console.log(data.errors);
                $scope.errors = data.errors;
            }
            index();
            $scope.newTopic = {};
        });
    }
}]);
