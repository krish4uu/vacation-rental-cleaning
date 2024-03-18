"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:3000/tasks');
    setTasks(response.data);
  };

  return (
    <div>
      <h1>Cleaning Tasks</h1>
      <button onClick={fetchTasks}>Refresh</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.propertyName}</li>
        ))}
      </ul>
    </div>
  );
}
