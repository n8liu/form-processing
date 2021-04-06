from flask import Flask, jsonify, request
from flask_cors import CORS

import database as db

app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = True

@app.route("/api/v1/posts/get")
def get_posts():
    return jsonify(db.get_posts())

@app.route("/api/v1/posts/post", methods=['POST'])
def insert_post():
    print(request.form)
    text = request.form.get('text')
    db.insert_post(text)
    return '''<h1>Text: {}</h1>'''.format(text)

app.run()