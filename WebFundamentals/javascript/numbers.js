function numbers(arr) {
    var arr2 = []
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" ) {
             arr2.push(arr[i])
        }
    }
    console.log(arr2);
}
numbers([1, "apple", -3, "orange", 0.5])
