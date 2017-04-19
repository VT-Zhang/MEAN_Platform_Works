app.controller("mainController", ["$scope", "boardFactory", "$routeParams", "$location", "$cookies", function($scope, boardFactory, $routeParams, $location, $cookies){
    $scope.user_name = $cookies.get("user_name");
    $scope.user_id = $cookies.get("user_id");

    var index = function(){
        if(!$cookies.get("user_id")){
            $location.url("/");
        };
        boardFactory.mainIndex($routeParams.id, function(data){
            $scope.topic = data.topic;
            $scope.posts = data.posts;
            $scope.comments = data.comments;
        });
    }
    index();

    $scope.newPost = {};

    $scope.createPost = function(){
        $scope.newPost._user = $cookies.get("user_id");
        $scope.newPost._topic = $scope.topic._id;
        console.log($scope.newPost);
        boardFactory.createMessage($scope.newPost, function(data){
            if(data.errors){
                console.log(data.errors);
                $scope.errors = data.errors;
            }
            index();
            $scope.newPost = {};
        });
    }

    // $scope.comment = {};
    // $scope.createComment = function(message_id, index){
    //     wallsFactory.createComment($scope.comment[index], $cookies.get("user_id"), message_id, function(data){
    //         if(data.errors){
    //             console.log(data.errors);
    //         }
    //         wallsFactory.index(function(data){
    //             $scope.messages = data.messages;
    //         });
    //         $scope.message = {};
    //         $scope.comment[index] = {};
    //     });
    // }

    $scope.logout = function(){
        $cookies.remove("user_id");
        $cookies.remove("user_name");
        $location.url("/");
    }
}]);
