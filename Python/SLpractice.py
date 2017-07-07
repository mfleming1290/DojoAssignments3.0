# Find and Replace
str = "If monkeys like bananas, then I must be a monkey!"
print str.find('monkeys')
print str.replace('monkey', 'aligator')

# Min and Max
x = [2,54,-2,7,12,98]
print max(x)
print min(x)

# First and Last
x = ["hello",2,54,-2,7,12,98,"world"]
print x[:1]
print x[7:]
print x[:1], x[7:]
str = x[:1], x[7:]
print str

# New List
x = [19,2,54,-2,7,12,98,32,10,-3,6]
x.sort()
print x
print x[:5]
print x[5:]
y = x[5:]
y.insert(0,x[:5])
print y
