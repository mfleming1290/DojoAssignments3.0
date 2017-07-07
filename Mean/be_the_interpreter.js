var first_variable;
"use strict"
var firstFunc = () => {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable);
first_variable = "Yipee I was first!";
console.log(first_variable);



var food;
var eat = () => {
  food = "half-chicken";
  console.log(food);
  var food = "gone";
  console.log(food);
}
food = "Chicken";
eat();
console.log(food);



var new_word;
var lastFunc = () =>  {
  new_word = "old";
}
new_word = "NEW!";
console.log(new_word);
