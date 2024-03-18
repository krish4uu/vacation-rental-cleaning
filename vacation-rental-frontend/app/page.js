'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

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
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">Cleaning Tasks</h1>
      <div className='flex justify-between'>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={fetchTasks}
        >
          Refresh
        </button>
        <Link
          href="/add-task"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Add New Task
        </Link>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="border-b border-gray-200 py-4">
            <h2 className="text-xl font-semibold">{task.propertyName}</h2>
            <p className="text-gray-600">{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
