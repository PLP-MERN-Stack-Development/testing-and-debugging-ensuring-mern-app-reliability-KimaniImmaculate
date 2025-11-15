import React, { useEffect, useState } from 'react';
import BugList from './components/BugList';
import BugForm from './components/BugForm';

function App() {
  const [bugs, setBugs] = useState([]);

  // Fetch bugs from API
  const fetchBugs = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/bugs');
      const data = await res.json();
      console.log('Fetched bugs:', data); 
      setBugs(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBugs();
  }, []);

  const addBug = async (bug) => {
    const res = await fetch('http://localhost:5000/api/bugs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bug),
    });
    const newBug = await res.json();
    setBugs([...bugs, newBug]);
  };

  const handleStatusChange = async (id, status) => {
    const res = await fetch(`http://localhost:5000/api/bugs/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    const updated = await res.json();
    setBugs(bugs.map(b => (b._id === id ? updated : b)));
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/bugs/${id}`, { method: 'DELETE' });
    setBugs(bugs.filter(b => b._id !== id));
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Bug Tracker</h1>
      <BugForm addBug={addBug} />
      <BugList bugs={bugs} handleStatusChange={handleStatusChange} handleDelete={handleDelete} />
    </div>
  );
}

export default App;




