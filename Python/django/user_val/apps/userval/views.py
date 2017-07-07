from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User
# Create your views here.
def index(request):
    return render(request, 'userval/index.html')


def user(request):
    if request.method == 'POST':
        valid, data = User.objects.test(request.POST)
        if valid:
            request.session['name'] = request.POST['name']
        else:
            for err in res[1]:
                messages.error(request, err)
    return redirect('userval:success')

def success(request):
    context = {
        'users' : User.objects.all()
    }
    return render(request, "userval/sucess.html", context)
