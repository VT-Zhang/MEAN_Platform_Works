app.controller("mainController", ["$scope", "boardFactory", "$routeParams", "$location", "$cookies", function($scope, boardFactory, $routeParams, $location, $cookies){
    $scope.user_name = $cookies.get("user_name");
    $scope.user_id = $cookies.get("user_id");

    var index = function(){
        if(!$cookies.get("user_id")){
            $location.url("/");
        };
        boardFactory.mainIndex($routeParams.id, function(data){
            console.log(data);
            $scope.topic = data.topic;
            $scope.posts = data.posts;
        });
    }
    index();

    $scope.newPost = {};

    $scope.createPost = function(){
        $scope.newPost._user = $cookies.get("user_id");
        $scope.newPost._topic = $scope.topic._id;
        console.log($scope.newPost);
        boardFactory.createPost($scope.newPost, function(data){
            if(data.errors){
                console.log(data.errors);
                $scope.errors = data.errors;
            }
            index();
            $scope.newPost = {};
        });
    }

    $scope.like = function(id){
        console.log(id);
        boardFactory.likePost(id, function(data){
            if(data.errors){
                console.log(data.errors);
                $scope.errors = data.errors;
            }
            index();
        });
    }

    $scope.dislike = function(id){
        boardFactory.dislikePost(id, function(data){
            if(data.errors){
                console.log(data.errors);
                $scope.errors = data.errors;
            }
            index();
        });
    }

    $scope.comment = {};
    $scope.createComment = function(post_id, id){
        if($scope.comment[id]){
            $scope.comment[id].username = $cookies.get("user_name");
            $scope.comment[id]._user = $cookies.get("user_id");
            $scope.comment[id]._topic = $scope.topic._id;
            $scope.comment[id]._post = post_id;
            boardFactory.createComment($scope.comment[id], function(data){
                if(data.errors){
                    console.log(data.errors);
                    $scope.errors = data.errors;
                }
            });
        }
        else{
            $scope.errors = [{message: "Comment content must be provided."}]
        }

        $scope.newPost = {};
        $scope.comment[id] = {};
        index();
    }

    $scope.logout = function(){
        $cookies.remove("user_id");
        $cookies.remove("user_name");
        $location.url("/");
    }
}]);
