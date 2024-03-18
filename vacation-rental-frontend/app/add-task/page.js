'use client';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function AddTask() {
  const [propertyName, setPropertyName] = useState('');
  const [cleaningDate, setCleaningDate] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState(['']);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!propertyName || !cleaningDate || !description || !images[0]) {
      setError('All fields are required.');
      return;
    }
    if (new Date(cleaningDate) < new Date()) {
      setError('Cleaning date must be in the future.');
      return;
    }
    const task = { propertyName, cleaningDate, description, images };
    await axios.post('http://localhost:3000/tasks', task);
    router.push('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Add New Cleaning Task</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="propertyName"
          >
            Property Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="propertyName"
            type="text"
            placeholder="Property Name"
            value={propertyName}
            onChange={(e) => setPropertyName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="cleaningDate"
          >
            Cleaning Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cleaningDate"
            type="date"
            value={cleaningDate}
            onChange={(e) => setCleaningDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="images"
          >
            Image URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="images"
            type="text"
            placeholder="Image URL"
            value={images[0]}
            onChange={(e) => setImages([e.target.value])}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}
