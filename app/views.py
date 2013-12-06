from app import app

from flask import render_template, flash, url_for, redirect
from flaskext import wtf
from flaskext.wtf import validators

@app.route('/')
def redirect_to_home():
    return redirect(url_for('list_posts'))

@app.route('/posts')
def list_posts():
    return render_template('list_posts.html')

