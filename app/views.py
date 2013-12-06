from app import app

from flask import render_template, flash, url_for, redirect
from flaskext import wtf
from flaskext.wtf import validators

@app.route('/')
def redirect_to_home():
    return redirect(url_for('game'))

@app.route('/game')
def game():
    return render_template('instance.html')

