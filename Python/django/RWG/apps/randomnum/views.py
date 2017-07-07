from django.shortcuts import render, redirect, HttpResponse
import random
import string

def index(request):
    request.session['count'] = 0
    return render(request, 'randomnum/index.html')

def gen(request):
    if request.method == 'POST':
        request.session['count'] += 1
        request.session['word'] = ''.join([random.choice(string.ascii_letters + string.digits) for n in xrange(32)])
        return render(request, 'randomnum/index.html')

    else:
        return redirect('/')
def resp(request):
    return HttpResponse('<h1>Hello</h1>')
