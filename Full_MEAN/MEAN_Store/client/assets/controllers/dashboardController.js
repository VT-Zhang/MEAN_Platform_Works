app.controller("dashboardController", ["$scope", "storesFactory", function($scope, storesFactory){
    // $scope.products = [
    //     {pname:"Nike Shoes", description:"Air Jordan XII", inventory:10,}
    // ];
    var index = function(){
        storesFactory.dashboardIndex(function(data){
            $scope.products = data.products;
            $scope.customers = data.customers;
            $scope.orders = data.orders;
        });
    }
    index();

}]);
