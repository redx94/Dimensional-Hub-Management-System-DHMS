from flask import Flask, jsonify, request

app = Flask(__name__)
@app.route('/api/hubs', methods=['GET'])
def get_hubs():
    return jsonify({"message": "Hubs fetched successfully"})

if __name__ == '__main__':
    app.run(debug=True)
