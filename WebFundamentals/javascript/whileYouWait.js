var daysUntillMyBirthday = 60;
    for (var i = 60; i >= 0; i--) {
        if (i >= 30) {
            console.log(i, "days until my birthday. Such a long time... :(");
        }
        else if (i < 30 && i >= 5) {
            console.log(i, "days until my birthday. getting closer!");
        }
        else if (i < 5 && i !== 0) {
            console.log(i, "DAYS UNTILL MY BIRTHDAY!!!!");
        }
        else if (i === 0) {
            console.log("HAPPY BIRTHDAY!!!!!!@$%@#%");
        }
    }
