function counting(x,y) {
    var sum = 0;
    for (var i = x; i <= y; i++) {
        sum = sum + i

    }
    console.log(sum);
}
counting(1,10)

function min(arr) {
var min = 0;
for (var i = 0; i < arr.length; i++){
    if (arr[i] < min) {
        min = arr[i]
    }
}
console.log(min);
}
min([1, 5, 90, 25, -3, 0]);

function avg(arr) {
    sumed = 0;
    for (var i = 0; i < arr.length; i++){
        sumed = sumed + arr[i]
    }
    console.log(sumed/arr.length);
}
avg([1, 5, 90, 25, -3, 0]);

var adding = function(x,y) {
    var sum = 0;
    for (var i = x; i <= y; i++) {
        sum = sum + i

    }
    console.log(sum);
}

adding(1,10);

var smallest = function(arr) {
var min = 0;
for (var i = 0; i < arr.length; i++){
    if (arr[i] < min) {
        min = arr[i]
    }
}
console.log(min);
}
smallest([1, 5, 90, 25, -3, 0]);

var average = function(arr) {
    sumed = 0;
    for (var i = 0; i < arr.length; i++){
        sumed = sumed + arr[i]
    }
    console.log(sumed/arr.length);
}
average([1, 5, 90, 25, -3, 0]);



var object = {
    add: function(x,y) {
        var sum = 0;
        for (var i = x; i <= y; i++) {
            sum = sum + i

        }
        console.log(sum);
    },
    small: function(arr) {
    var min = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    console.log(min);
    },
    av: function(arr) {
        sumed = 0;
        for (var i = 0; i < arr.length; i++){
            sumed = sumed + arr[i]
        }
        console.log(sumed/arr.length);
    }
}

object.add(1,10);
object.small([1, 5, 90, 25, -3, 0]);
object.av([1, 5, 90, 25, -3, 0]);

var person = {
    name: "Matthew",
    distance_traveled: 0,
    say_name: function() {
        alert(person.name);
        return person;
    },
    say_something: function(arg) {
        if(arg == "I am cool"){
            console.log(`${person.name} says: ${arg}`);
        }
        return person;
    },
    walk: function() {
        alert(`${person.name} is walking`);
        person.distance_traveled += 3;
        return person;
    },
    run: function() {
        alert(`${person.name} is running`);
        person.distance_traveled += 10;
        return person;
    },
    crawl: function() {
        alert(`${person.name} is crawling`);
        person.distance_traveled += 1;
        return person;
    },
}
