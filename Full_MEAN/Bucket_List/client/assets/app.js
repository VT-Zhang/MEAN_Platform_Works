var app = angular.module("app", ["ngRoute", "ngCookies"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl:"partials/login.html"
    })
    .when("/dashboard/:id", {
        templateUrl:"partials/dashboard.html"
    })
    .when("/users/:id", {
        templateUrl:"partials/users.html"
    })
    .otherwise({
        templateUrl:"partials/login.html"
    });
});
