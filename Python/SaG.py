import random
def grades():
    print "Scores and grades"
    for num in range(1, 11):
        x = random.randrange(60, 100, 1)
        if x > 59 and x < 70:
            print "score is", x, "Your grade is D"
        elif x > 69 and x < 80:
            print "score is", x, "Your grade is C"
        elif x > 79 and x < 90:
            print "score is", x, "Your grade is B"
        elif x > 89 and x < 101:
            print "score is", x, "Your grade is A"
    print "End of the program. Bye!"
grades()
