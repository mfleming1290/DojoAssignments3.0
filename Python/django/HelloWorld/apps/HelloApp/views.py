from django.shortcuts import render

# Create your views here.
def index(request):
    print "Hello World!"
    return render(request, 'HelloApp/index.html')
