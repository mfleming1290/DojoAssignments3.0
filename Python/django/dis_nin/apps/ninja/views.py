from django.shortcuts import render

# Create your views here.
def index(request):
    context = {
    "ninjas": "none"
    }
    return render(request, 'ninja/index.html', context)

def ninjas(request):
    context = {
    "ninjas": "all"
    }
    return render(request, 'ninja/index.html', context)

def colors(request, color):
    context = {
    "color": color
    }
    return render(request, 'ninja/ninjas.html', context)
