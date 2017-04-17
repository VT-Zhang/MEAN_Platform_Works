app.factory("wallsFactory", ["$http", function($http){
    var factory = {};

    factory.login = function(user, callback){
        $http.post("/users", user)
        .then(function(returned_data){
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }

    factory.index = function(callback){
        $http.get("/messages")
        .then(function(returned_data){
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }

    factory.createMessage = function(message, id, callback){
        console.log(message);
        $http.post("/"+ id + "/messages", message)
        .then(function(returned_data){
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }

    factory.createComment = function(comment, user_id, message_id, callback){
        $http.post("/"+user_id+"/messages/"+message_id+"/comments", comment)
        .then(function(returned_data){
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }

    return factory;
}]);
