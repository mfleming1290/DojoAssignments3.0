function VehicleConstructor(name,numOfWheels,passangers,speed) {
        if (!(this instanceof VehicleConstructor)){
            return new VehicleConstructor(name,wheels,passengerNumber, speed);
        }
        // private variables
        // private methods

        // vehicle properties
        this.name = name;
        this.numOfWheels = numOfWheels;
        this.passangers = passangers;
        this.speed = speed;
        this.distance_traveled = 0;
        this.vin = vin();
        //vehicle methods
        this.updateDistanceTravelled = function() {
            this.distance_traveled += speed
        }
        function vin() {
            var vin = "";
            for (var i = 0; i < 18; i++) {
                vin += Math.floor(Math.random()*10 + 1)
            }
            return vin
        }

}


VehicleConstructor.prototype.makeNoise = function() {
    console.log("Vroom Vroom");
    return this;
}

VehicleConstructor.prototype.move = function() {
    this.updateDistanceTravelled();
    this.makeNoise();
    return this;
}

VehicleConstructor.prototype.checkMiles = function() {
    console.log(this.distance_traveled);
    return this;
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
    return this;
}
bus.pickup(10).pickup(10).pickup(10);
console.log(bus.passangers);
bus.move().move().checkMiles();
console.log(bus.vin);
