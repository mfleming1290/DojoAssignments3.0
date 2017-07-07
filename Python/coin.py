import random

def coin():
    count = 0
    count2 = 0
    print "Starting the program..."
    for num in range(1, 5001):
        x = round(random.random())
        if x == 1:
            count = count + 1
            print "Attempt #", num, "Throwing a coin... it's a heads! ... Got", count, "so far and", count2, ' tails so far'
        elif x != 1:
            count2 = count2 + 1
            print "attempt #", num, "throwing a coin... it's a tails! ... Got", count, "so far and", count2, ' tails so far'
    print "Ending the program, thank you!"
coin()
