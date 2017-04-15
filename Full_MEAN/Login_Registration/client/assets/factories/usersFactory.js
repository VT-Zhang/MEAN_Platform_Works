app.factory("usersFactory", ["$http", function($http){
    var factory = {};

    factory.register = function(newUser, callback){
        $http.post("/register", newUser)
        .then(function(returned_data){
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            });
        });
    }

    factory.login = function(user, callback){
        $http.post("/login", user)
        .then(function(returned_data){
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            });
        });
    }

    return factory;
}])
