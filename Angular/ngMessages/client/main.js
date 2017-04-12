var app = angular.module("app", ["ngRoute", "ngMessages"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/players",{
        templateUrl:"partials/players.html"
    })
    .when("/teams",{
        templateUrl:"partials/teams.html"
    })
    .when("/associations",{
        templateUrl:"partials/associations.html"
    })
    .otherwise({
        redirectTo:"/players"
    });
})

app.factory("playerFactory", function(){
    var factory = {};
    var players = [
        {name: "Michael Jordan", team:"Chicago Bulls"},
        {name: "Stephen Curry", team:"Golden States Warriors"},
        {name: "Vince Carter", team:"Toronto Raptors"}
    ];

    factory.index = function(callback){
        callback(players);
    }
    factory.create = function(player){
        player.team = "";
        players.push(player);
    }
    factory.delete = function(index){
        players.splice(index, 1);
    }
    factory.addToTeam = function(data){
        players[data.playerIdx].team = data.team;
    }
    factory.removeFromTeam = function($index){
        players[$index].team = "";
    }
    return factory;
})

app.controller("playerController", function($scope, playerFactory){
    $scope.players = [];

    playerFactory.index(function(players){
        $scope.players = players;
    })

    $scope.create = function(){
        playerFactory.create($scope.player);
        $scope.player = {};
    }
    $scope.delete = function($index){
        playerFactory.delete($index);
    }
})

app.factory("teamFactory", function(){
    var factory = {};
    var teams = [
        {name: "Chicago Bulls"},
        {name: "Washington Wizzards"},
        {name: "LA Lakers"}
    ];

    factory.index = function(callback){
        callback(teams);
    }
    factory.create = function(team){
        teams.push(team);
    }
    factory.delete = function(index){
        teams.splice(index, 1);
    }
    return factory;
})

app.controller("teamController", function($scope, teamFactory){
    $scope.teams = [];
    teamFactory.index(function(teams){
        $scope.teams = teams;
    })
    $scope.create = function(){
        teamFactory.create($scope.team);
        $scope.team = {};
    }
    $scope.delete = function($index){
        teamFactory.delete($index);
    }
})

app.controller("assController", function($scope, playerFactory, teamFactory){
    $scope.players = [];
    $scope.teams = [];

    playerFactory.index(function(players){
        $scope.players = players;
    })

    teamFactory.index(function(teams){
        $scope.teams = teams;
    })

    $scope.addToTeam = function(){
        playerFactory.addToTeam($scope.ass);
    }

    $scope.removeFromTeam = function($index){
        playerFactory.removeFromTeam($index);
    }

})
