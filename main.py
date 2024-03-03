from flask import Flask, render_template, request, jsonify
from time import time
import json

app = Flask(__name__)

@app.route("/", methods=['GET', 'POST'])
def index():

    if request.is_json: #in other words if request is AJAX

        if request.method == 'GET':
            seconds = time()
            return jsonify({'seconds': seconds,})
        if request.method == 'POST':
            text_from_left_column = json.loads(request.data).get('text')
            add_to_right_column = f'Data from left column: {text_from_left_column}'
            return jsonify({'data': add_to_right_column})

    return render_template('index.html')



if __name__ == "__main__":
    app.run(debug=True)