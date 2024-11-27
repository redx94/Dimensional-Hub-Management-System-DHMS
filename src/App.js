
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [hubs, setHubs] = useState([]);
  const [selectedHub, setSelectedHub] = useState("");
  const [command, setCommand] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/hubs")
      .then((response) => setHubs(response.data))
      .catch((error) => console.error("Error fetching hubs:", error));
  }, []);

  const sendCommand = () => {
    axios.post("http://localhost:5000/api/command", {
      hub_id: selectedHub,
      command
    }).then((response) => alert(response.data.message))
      .catch((error) => console.error("Error sending command:", error));
  };

  return (
    <div className="App">
      <h1>Dimensional Hub Dashboard</h1>
      <ul>
        {hubs.map((hub) => (
          <li key={hub.id}>
            {hub.name}: {hub.status} (Stability: {hub.stability}%)
          </li>
        ))}
      </ul>
      <select onChange={(e) => setSelectedHub(e.target.value)}>
        <option>Select a hub</option>
        {hubs.map((hub) => (
          <option key={hub.id} value={hub.id}>{hub.name}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Enter Command"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
      />
      <button onClick={sendCommand}>Send Command</button>
    </div>
  );
}

export default App;
