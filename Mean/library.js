var _ = {
   map: function(arr, callback) {
       for (var i = 0; i < arr.length; i++) {
           arr[i] = callback(arr[i])

       }
       return arr;
   },
   reduce: function(arr, callback, memo) {
       x = 0;
       if (!memo) {
           memo = arr[0];
           x = 1;
       }
       for (var i = x; i < arr.length; i++) {
           memo = callback(arr[i], memo);
       }
       return memo
   },
   find: function(arr, callback) {
       for (var i = 0; i < arr.length; i++) {
           if (callback(arr[i])){
               return arr[i]
           }

       }

   },
   filter: function(arr, callback) {
     array = []
     for (var i = 0; i < arr.length; i++) {
         if (callback(arr[i])){
             array.push((arr[i]));
         }
     }
     return array;
   },
   reject: function(arr, callback) {
       array = []
       for (var i = 0; i < arr.length; i++) {
           if (!callback(arr[i])){
               array.push(arr[i])
           }
       }
       return array
   }
 }
// you just created a library with 5 methods!
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].

var map = _.map([1, 2, 3], function(num){ return num * 3; });
console.log(map);

var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log(sum);

var find = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(find);

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odds);
