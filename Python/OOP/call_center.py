from datetime import datetime


class call(object):
    def __init__(self, name, number, reason, time_of_call=datetime.today()):
        super(call, self).__init__()
        self.name = name
        self.number = number
        self.reason = reason


    def display_call(self):
        print "Customer ID: " + str(self.id)
        print "Customer Name: " + str(self.name)
        print "Customer Number: " + str(self.number)
        print "Customer Call Time: " + str(self.time)
        print "Customer Reason for Call: " + str(self.reason)

class CallCenter(object):
    def __init__(self):
        self.calls = []
        self.queue = 0
    def add(self, name, number, reason, time_of_call=datetime.today()):
        self.calls.append(call(name, number, reason, time_of_call))
        self.queue += 1
        return self
    def remove(self):
        self.calls.pop(0)
        self.queue -= 1
        return self
    def info(self):
        if self.queue >= 1:
            for i in range(0, self.queue):
                print self.calls[i].name + ": " + str(self.calls[i].number)
            print self.queue
        elif self.queue < 1:
            print "no calls in queue"
    

center = CallCenter()
center.add('Mark', '520-289-7311' 'Broken Printer', 'time_of_call').add('Tom', '520-555-7311' 'Broken camera', 'time_of_call').remove().info()


# cust1 = call("231", "Pete", '520-289-7311', "10:30", "Broken Printer")
# cust1.display_call()
