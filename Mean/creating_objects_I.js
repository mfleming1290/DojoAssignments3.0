function VehicleConstructor(name,numOfWheels,passangers) {
    var vehicle = {};
    // vehicle properties
    vehicle.name = name;
    vehicle.numOfWheels = numOfWheels;
    vehicle.passangers = passangers;
    //vehicle methods
    vehicle.makeNoise = function() {
        console.log("Vroom Vroom");
    }
    return vehicle;
}

var bike = VehicleConstructor("bike", 2, 1);

bike.makeNoise = function() {
    console.log("ring ring!");
}
bike.makeNoise();

var sedan = VehicleConstructor("Sedan", 4, 5);
sedan.makeNoise = function() {
    console.log("honk honk!");
}
sedan.makeNoise();

var bus = VehicleConstructor("Bus", 2, 30);
bus.pickup = function(people) {
    bus.passangers += people;
    return bus.passangers;
}
bus.pickup(10);
bus.pickup(10);
console.log(bus.passangers);
