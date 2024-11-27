
from flask import Flask, jsonify, request
from flask_cors import CORS
import psycopg2

app = Flask(__name__)
CORS(app)

conn = psycopg2.connect(
    dbname="dimensional_hub_db",
    user="postgres",
    password="password",
    host="localhost",
    port="5432"
)
cur = conn.cursor()

@app.route('/api/hubs', methods=['GET'])
def get_hubs():
    cur.execute("SELECT * FROM hubs")
    hubs = cur.fetchall()
    return jsonify([{"id": hub[0], "name": hub[1], "status": hub[2], "stability": hub[3]} for hub in hubs])

@app.route('/api/command', methods=['POST'])
def execute_command():
    data = request.json
    command = data.get("command")
    hub_id = data.get("hub_id")

    if not hub_id or not command:
        return jsonify({"error": "Missing command or hub_id"}), 400

    # Log the command
    cur.execute("INSERT INTO commands (hub_id, command) VALUES (%s, %s)", (hub_id, command))
    conn.commit()

    return jsonify({"message": f"Command '{command}' executed on hub {hub_id}"}), 200

if __name__ == '__main__':
    app.run(debug=True)
