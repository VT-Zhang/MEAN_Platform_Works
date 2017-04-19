app.factory("boardFactory", ["$http", function($http){
    var factory = {};
//*********loginController functions************
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

//*********dashboardController functions************
    factory.topicIndex = function(callback){
        $http.get("/dashboard")
        .then(function(returned_data){
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }

    factory.createTopic = function(topic, callback){
        console.log(topic);
        $http.post("/topics", topic)
        .then(function(returned_data){
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }

//*********userController functions************
    factory.showUser = function(id, callback){
        $http.get("/users/"+id)
        .then(function(returned_data){
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }

//*********mainController functions************
    factory.mainIndex = function(id, callback){
        $http.get("/topics/"+id)
        .then(function(returned_data){
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }

    factory.createPost = function(newPost, callback){
        $http.post("/posts")
        .then(function(returned_data){
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }

//Return the factory object.

    return factory;
}]);
