import React, { useState } from 'react';
import Finance from './Finance';
import Resources from './Resources';
import BookService from './BookService';

const Dashboard = () => {
  const [section, setSection] = useState('finance');

  return (
    <div className="dashboard-container">
      <h1>Welcome to Farm Dashboard</h1>
      <div className="nav-bar">
        <button onClick={() => setSection('finance')}>Financial Overview</button>
        <button onClick={() => setSection('resources')}>Resource Tracker</button>
        <button onClick={() => setSection('book')}>Book Executive</button>
      </div>
      {section === 'finance' && <Finance />}
      {section === 'resources' && <Resources />}
      {section === 'book' && <BookService />}
    </div>
  );
};

export default Dashboard;
