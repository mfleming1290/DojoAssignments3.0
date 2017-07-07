from flask import Flask, render_template, request, session, redirect
import random
app = Flask(__name__)
app.secret_key = 'asdf'

def reset():
    session.pop('number')

@app.route('/')
def index():
    session['number'] = random.randrange(0, 101)
    return render_template('index.html')



@app.route('/', methods=['POST'])
def num():
    session['guess'] = request.form['guess']
    guess = session['guess']
    numguess = int(guess)
    if numguess == session['number']:
        return render_template('index.html', response = "you win", numguess = numguess)
    elif numguess > session['number']:
        return render_template('index.html', response = 'too high')
    elif numguess < session['number']:
        return render_template('index.html', response = 'too low')

@app.route('/reset', methods=['POST'])
def resets():
    reset()
    return redirect('/')

app.run(debug=True)
