function personConstructor(name) {
    var person = {
        name: name,
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
    return person;
}

personConstructor('Matt');

function ninjaConstructor(name, cohort) {
    var ninja = {
    name: name,
    cohort: cohort,
    belts: ['yellow','red','black'],
    belt_level: 'yellow',
    level: 0,
    levelUp: function() {
        if(ninja.level < 2){
            ninja.level++;
            ninja.belt_level = ninja.belts[ninja.level]
            return ninja;
        }
    }
    }
    return ninja
}
console.log(ninjaConstructor("Matt", "February").levelUp().belt_level);
