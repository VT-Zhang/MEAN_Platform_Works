function VehicleConstructor(name, wheels, numPassenger, speed){
    var chars = "01234567890ABCDEFGHIJKLMNOPQRSTUVWZYZ";
    this.distanceTraveled = 0;
    this.speed = speed;
    this.name = name;
    this.wheels = wheels;
    this.numPassenger = numPassenger;
    this.vin = genVin();

    VehicleConstructor.prototype.makeNoise = function(){
        console.log("beep, beep..");
        return this;
    }

    VehicleConstructor.prototype.showPassenger = function(){
        console.log("This vehicle has total "+numPassenger+" passegners.");
        return this;
    }

    VehicleConstructor.prototype.pickUpPassenger = function(){
        numPassenger += num;
        return this;
    }

    VehicleConstructor.prototype.move = function(){
        updateDistanceTravelled();
        this.makeNoise();
    }

    VehicleConstructor.prototype.checkMiles = function(){
        console.log(this.distanceTraveled);
        return this;

    }

    function genVin(){
        var vin = "";
        for (var i = 0; i < 17; i++){
            vin += chars[Math.floor(Math.random()*35)];
        }
        return vin;
    }
}

var Car = new VehicleConstructor("car",4,4,30);
console.log(Car.vin);
Car.genVin();
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
