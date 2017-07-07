class product(object):
    def __init__(self, price, name, weight, brand, cost):
        self.price = price
        self.name = name
        self.weight = weight
        self.brand = brand
        self.cost = cost
        self.status = 'for sale'
    def sell(self):
        self.status = 'sold'
        return self
    def addtax(self, tax):
        self.tax = tax
        self.price = self.price + (self.tax * self.price)
        return self
    def Return(self, reason):
        if reason == "defective":
            self.price = 0
            self.status = "defective"
        elif reason == "returned like new":
            self.status = 'for sale'
        elif reason == 'open box':
            self.status = 'used'
            self.price = self.price - (self.price * .2)
        return self
    def displayinfo(self):
        print "Item price: $" + str(self.price)
        print "Item name: " + str(self.name)
        print "Item weight: " + str(self.weight)
        print "Item brand: " + str(self.brand)
        print "Item cost: $" + str(self.cost)
        print "Item status: " + str(self.status)



ipod = product(10, 'Ipod', '5 pounds', 'Apple', 5)
ipod.addtax(0.12).sell().Return('returned like new').displayinfo()
