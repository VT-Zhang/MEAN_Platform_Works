app.factory("friendsFactory", ["$http", function($http){
    var factory = {}
    var friends = [];

    factory.index = function(){
        $http.get("/friends").then(function(returned_data){
            friends = returned_data.data;
            callback(friends);
        });
    }

    factory.show = function(id, callback){
        $http.get("/friends/" + id).then(function(returned_data){
            friend = returned_data.data;
            callback(friend);
        })
    }

    factory.create = function(friend, callback){
        $http.post("/friends", friend).then(function(returned_data){
            console.log(returned_data);
            friend = returned_data.data;
            console.log(friend);
            if (typeof(callback) == "function"){
                callback(friend);
            }
        });
    }

    factory.update = function(friend, callback){
        $http.put("/friends/" + friend._id, {first_name: friend.first_name, last_name: friend.last_name, dob: friend.dob})
        .then(function(returned_data){
            friends = returned_data.data;
            if(typeof(callback) == "function"){
                callback(friends);
            }
        });
    }

    factory.delete = function(id, callback){
        $http.delete("/friends/" + id).then(function(returned_data){
            friend = returned_data.data;
            callback(friend);
        })
    }

    factory.getFriend = function(friendId, callback){
        $http.get("/friends"+friendId).then(function(returned_data){
            friend = returned_data.data;
            callback(friend);
        })
    }

    factory.getFriends = function(callback){
        callback(friends);
    }

    factory.addFriend = function(friend){
        friends.push(friend);
    }

    return factory;
}])
