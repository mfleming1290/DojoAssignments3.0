var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: number[] = [1,2,3,4];
var myObj: object = { name:'Bill'};
var anythingVariable: any = "Hey";
var anythingVariable: any = 25; 
var arrayOne: boolean[] = [true, false, true, true]; 
var arrayTwo: (string | number | boolean)[] = [1, 'abc', true, 2];
var myObj: object = { x: 5, y: 10 };
// object constructor
class MyNode {
    val: number;

   constructor(val: number) {
        this.val = 0;
        this.val = val;
    }
    doSomething() {
        this.val = 10;
    };
};
let myNodeInstnace = new MyNode(1);

console.log(myNodeInstnace.val);

function myFunction(): void {
    console.log("Hello World");
    return;
}
function sendingErrors(): void {
	throw new Error('Error message');
}