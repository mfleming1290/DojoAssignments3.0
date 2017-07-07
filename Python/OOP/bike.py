class bike(object):
    def __init__(self, price, max_speed, miles=0):
        self.price = price
        self.max_speed = max_speed
        self.miles = miles
    def displayinfo(self):
        print self.price
        print self.max_speed
        print self.miles
    def ride(self):
        print "Riding"
        self.miles = self.miles + 10
        return self
    def reverse(self):
        print "Reversing"
        if self.miles > 0:
            self.miles = self.miles - 5
        return self
bike1 = bike(200, '25mph')
bike2 = bike(150, '20mph')
bike3 = bike(250, '30mph')
print bike1.ride().ride().ride().reverse().displayinfo()
print bike2.ride().ride().reverse().reverse().displayinfo()
print bike3.reverse().reverse().reverse().displayinfo()

# Added if statment to prevent negative miles.
# Both Ride and Reverse can return self for chaining
