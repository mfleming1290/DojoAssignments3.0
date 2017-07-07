from flask import Flask, render_template, request, redirect, url_for
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', ninjas = "none")

@app.route('/ninja')
def ninja():
    return render_template('index.html', ninjas = 'all')

@app.route('/ninja/<color>')
def show_user_profile(color):

    return render_template("turtles.html", color=color)
app.run(debug=True)
