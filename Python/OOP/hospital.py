class Hospital(object):
    def __init__(self, name, capacity):
        self.name = name
        self.capacity = capacity
        self.patients = []
        self.clients = 0
    def admit(self, id, name, allergies, bed):
        if len(self.patients) < self.capacity:
            self.clients = self.clients + 1
            self.patients.append(Patient(id, name, allergies, bed))
        elif len(self.patients) > self.capacity:
            print "no room"
        return self

    def discharge(self, num):
        self.num = num
        for i in range(0, self.clients):
            if i == self.num -1:
                self.patients.pop(i)
                self.clients = self.clients - 1
        return self

    def display(self):
        for i in range(0, self.clients):
            print "Patient: " + "ID# " + str(self.patients[i].id)
            print "Name: " + self.patients[i].name
            print "Alergies: " + self.patients[i].allergies
            print "Bed Number: " + str(self.patients[i].bed)
        return self
    def status(self):
        print "Hospital has " + str(self.clients) + " bed filled out of " + str(self.capacity)
class Patient(object):
    def __init__(self, id, name, allergies, bed = 'none'):
        self.id = id
        self.name = name
        self.allergies = allergies
        self.bed = bed


hospital1 = Hospital("Saint Marks", 100)
hos = hospital1.admit(1, "Mark Jones", "Bees", 1).admit(2, "Tom", "Bees", 2).discharge(1).display().status()
