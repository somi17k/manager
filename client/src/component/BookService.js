import React, { useState } from 'react';
import axios from 'axios';

const BookService = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    preferredDate: '',
    serviceType: 'visit',
  });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await axios.post('http://localhost:5000/api/bookings', formData);
    setMessage(res.data.message);
    setFormData({
      name: '',
      phone: '',
      address: '',
      preferredDate: '',
      serviceType: 'visit',
    });
  };

  return (
    <div>
      <h2>Book a Visit or Executive Call</h2>
      <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
      <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
      <input name="address" placeholder="Farm Address" value={formData.address} onChange={handleChange} />
      <input type="datetime-local" name="preferredDate" value={formData.preferredDate} onChange={handleChange} />
      <select name="serviceType" value={formData.serviceType} onChange={handleChange}>
        <option value="visit">On-field Visit</option>
        <option value="call">Executive Call</option>
      </select>
      <button onClick={handleSubmit}>Book Now</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BookService;
