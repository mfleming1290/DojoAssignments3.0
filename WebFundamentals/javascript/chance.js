function chance(quarter) {
    var rnd = Math.floor(Math.random() * 100);
        for (var quarter = quarter; quarter > 0; quarter--) {
            if (Math.floor(Math.random() * 100) == rnd) {
                quarter = quarter + Math.floor(Math.random() * 50) + 51;
                break;
            }
    }
    console.log(quarter);
}
chance(50);
