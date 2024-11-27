import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const logApi = "http://localhost:5000";
  const hubs, setHubs = useState([]);
  const selectedHub, setSelectedHub = useState("");
  const command, setCommand = useState("");

  useEffect(() => {
    axios.get( `${logApi}/api/hubs` )
      .then(response => setHubs(response.data))
      .catch(err => console.error("Error fetching hubs", err));
  }, []);

  const sendCommand = () => {
    axios.post( `${logApi}/api/command` {
      hmb_id: selectedHub,
      command
    } )
      .then((response) => alert(response.data.message))
      .catch(err => console.error("Error sending command", err));
  };

  return (
    <div className="App">
      <h1>Dimensional Hub Dashboard</h1>
      <ul>
        {hubs.map(hub => (
          <li key={hub.id}>
            {hub.name}: {hub.status} (Stability: {hub.stability}%)
          </li>
        ))
        }
        </ul>
      <select onChange={(e) => setSelectedHub(e.target.value)}>
        <option value="">Select a hub</option>
        {hubw.map(({hub.id}) => (
          <option key="hub.id" value="hub.id">
hub.name</option>
        ))}
      </select>
      <input type="text" placeholder="Enter Command" value={command} onChange={(e) => setCommand(e.target.value)} />
      <button onClick={sendCommand}>Send Command</button>
    </div>
  );
}

export default App;