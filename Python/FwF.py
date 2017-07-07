# Odd/Even
def odd_even():
    for num in range(1, 2001):
        if num % 2 == 0:
            print "Number is", num, "This is an even number"
        elif num % 2 != 0:
            print "Number is", num, "This is an odd number"
odd_even()

# Multiply
a = [2,4,10,16]
def multiply(a, num):
    for x in range(0, len(a)):
        a[x] *= num
    return a
print multiply(a, 5)


# Hacker Challenge:
def layered_multiples(a):
  new_array = []
  for z in a:
      big_arr = []
      for i in range(0,z):
        big_arr.append(1)
      new_array.append(big_arr)
  return new_array

x = layered_multiples(multiply([2,4,5],3))
print x
