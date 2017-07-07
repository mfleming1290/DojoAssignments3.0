from django.shortcuts import render, redirect
from datetime import datetime
import random


def show(request):
    return render(request, 'gold/index.html')

def index(request):
    if 'gold' not in request.session:
        request.session['gold'] = 0
        request.session['activities'] = []
    return render(request, 'gold/index.html')

def process_money(request):
    if request.method == 'POST':
        if request.POST['building'] == 'farm':
            earned = random.randrange(10,21)
        elif request.POST['building'] == 'cave':
            earned = random.randrange(5,11)
        elif request.POST['building'] == 'house':
            earned = random.randrange(2,6)
        elif request.POST['building'] == 'casino':
            earned = random.randrange(-50,51)
        request.session['gold'] += earned

        activity = ""
        time = datetime.now().strftime("%Y/%m/%d %I:%M %p")
        if earned >= 0:
            activity += "You earned" + " " + str(earned) + " " + "gold  " + "from the " + str(request.POST['building']) + " " + str(time)
        if earned < 0:
            activity += "You lost" + " " + str(earned) + " " + "gold  " + "from the " + str(request.POST['building']) + " " + str(time)

        request.session['activities'].insert(0, activity)
    return redirect('/')
