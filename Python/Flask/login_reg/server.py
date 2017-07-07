from flask import Flask, request, redirect,render_template, session, flash
from mysqlconnection import MySQLConnector
import re
from flask_bcrypt import Bcrypt
app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = 'KeepItSecretKeepItSafe'
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
mysql = MySQLConnector(app, 'logindb')

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/user', methods=['POST'])
def loginreg():
    if "login" in request.form:
        password = request.form['password']
        user_query = "SELECT * FROM users WHERE email = :email LIMIT 1"
        query_data = {'email': request.form['email']}
        user = mysql.query_db(user_query, query_data)
        if not EMAIL_REGEX.match(request.form['email']):
            flash("Email must be a valid email address")
            return redirect('/register')
        elif not user:
            flash("email of password is invalid")
            return redirect('/register')
        elif bcrypt.check_password_hash(user[0]['pw_hash'], password):
            session['user_info'] = {
                'first_name': user[0]['first_name'],
                'last_name': user[0]['last_name'],
                'email': user[0]['email'],
                'id': user[0]['id']
            }
            return render_template('success.html')
        else:
            flash('User name or password is wrong, register here!')
            return redirect('/register')
    elif "register" in request.form:
        user_query = 'SELECT email From users WHERE email = :email'
        user_email = {'email': request.form['email']}

        userExists = mysql.query_db(user_query, user_email)
        if userExists:
            flash('Email Address is invalid please use another address')
        else:
            if not EMAIL_REGEX.match(request.form['email']):
                flash('Email must be a valid email address')
            if len(request.form['first_name']) < 1:
                flash('First name cannot be empty')
            if not request.form['first_name'].isalpha():
                flash('First Name must only contain letters')
            if len(request.form['last_name']) < 1:
                flash('Last name cannot be empty')
            if not request.form['last_name'].isalpha():
                flash('Last Name must only contain letters')
            if len(request.form['password']) < 1:
                flash('Password name cannot be empty')
            if len(request.form['password']) < 8:
                flash('Password should be more than 8 characters!')
            if len(request.form['confirm_password']) < 1:
                flash('Confirm password cannot be empty')
            if request.form['password'] != request.form['confirm_password']:
                flash('Passwords must match!')
        if '_flashes' in session:
            return redirect('/register')

        first_name = request.form['first_name']
        last_name = request.form['last_name']
        email = request.form['email']
        password = request.form['password']
        confirm = request.form['confirm_password']

        pw_hash = bcrypt.generate_password_hash(password)
        insert_query = "INSERT INTO users (first_name, last_name, email, pw_hash, created_at) VALUES (:first_name, :last_name, :email, :pw_hash, NOW())"
        query_data = {
            'first_name': request.form['first_name'],
            'last_name': request.form['last_name'],
            'email': request.form['email'],
            'password': request.form['password'],
            'confirm': request.form['confirm_password'],
            'pw_hash': pw_hash}
        new_user_id = mysql.query_db(insert_query, query_data)
        session['new_user_info'] = {
                'first_name': request.form['first_name'],
                'last_name': request.form['last_name'],
                'email': request.form['email'],
                'id': new_user_id
        }
        return render_template('success.html')


@app.route('/register')
def register():
    return render_template('register.html')


@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')

app.run(debug=True)
