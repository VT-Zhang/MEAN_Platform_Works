var app = angular.module("app", ["ngRoute", "ngCookies"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl:"partials/login.html"
    })
    .when("/dashboard", {
        templateUrl:"partials/dashboard.html"
    })
    .when("/topics/:id", {
        templateUrl:"partials/main.html"
    })
    .when("/users/:id", {
        templateUrl:"partials/user.html"
    })
    .otherwise({
        templateUrl:"partials/login.html"
    });
});
