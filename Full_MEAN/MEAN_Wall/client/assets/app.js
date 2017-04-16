var app = angular.module("app", ["ngRoute", "ngCookies"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl:"partials/new.html"
    })
    .when("/wall", {
        templateUrl:"partials/wall.html"
    })
    otherwise({
        templateUrl:"partials/new.html"
    });
});
