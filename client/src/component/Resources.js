import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [input, setInput] = useState('');

  const fetchResources = async () => {
    const res = await axios.get('http://localhost:5000/api/resources');
    setResources(res.data);
  };

  useEffect(() => {
    fetchResources();
  }, []);

  const handleAdd = async () => {
    if (input.trim()) {
      await axios.post('http://localhost:5000/api/resources', { name: input });
      setInput('');
      fetchResources();
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/resources/${id}`);
    fetchResources();
  };

  return (
    <div>
      <h2>Resource Tracker</h2>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Enter resource" />
      <button onClick={handleAdd}>Add Resource</button>
      <ul>
        {resources.map(res => (
          <li key={res._id}>
            {res.name} <button onClick={() => handleDelete(res._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;
