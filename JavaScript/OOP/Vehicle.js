function VehicleConstructor(name, numWheel, numPassenger, speed){
    var distance_traveled = 0;
    var updateDistanceTravelled = function(){
        distance_traveled += speed;
        console.log(distance_traveled);
    }
    this.makeNoise = function(){
        console.log("beep, beep..");
    }
    this.showPassenger = function(){
        console.log("This vehicle has total "+numPassenger+" passegners.");
    }
    this.pickUpPassenger = function(num){
        numPassenger += num;
        return this;
    }
    this.move = function(){
        updateDistanceTravelled();
        this.makeNoise();
    }
    this.checkMiles = function(){
        console.log(distance_traveled);
    }
}

var Car = new VehicleConstructor("car",4,4,30);
Car.move();
Car.checkMiles();

var Bike = new VehicleConstructor("bike", 2, 1);
Bike.makeNoise()
Bike.makeNoise = function(){
    console.log("ring ring..")
}
Bike.makeNoise()



var Sedan = new VehicleConstructor("sedan",4, 4);
Sedan.makeNoise()
Sedan.makeNoise = function(){
    console.log("honk, honk..");
}
Sedan.makeNoise()

var Bus = new VehicleConstructor("bus", 10, 10);
Bus.pickUpPassenger(5)
Bus.showPassenger()
