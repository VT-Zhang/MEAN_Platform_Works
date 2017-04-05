function personConstructor(param){
    return  {
        name: param,
        distance_traveled: 0,
        say_name: function(){
            console.log(name);
        },
        say_somthing: function(sentence){
            console.log(param.name+" says '"+sentence+"'");
        },
        walk: function(){
            param.distance_traveled += 3;
            console.log(param.name+" is walking.");
            return param;
        },
        run: function(){
            param.distance_traveled += 10;
            console.log(param.name+" is running.");
            return param;
        },
        crawl: function(){
            param.distance_traveled += 1;
            console.log(param.name+" is crawling.");
            return param;
        }
    }
}

var Jay = personConstructor("Jay");
Jay.say_name;
