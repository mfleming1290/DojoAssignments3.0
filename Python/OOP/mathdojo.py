class MathDojo(object):
    def __init__(self):
        self.num = 0
    def add(self, *y):
        # sums = 0
        # for i in y:
        #     sums = sums + i
        # self.num = self.num + sums
        self.num = self.num + sum(i for i in y)

        return self
    def subtract(self, *y):
        sum = 0
        for i in y:
            sum = sum + i
        self.num = self.num - (sum)
        return self
    def result(self):
        print self.num
md = MathDojo()
# md.add(2, 2).add(6,2).subtract(3,1).result()
md.add(2).add(2, 5).subtract(3, 2).result()
# md.add([1],3,4).add([3, 5, 7, 8], [2, 4.3, 1.25]).result()
# md.add([1],3,4).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract(2, [2,3], [1.1, 2.3]).result()
