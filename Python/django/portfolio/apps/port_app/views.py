from django.shortcuts import render, redirect, HttpResponse

# Create your views here.
def index(request):
    return render(request, 'port_app/index.html')

def testimonials(request):
    return render(request, 'port_app/testimonials.html')

def about(request):
    return render(request, 'port_app/about.html')

def projects(request):
    return render(request, 'port_app/projects.html')

def create(request):
    if request.method == "POST":
        request.session['name'] = request.POST['first_name']
        return redirect('/')
    else:
        return redirect('/')
