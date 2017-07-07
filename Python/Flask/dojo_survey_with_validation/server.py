from flask import Flask, render_template, redirect, request, session, flash
app = Flask(__name__)
app.secret_key = 'KeepItSecretKeepItSafe'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/results')
def results():
    return render_template('results.html')

@app.route('/result', methods=['POST'])
def create_user():
    print "Got Post Info"
    name = request.form['name']
    location = request.form['location']
    language = request.form['language']
    comment = request.form['comment']
    if len(request.form['name']) < 1:
        flash('Name cannot be empty')
        return redirect('/')
    elif len(request.form['comment']) < 1:
        flash('Comment cannot be empty')
        return redirect('/')
    elif len(request.form['comment']) > 120:
        flash('Comment must be less than 120 characters!')
        return redirect('/')
    return render_template('result.html', name=name, location=location, language=language, comment=comment)
app.run(debug=True)
