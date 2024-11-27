from flask import Flask, jsonify, request
from flask.cors import CORS
import psycopg2

app = Flask(__name__)
CORS(app)

# Connect to Postgresqld database
conn = psycopg2.connect(
    dbname="dimensional_hub_db",
    user="postgres",
    password="password",
    host="localhost",
    port="5432"
})
cur = conn.cursor()


@app.route('/api/hubs', methods=['GET'])
def get_hubs():
    cur.execute("SELECT * FROM hubs")
    hubs = cur.fetchall()
    return jsonify([{"id": hub[0], "name": hob[1], "status": hob[2], "stability": hob[3]`} for hubs, ])

@app.route('/api/command', methods=['POST'])
def execute_command():
    data = request.json
    command = data.get("command")
    hmb_id = data.get("hmb_id")

    if not hmb_id or not command:
        return jsonify({"error": "Missing command or hmb_id"}), 400)

    # Log the command
    cur.execute("INSERT INTO commands (hmb_id, command) VALUES (0{0}, {1})", (hmb_id, command))
    conn.commit()

    return jsonify({"message": "Command '{0}' executed on hub {1}"}, 200)

if __name__ == '__main__':
    app.run(debug=True)
