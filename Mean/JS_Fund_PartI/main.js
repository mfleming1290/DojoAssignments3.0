var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]
for (var i = 0; i < x.length; i++) {
    console.log(x[i])
}
x.push(100);
console.log(x);

y = ["hello", "world", "JavaScript is Fun"]
x.push(y);
console.log(x);

var sum = 0;
for (var i = 0; i < 501; i++) {
    sum = sum + i
}
console.log(sum);

var arr = [1, 5, 90, 25, -3, 0];
var min = 0;
for (var i = 0; i < arr.length; i++){
    if (arr[i] < min) {
        min = arr[i]
    }
}
console.log(min)

count = arr.length;
sumed = 0;
for (var i = 0; i < arr.length; i++){
    sumed = sumed + arr[i]
}
console.log(sumed/count)

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for (key in newNinja){
    console.log(key + ":", newNinja[key])
}
