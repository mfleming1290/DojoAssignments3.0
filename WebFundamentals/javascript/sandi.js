var students = [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
];
    var names = 0;
    for (var first_name in students) {
        names++
    }
    console.log(students[0].first_name);
// console.log(students.first_name + " " + students.last_name);
