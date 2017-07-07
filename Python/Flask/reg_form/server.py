from flask import Flask, render_template, redirect, request, session, flash
import re
app = Flask(__name__)
app.secret_key = 'thisissecret'
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=['POST'])
def register():
    email = request.form['email']
    first = request.form['first_name']
    last = request.form['last_name']
    password = request.form['password']
    confirm = request.form['confirm_password']

    if len(request.form['email']) < 1:
        flash(u'Email cannot be empty', 'error')
    elif not EMAIL_REGEX.match(request.form['email']):
        flash(u'Invalid Email Address!', 'error')

    elif len(request.form['first_name']) < 1:
        flash(u'First name cannot be empty', 'error')

    elif not request.form['first_name'].isalpha():
        flash(u'First Name must only contain letters', 'error')

    elif len(request.form['last_name']) < 1:
        flash(u'Last name cannot be empty', 'error')

    elif not request.form['last_name'].isalpha():
        flash(u'Last Name must only contain letters', 'error')

    elif len(request.form['password']) < 1:
        flash(u'Password name cannot be empty', 'error')

    elif len(request.form['password']) < 8:
        flash(u'Password should be more than 8 characters!', 'error')

    elif len(request.form['confirm_password']) < 1:
        flash(u'Confirm password cannot be empty', 'error')

    elif request.form['password'] != request.form['confirm_password']:
        flash(u'Passwords must match!', 'error')

    return redirect('/')
app.run(debug=True)
