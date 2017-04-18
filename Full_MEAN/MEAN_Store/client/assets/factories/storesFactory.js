app.factory("storesFactory", ["$http", function($http){
    var factory = {};

//*********for dashboardController functions***********
    factory.dashboardIndex = function(callback){
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

//*********for productsController functions***********
    factory.productsIndex = function(callback){
        $http.get("/products")
        .then(function(returned_data){
            if(typeof(callback)=="function"){
                callback(returned_data.data);
                console.log(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }
    factory.createProduct = function(product, callback){
        console.log(product);
        $http.post("/products", product)
        .then(function(returned_data){
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }

//*********for ordersController functions***********
    factory.ordersIndex = function(callback){
        $http.get("/orders")
        .then(function(returned_data){
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }
    factory.createOrder = function(newOrder, callback){
        $http.post("/orders", newOrder)
        .then(function(returned_data){
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }


//*********for customersController functions***********
    factory.customersIndex = function(callback){
        $http.get("/customers")
        .then(function(returned_data){
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }
    factory.createCustomer = function(customer, callback){
        console.log(customer);
        $http.post("/customers", customer)
        .then(function(returned_data){
            console.log(returned_data.data);
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }
    factory.deleteCustomer = function(id, callback){
        console.log(id);
        $http.delete("/customers/"+id)
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
