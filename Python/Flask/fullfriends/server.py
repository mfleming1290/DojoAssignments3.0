from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re
app = Flask(__name__)
app.secret_key = 'KeepItSecretKeepItSafe'
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
mysql = MySQLConnector(app, 'fullfriendsdb')
@app.route('/', methods=['GET'])
def index():
    query = 'SELECT * FROM friends'
    friends = mysql.query_db(query)
    return render_template('index.html', all_friends = friends)

@app.route('/friends', methods =['POST'])
def edit():
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    email = request.form['email']
    if len(request.form['first_name']) < 1:
        flash('First Name cannot be empty')
        return redirect('/')
    elif len(request.form['last_name']) < 1:
        flash('Last Name cannot be empty')
        return redirect('/')
    if len(request.form['email']) < 1:
        flash('Email cannot be empty')
        return redirect('/')
    elif not EMAIL_REGEX.match(request.form['email']):
        flash('Email Address is not valid!')
        return redirect('/')
    query = "INSERT INTO friends (first_name, last_name, email) VALUES (:first_name, :last_name, :email)"
    data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'email': request.form['email']
    }
    mysql.query_db(query, data)
    return redirect('/')

@app.route('/friends/<id>/edit', methods=['GET'])
def edit_friend(id):
    query = "SELECT * FROM friends WHERE id = :id"
    data = {'id': id}
    friends = mysql.query_db(query, data)
    print friends
    return render_template('edit.html', one_friend=friends[0])

@app.route('/friends/<id>', methods=['POST'])
def update_friend(id):
    query = "UPDATE friends SET first_name = :first_name, last_name = :last_name, email = :email WHERE id = :id"
    data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'email': request.form['email'],
        'id': id
        }
    mysql.query_db(query, data)
    return redirect('/')

@app.route('/friends/<id>/delete', methods=['POST'])
def delete(id):
    query = "DELETE FROM friends where id = :id"
    data = {'id': id}
    mysql.query_db(query, data)
    return redirect('/')

app.run(debug=True)
