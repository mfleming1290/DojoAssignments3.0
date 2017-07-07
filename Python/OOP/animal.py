class animal(object):
    def __init__(self, name):
        self.name = name
        self.health = 100
    def walk(self):
        self.health = self.health - 1
        return self
    def run(self):
        self.health = self.health - 5
        return self
    def display_health(self):
        print  str(self.name) + " has " + str(self.health) + " health"

class dog(animal):
    def __init__(self, name):
        super(dog, self).__init__(name)
        self.health = self.health + 50
    def pet(self):
        self.health = self.health + 5
        return self

class Dragon(animal):
    def __init__(self,name):
        super(Dragon, self).__init__(name)
        self.health = self.health + 70
    def fly(self):
        self.health = self.health - 10
        return self
    def display_health(self):
        print "This is a dragon!"
        super(Dragon, self).display_health()
        return self

class Griffin(animal):
    def __init__(self, name):
        super(Griffin, self).__init__(name)
        self.health = self.health + 100
    def eat(self):
        self.health = self.health + 10
        return self

animal = animal('george')
animal.walk().walk().walk().run().run().display_health()

dog = dog('doggo')
dog.walk().walk().walk().run().run().pet().display_health()


dragon = Dragon('puff')
dragon.walk().walk().walk().run().run().fly().fly().display_health()

grif = Griffin('pete')
grif.run().run().eat().display_health()
