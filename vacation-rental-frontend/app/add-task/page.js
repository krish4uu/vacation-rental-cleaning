"use client"
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function AddTask() {
  const [propertyName, setPropertyName] = useState('');
  const [cleaningDate, setCleaningDate] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState(['']);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = { propertyName, cleaningDate, description, images };
    await axios.post('http://localhost:3000/tasks', task);
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Property Name"
        value={propertyName}
        onChange={(e) => setPropertyName(e.target.value)}
      />
      <input
        type="date"
        value={cleaningDate}
        onChange={(e) => setCleaningDate(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={images[0]}
        onChange={(e) => setImages([e.target.value])}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
