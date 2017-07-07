from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'asdf'

def sumSessionCounter():
    session['count'] += 1

def ninja():
    session['count'] += 2


def hacker():
    session['count'] = 0



@app.route('/')
def index():
    return render_template('index.html')

@app.route('/counter')
def counter():
    return render_template('counter.html')

@app.route('/users', methods=['POST'])
def count():
    session['name'] = request.form['name']
    if session['name'] == 'ninja':
        ninja()
    elif session['name'] != 'ninja' and session['name'] != 'hacker':
        sumSessionCounter()
    elif session['name'] == 'hacker':
        hacker()

    return redirect('/counter')

app.run(debug=True)
