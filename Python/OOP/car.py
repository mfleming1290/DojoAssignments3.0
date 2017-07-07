class car(object):
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        self.tax = 0.12

    def checktax(self):
        if self.price > 10000:
            self.tax = 0.15
        return self

    def display_all(self):
        print "Price is " + str(self.price)
        print "Speed is " + str(self.speed)
        print "Fuel at " + str(self.fuel)
        print "Tax is " + str(self.tax)

car1 = car(15000, '90mph', 'full', '15mpg')
car2 = car(6000, '50mph', 'half tank', '10mpg')
car3 = car(9000, '70mph', 'full', '12mpg')
car4 = car(11000, '80mph', 'empty', '16mpg')
car5 = car(3000, '40mph', 'quarter tank', '8mpg')
car6 = car(13000, '85mph', 'full', '14mpg')

car1.checktax().display_all()
car2.checktax().display_all()
car3.checktax().display_all()
car4.checktax().display_all()
car5.checktax().display_all()
car6.checktax().display_all()
