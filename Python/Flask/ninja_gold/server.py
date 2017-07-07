from flask import Flask, render_template, url_for, request, session, redirect
import random
from datetime import datetime
app = Flask(__name__)
app.secret_key = 'asdf'



@app.route('/')
def index():
    if 'gold' not in session:
        session['gold'] = 0
        session['activities'] = []
    return render_template('index.html')


@app.route('/process_money', methods=['POST'])
def gold():
    if request.form['building'] == 'farm':
        earned = random.randrange(10,21)
    elif request.form['building'] == 'cave':
        earned = random.randrange(5,11)
    elif request.form['building'] == 'house':
        earned = random.randrange(2,6)
    elif request.form['building'] == 'casino':
        earned = random.randrange(-50,51)
    session['gold'] += earned

    activity = ""
    time = datetime.now().strftime("%Y/%m/%d %I:%M %p")
    if earned >= 0:
        activity += "You earned" + " " + str(earned) + " " + "gold  " + "from the " + str(request.form['building']) + " " + str(time)
    if earned < 0:
        activity += "You lost" + " " + str(earned) + " " + "gold  " + "from the " + str(request.form['building']) + " " + str(time)

    session['activities'].insert(0, activity)
    return redirect('/')


app.run(debug=True)
