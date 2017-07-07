class VehicleConstructor {
    constructor(name,numOfWheels,passangers,speed) {
        if (!(this instanceof VehicleConstructor)){
            return new VehicleConstructor(name,wheels,passengerNumber, speed);
        }
        // private variables
        var distance_traveled = 0;
        // private methods
        var updateDistanceTravelled = function() {
            distance_traveled += speed
        }
        // vehicle properties
        this.name = name;
        this.numOfWheels = numOfWheels;
        this.passangers = passangers;
        this.speed = speed;
        //vehicle methods
        this.makeNoise = function() {
            console.log("Vroom Vroom");
        }
        this.move = function() {
            updateDistanceTravelled();
            this.makeNoise();
        }
        this.checkMiles = function() {
            console.log(distance_traveled);
        }
    }
}
var bike = new VehicleConstructor("bike", 2, 1, 10);

bike.makeNoise = function() {
    console.log("ring ring!");
}
bike.makeNoise();

var sedan = new VehicleConstructor("Sedan", 4, 5,80);
sedan.makeNoise = function() {
    console.log("honk honk!");
}
sedan.makeNoise();

var bus = new VehicleConstructor("Bus", 2, 30, 50);
bus.pickup = function(people) {
    bus.passangers += people;
    return bus.passangers;
}
bus.pickup(10);
bus.pickup(10);
console.log(bus.passangers);
bus.move();
bus.move();
bus.checkMiles();
