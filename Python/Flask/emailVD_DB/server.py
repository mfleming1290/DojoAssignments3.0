from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re
app = Flask(__name__)
app.secret_key = 'KeepItSecretKeepItSafe'
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
mysql = MySQLConnector(app, 'emaildb' )
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/results', methods =['POST'])
def creat_email():
    email = request.form['email']
    session['email'] = email
    if len(request.form['email']) < 1:
        flash('Email cannot be empty')
        return redirect('/')
    elif not EMAIL_REGEX.match(request.form['email']):
        flash('Email Address is not valid!')
        return redirect('/')
    query = "INSERT INTO emails (email, created_at, updated_at) VALUES (:email, NOW(), NOW())"
    data = {
        'email': request.form['email']
    }
    mysql.query_db(query, data)
    return redirect('/success')

@app.route('/success')
def success():
    query = 'SELECT * FROM emails'
    emails = mysql.query_db(query)
    return render_template('success.html', all_emails = emails)
app.run(debug=True)
