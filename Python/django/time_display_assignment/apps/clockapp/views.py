from django.shortcuts import render, HttpResponse, redirect
from django.utils.timezone import localtime, now

# Create your views here.

def index(request):
    context = {
    'now':'timezone.now()',
    }
    return render(request, 'clockapp/index.html', context)
