app.factory("mainFactory", ["$http", function($http){
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

//*********userController functions************
    factory.userIndex = function(id, callback){
        $http.get("/users/"+id)
        .then(function(returned_data){
            console.log(returned_data);
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }

//*********dashController functions************
    factory.dashIndex = function(id, callback){
        $http.get("/dashboard/"+id)
        .then(function(returned_data){
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }

    factory.createList = function(list, callback){
        console.log(list);
        $http.post("/lists", list)
        .then(function(returned_data){
            console.log(returned_data);
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }

    factory.updateList = function(id, callback){
        console.log(id);
        $http.post("/lists/"+id)
        .then(function(returned_data){
            console.log(returned_data);
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
