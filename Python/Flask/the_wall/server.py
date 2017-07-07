from flask import Flask, request, redirect, render_template, session, flash, url_for
from mysqlconnection import MySQLConnector
import re
from flask_bcrypt import Bcrypt
app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = 'KeepItSecretKeepItSafe'
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
mysql = MySQLConnector(app, 'walldb')

@app.route('/')
def index():
    return render_template('index.html', status = "login")

@app.route('/reg')
def reg_form():
    return render_template('index.html', status = 'register')

@app.route('/user', methods = ['POST'])
def loginreg():
    if "login" in request.form:
        user_query = "SELECT * FROM users WHERE email = :email LIMIT 1"
        query_data = {
            'email': request.form['email']
        }
        user = mysql.query_db(user_query, query_data)
        if not EMAIL_REGEX.match(request.form['email']):
            flash('Email must be a valid email address')
            return redirect('/register')
        elif not user:
            flash('email or password invalid')
            return redirect('/')
        elif bcrypt.check_password_hash(user[0]['pw_hash'], request.form['password']):
            session['user_info'] = {
                'first_name': user[0]['first_name'],
                'last_name': user[0]['last_name'],
                'email': user[0]['email'],
                'id': user[0]['id']
            }
            return redirect('/wall')
        else:
            flash['Username or password invalid']
            return redirect('/')
    elif "register" in request.form:
        user_query = 'SELECT email FROM users WHERE email = :email'
        user_email = {
            'email': request.form['email']
        }
        userExists = mysql.query_db(user_query, user_email)
        if userExists:
            flash('Email address is invalid please use another')
        else:
            if not EMAIL_REGEX.match(request.form['email']):
                flash('Email must be a valid email address')
            if len(request.form['first_name']) < 1:
                flash('First name cannot be empty')
            if not request.form['first_name'].isalpha():
                flash('First Name must only contain letters')
            if len(request.form['first_name']) < 2:
                flash("First Name must be at least 2 characters")
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
            return redirect('/reg')

        # password = request.form['password']
        pw_hash = bcrypt.generate_password_hash(request.form['password'])
        insert_query = "INSERT INTO users (first_name, last_name, email, pw_hash, created_at) VALUES (:first_name, :last_name, :email, :pw_hash, NOW())"
        query_data = {
            'first_name': request.form['first_name'],
            'last_name': request.form['last_name'],
            'email': request.form['email'],
            'password': request.form['password'],
            'confirm': request.form['confirm_password'],
            'pw_hash': pw_hash
            }
        new_user_id = mysql.query_db(insert_query, query_data)
        session['new_user_info'] = {
                'first_name': request.form['first_name'],
                'last_name': request.form['last_name'],
                'email': request.form['email'],
                'id': new_user_id
        }
        flash('You hace successfully registered, please log in!')
        return redirect ('/')


@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')

@app.route('/wall')
def wall():
    users = mysql.query_db('SELECT first_name, last_name, id FROM users')
    messages = mysql.query_db('SELECT message, id, created_at FROM messages')
    info = mysql.query_db('SELECT first_name, last_name, user_id, messages.created_at, messages.user_id, messages.id, message FROM users JOIN messages ON users.id = messages.user_id ORDER BY messages.created_at DESC')
    comments = mysql.query_db('SELECT first_name, last_name, comment, message_id, comments.created_at FROM comments JOIN users ON comments.user_id = users.id ORDER BY comments.created_at ASC')
    return render_template('wall.html', users=users, messages=messages, info=info, comments=comments)

@app.route('/wall/<user_id>/post', methods=['POST'])
def post(user_id):
    message_query = "INSERT INTO messages(user_id, message, created_at) VALUES (:user_id, :message, NOW())"
    data = {
        'message': request.form['message'],
        'user_id': session['user_info']['id']
    }
    messages = mysql.query_db(message_query, data)
    return redirect('/wall')

@app.route('/wall/<message_id>/comment_post', methods=['POST'])
def comment_post(message_id):
    data = {
        'message_id': message_id,
        'comment' : request.form['comment'],
        'user_id': session['user_info']['id']
    }
    query = 'INSERT INTO comments (message_id, user_id, comment, created_at) VALUES (:message_id, :user_id, :comment, NOW())'
    mysql.query_db(query, data)
    return redirect('/wall')

app.run(debug=True)
