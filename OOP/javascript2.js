function sumUp(num1, num2){
    var sum = 0;
    for (let i=num1; i<num2+1; i++){
        sum += i;
    }
    console.log(sum);
    return sum;
}
sumUp(1,10);

function findMin(arr){
    var min = arr[0];
    for (let i=0; i<arr.length; i++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
    console.log(min);
}
findMin([1,2,3,-4,0]);


function findAvg(arr){
    var sum = 0;
    for (let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    var avg = sum/arr.length;
    console.log(avg);
}
findAvg([1,2,3,-4,0]);

var myObject = {
    function sumUp(num1, num2){
        var sum = 0;
        for (let i=num1; i<num2+1; i++){
            sum += i;
        }
        console.log(sum);
    },
    function findMin(arr){
        var min = arr[0];
        for (let i=0; i<arr.length; i++){
            if(arr[i]<min){
                min = arr[i];
            }
        }
        console.log(min);
    },
    function findAvg(arr){
        var sum = 0;
        for (let i=0; i<arr.length; i++){
            sum += arr[i];
        }
        var avg = sum/arr.length;
        console.log(avg);
    }
}

myObject.findAvg([1,2,3,-4,0]);

var person = {
    name: "Jason",
    distance_traveled: 0,
    say_name: function(){
        console.log(person.name);
    },
    say_somthing: function(sentence){
        console.log(person.name+" says '"+sentence+"'");
    },
    walk: function(){
        person.distance_traveled += 3;
        console.log(person.name+" is walking.");
        return person;
    },
    run: function(){
        person.distance_traveled += 10;
        console.log(person.name+" is running.");
        return person;
    },
    crawl: function(){
        person.distance_traveled += 1;
        console.log(person.name+" is crawling.");
        return person;
    }
}
person.say_name();
person.say_somthing("I love JS.");
person.walk().run().crawl();
console.log(person.distance_traveled);
