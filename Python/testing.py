# first_name = "Zen"
# last_name = "Coder"
# print "My name is {} {}".format(first_name, last_name)

# name = "Zen"
# age = 15
# print "My name is " + name + age

# name = "Zen"
# print "My name is", name, "i am ", 24

# hw = "hello %s" % 'world'
# print hw

# my_string = 'hello world'
# print my_string.capitalize()
#
# my_string = 'Hello WORLD'
# print my_string.lower()

# fruits = ['apple', 'banna', 'orange', 'strawberry']
# vegetables = ['lettuce', 'cucumber', 'carrots']
# fruits_and_vegatables = fruits + vegetables
# print fruits_and_vegatables
# salad = 3 * vegetables
# print salad

# drawer = ['documents', 'envelopes', 'pens']
# print drawer[2]

# x = [1,2,3,4,5]
# x.remove(3)
# print x

# y = [10,11,12,13,14]
# y.pop(4)
# print y

# x = [100,'kiwi',99,4,'apple',2,'bannana',5,-3,'orange'];
# x.sort()
# print x

# x = [99,4,2,5,-3];
# print x[1:2]

# my_list = [0, '']
# print any(my_list)

# list = [4, 'dog', 99, ['list', 'inside', 'another'], 'hello world']
# for elements in list:
#     print elements

# count = 0
# while count < 5:
#     print count
#     count += 1

# for val in "string":
#   if val == "t":
#     break
#   print(val)

# for val in "string":
#   if val == "i":
#     continue
#   print(val)

# x = 3
# y = x
# while y > 0:
#   print y
#   y = y - 1
# else:
#   print "Final else statement"

# def add(a,b):
#   x = a + b
#   return x
#
# result = add(3,5)
# print result
# print add(3,5)

# print 4 > 3

# dog = ("Canis Familiaris", "dog", "carnivore", 12)
# dog = dog + ("domestic",)
# dog = dog[:3] + ("man's best friend",) + dog[4:]
#
# print dog

# value = ("Michael", "Instructor", "Coding Dojo")
# (name, position, company) = value #tuple unpacking
# print name
# print position
# print company
#
# num = (1, 5, 7, 3, 8)
# for index, item in enumerate(num):
#     print(str(index)+" = "+str(item))
# import math
# r = (2)
# def get_circle_area(r):
#     #Return (circumference, area) of a circle of radius r
#     c = 2 * math.pi * r
#     a = math.pi * r * r
#     print (c, a)
# get_circle_area(r)
weekend = {"Sun": "Sunday", "Mon": "Monday"} #literal notation
capitals = {} #create an empty dictionary then add values
capitals["svk"] = "Bratislava"
capitals["deu"] = "Berlin"
capitals["dnk"] = "Copenhagen"

for data in capitals:
     print data

for val in capitals.itervalues():
     print val

for key,data in capitals.iteritems():
     print key, " = ", data
