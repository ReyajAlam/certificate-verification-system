import React, { useState } from 'react';
import axios from 'axios';

const AddCertificate = () => {
  const [certificateId, setCertificateId] = useState('');
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [issuedDate, setIssuedDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/certificates/add', {
        certificateId, name, course, issuedDate
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Failed to add certificate');
    }
  };

  return (
    <div className="max-w-lg mx-auto my-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-center mb-4">Add Certificate</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={certificateId}
          onChange={(e) => setCertificateId(e.target.value)}
          placeholder="Certificate ID"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          placeholder="Course"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="date"
          value={issuedDate}
          onChange={(e) => setIssuedDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add Certificate
        </button>
      </form>
      {message && <p className="mt-4 text-center text-green-600">{message}</p>}
    </div>
  );
};

export default AddCertificate;
