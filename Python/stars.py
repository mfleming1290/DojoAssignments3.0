# Part I
x = [4, 6, 1, 3, 5, 7, 25]
def draw_stars(x):
    star = ''
    for z in x:
        for i in range(0,z):
            star = z * '*'
        print star
draw_stars(x)

# Part I another method

def draw_stars(x):
    for z in x:
        print '*' * z
draw_stars(x)


# Part II
x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
def draw_stars(x):
    for i in x:
        if isinstance(i, int):
            print i * '*'
        elif isinstance(i, str):
            a = len(i)
            b = i[0].lower()
            print a * b
draw_stars(x)
