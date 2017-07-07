function time(hour,minute,period) {
// var hour = 7;
// var minute = 15;
// var period = "pm";
         if (minute > 30 && period === "am") {
            console.log("it's almost", hour+1, "in the morning");
        }
        else if (minute > 30 && period === "pm") {
            console.log("it's almost", hour+1, "in the evening");
        }
        else if (minute <= 30 && period === "am") {
            console.log("it's just after", hour, "in the morning")
        }
        else if (minute <= 30 && period === "pm") {
            console.log("it's just after", hour, "in the evening")
        }
}
time(7,15,"pm");
