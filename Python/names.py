students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

def names(students):
    for val in students:
        print val['first_name'], val['last_name']
names(students)

users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

def part2(users):
    count = 0
    count2 = 0
    print "Students"
    for i in users['Students']:
        count = count + 1
        print count, i['first_name'], i['last_name'], len(i['first_name']) + len(i['last_name'])
    print "Instructors"
    for i in users['Instructors']:
        count = count + 1
        print count, i['first_name'], i['last_name'], len(i['first_name']) + len(i['last_name'])
part2(users)
