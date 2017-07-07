def multiply(arr,num):
    print arr, num # output should be [2,4,10,16] 5
    for x in arr:
        print x
        x *= num
        print x
    return arr
a = [2,4,10,16]
b = multiply(a,5)
print b
