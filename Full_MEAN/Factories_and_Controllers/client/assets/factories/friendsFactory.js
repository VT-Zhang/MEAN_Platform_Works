app.factory("friendsFactory", ["$http", function($http){
    var factory = {};

    factory.index = function(callback){
        $http.get("/friends").then(function(returned_data){
            if(typeof(callback) == "function"){
                friends = returned_data.data;
                callback(friends);
            }
        });
    }

    factory.show = function(id, callback){
        $http.get("/friends/" + id).then(function(returned_data){
            if(typeof(callback) == "function"){
                friend = returned_data.data;
                callback(friend);
            }
        });
    }

    factory.create = function(newFriend, callback){
        console.log(newFriend);
        $http.post("/friends", newFriend)
        .then(function(returned_data){
            console.log(returned_data);
            friend = returned_data.data;
            if (typeof(callback) == "function"){
                callback(friend);
            }
        })
        .catch(function(err){
            if(err){console.log(err);}
        })
    }

    factory.update = function(id, updatedFriend, callback){
        $http.put("/friends/" + id, updatedFriend)
        .then(function(returned_data){
            friends = returned_data.data;
            if(typeof(callback) == "function"){
                callback(friends);
            }
        });
    }

    factory.delete = function(id, callback){
        $http.delete("/friends/" + id).then(function(returned_data){
            if(typeof(callback) == "function"){
                friend = returned_data.data;
                callback(friend);
            }
        })
    }
    return factory;
}])
