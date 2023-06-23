from flask import Flask, request, jsonify
import json
import requests


app = Flask(__name__)
#header = {'Content-Type': 'application/json'}
header = {'Content-Type': 'application/json', 'Accept': 'application/json'}
@app.route('/donate', methods=['POST'])
def donate():
    data = request.get_json()
    print(data)
    with open('donations.json', 'a') as f:
        json.dump(data, f)
        f.write('\n')
    response = jsonify({'message': 'Donation received!'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    response.headers.add('Content-Type', 'application/json')

    return response

if __name__ == '__main__':
    app.run(debug=True)