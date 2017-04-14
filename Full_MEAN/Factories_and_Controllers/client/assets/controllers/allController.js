

app.controller("allController", ["$scope", "friendsFactory", "$location", function($scope, friendsFactory, $location){
    $scope.friends = []
    var index = function(){
        friendsFactory.index(function(data){
            console.log(data);
            $scope.friends = data;
        })
    }
    index();

    $scope.create = function(){
        $location.url("/new");
    }

    $scope.show = function(id){
        $location.url("/show/"+id);
    }

    $scope.delete = function(id){
        friendsFactory.delete(id, function(factoryData){
            $scope.friends = factoryData;
        })
        $location.url("/");
    }

    $scope.edit = function(id){
        $location.url("/edit/"+id);
    }
}])
