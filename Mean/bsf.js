function runningLogger() {
    console.log('I am running!')

}

function multiplyByTen(num) {
    var sum = num * 10;
    return sum
}
// console.log(multiplyByTen(5));

function stringReturnOne() {
    return "string one";
}

function stringReturnTwo() {
    return "string two";
}

function caller(call) {
    if (typeof(call) == "function") {
        call();
    }
}
// caller(runningLogger)
function myDoubleConsoleLog(one,two) {
    if (typeof(one) =="function" && typeof(two) == "function") {
        console.log(one(), two());

    }
}
// myDoubleConsoleLog(stringReturnOne,stringReturnTwo)

function caller2(one) {
    console.log('starting');
    var time = setTimeout(function(){
        if (typeof(one) == 'function'){
            one(stringReturnOne,stringReturnTwo);
        }
    },2000);
    console.log('ending?');
    return 'interesting';
}

caller2(myDoubleConsoleLog)
