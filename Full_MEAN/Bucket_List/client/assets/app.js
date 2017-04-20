var app = angular.module("app", ["ngRoute", "ngCookies"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl:"partials/login.html"
    })
    .when("/dashboard/:id", {
        templateUrl:"partials/dashboard.ejs"
    })
    .when("/users/:id", {
        templateUrl:"partials/users.ejs"
    })
    .otherwise({
        templateUrl:"partials/login.html"
    });
});
