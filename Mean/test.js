// function NinjaConstructor(name, prevOccupation) {
//   this.name = name;
//   this.prevOccupation = prevOccupation;
//   this.introduce = function() {
//     console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
//   }
//   if (!(this instanceof NinjaConstructor)) {
//    // the constructor was called without "new".
//    return new NinjaConstructor(name, prevOccupation);
//  }
// }
// var dylan = new NinjaConstructor('Dylan', 'Construction Worker');
//
// var nikki = NinjaConstructor('Nikki','Historian');
// console.log(nikki);


// function Ninja(name, age, prevOccupation) {
//   // PRIVATE
//   var privateVar = "This is a private variable";
//   var privateMethod = function() {
//     console.log("this is a private method");
//   }
//   // PUBLIC
//   this.name = name;
//   this.age = age;
//   this.prevOccupation = prevOccupation;
//   this.introduce = function() {
//     console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
//     privateMethod(); // this works since it is a scope that can access privateMethod!
//     console.log(privateVar);      // this works too!
//   }
// }

// function Ninja(name, age, prevOccupation) {
//   // PRIVATE
//   var self = this; // HERE WE HAVE DECLARED SELF to EQUAL THE NEW OBJECT WE CREATE WITH NEW
//   var privateVar = "This is a private variable";
//   var privateMethod = function() {
//     console.log("this is a private method for " + self.name);     // refer to name via self
//     console.log(self);
//   }
//   //PUBLIC
//   this.name = name;
//   this.age = age;
//   this.prevOccupation = prevOccupation
//   this.introduce = function() {
//     console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
//     privateMethod();
//     console.log(privateVar);
//   }
// }
// var Speros = new Ninja("Speros", 24, "MBA");
// Speros.introduce();

// var MyObjConstructor = function(name){
//   var myPrivateVar = "Hello"; // just to show that it is hard to see this private var easily
//   this.name = name; // but you can see the name!
//   this.method = function(){
//     console.log( "I am a method");
//   };
// }
// var obj1 = new MyObjConstructor('object1');
// var obj2 = new MyObjConstructor('object2');
// console.log(obj1);

// console.log("NOW: ");
// console.log("Declaring and assigning variable 'ninja'.");
// var ninja = 'Libby';
//
// setTimeout( function myCallbackFunction(){
//   console.log("LATER: ")
//   console.log(ninja, "LATER"); }, 2000
// );
//
// console.log("Printing ninja value.");
// console.log(ninja, "NOW");
//
// var a = 2;
// var b = function() { console.log("something"); };
//
// function doSomething(x) {
//   console.log(typeof(x));
// }
//
// doSomething(a);
// doSomething(b);
//
// function leadBootcamp(language, leader){
//     var outcome = leader(language);
//     console.log(outcome);
// }
// function Mike(language){
//   var languages={
//     'javascript':'successful leader',
//     'PHP':'successful leader',
//     'Python':'successful leader',
//     'Ruby':'successful leader',
//   }
//   if(languages[language]){
//     return languages[language];
//   }
//   else {
//     return "maybe not yet";
//   }
// }
// function Charlie(language){
//   var languages={
//     'javascript':'successful leader',
//     'PHP':'successful leader',
//     'Python':'successful leader',
//     'Ruby':'successful leader',
//   }
//   if(languages[language]){
//     return languages[language];
//   }
//   else {
//     return "maybe not yet";
//   }
// }
// function Jimmy(language){
//   var languages={
//     'javascript':'successful leader',
//     'PHP':'successful leader',
//     'Python':'successful leader',
//     'Ruby':'successful leader',
//     'iOS':'successful leader',
//     'java_android':'successful leader',
//   }
//   if(languages[language]){
//     return languages[language];
//   }
//   else {
//     return "maybe not yet";
//   }
// }
// leadBootcamp('java_android', Mike);
// leadBootcamp('java_android', Charlie);
// leadBootcamp('java_android', Jimmy);

// function printResult(doSomething) {
//  var result = doSomething();         // store the return value of the callback parameter
//  console.log(result);                // print the result!
// }
// printResult(function(){ return 5 })

//simulated really slow DB call.
// function getStuffFromDatabase(callback){
//   var data;
//   var myTimer = setTimeout(function(){
//     if (typeof(callback) == 'function'){
//       //it just got back from the DB!
//       data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
//       callback(data);
//     }
//   }, 10000);
//   // it takes 10 seconds to get anything back <- you should fix your cloud server.!!!
//   return data;
// }
// //simulated request (failing);
// function requestDataFromDatabase(){
//   var data = getStuffFromDatabase(); // this should return my data right??
//   console.log(data);
// }
// function catchFly(){
//   console.log('I just caught a fly!');
// }
// requestDataFromDatabase();
// // keep running my program!
// console.log('Hello');
// catchFly();
// //etc.

//simulated really slow DB call.
// function getStuffFromDatabase(callback){
//   var data;
//   var myTimer = setTimeout(function(){
//     if (typeof(callback) == 'function'){
//       data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
//       callback(data);
//     }
//   }, 10000);
//   return data;
// }
// // ************CHANGES HERE **************
// function requestDataFromDatabase(){
//   var data = getStuffFromDatabase(function myCallback(data){ // ooh shiny callback!.. when is it invoked???
//     console.log(data, "ASynchronous");
//     for (var i = 0; i < data.length; i ++){
//       console.log(data[i].name);
//     }
//   });
//   console.log(data, "Synchronous");
// }
// //***************** END CHANGES **********************
// function catchFly(){
//   console.log('I just caught a fly!');
// }
// requestDataFromDatabase();
// // keep running my program!
// console.log('Hello');
// catchFly();
// //etc.

// function getStuffFromDatabase(resolve,reject){
//     var data = "whee"
//     setTimeout(function(){
//       // if (typeof(callback) == 'function'){
//         data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
//         resolve(data);
//       // }
//     }, 1000);
//     reject(); //comment this line in and out!
//     return data;
// }
// function requestDataFromDatabase(){
//   console.log('running');
//   //creates promise
//   var data = new Promise(function(resolve,reject){
//     getStuffFromDatabase(resolve,reject); // kind of like a shiny callback
//   });
//   // if promise is successful (keeps me from putting all the logic in the callback)
//   data.then(function(data){
//     console.log(data, "ASynchronous");
//     for (var i = 0; i < data.length; i ++){
//       console.log(data[i].name);
//     }
//   });
//   data.catch(function(){
//     console.log('failure');
//   })
//   console.log('end');
// }
// requestDataFromDatabase();

// (function() {
//    console.log( "I'm an immediate function!" );
// }());
//
// (function() {
//    console.log( "I'm an immediate function!" );
// })();

// Here we have a function called "Outer"
function Outer() {
  // There is a count variable that is scoped to the function
var count = 0;
  // There is an inner function that increments count and then console.logs it
function inner() {
    // increment count
count++
    // console.log count
console.log(count);
}
  // return the inner function! We can return a function!
return inner
}
// counter is now the function returned from invoking Outer
var counter = Outer();
          // if we invoke the counter function
counter()     // this will console.log "1"
counter()     // this will console.log "2"
counter()     // this will console.log "3"
counter()     // this will console.log "4"
          // So that means that the count variable still exists!
          // and it is being changed even though we aren't inside of the Outer function!

               // What if we try to access count out here?
console.log(count) // doesn't work!
