import React, { useState } from 'react';
import axios from 'axios';

const VerifyCertificate = () => {
  const [certificateId, setCertificateId] = useState('');
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState('');

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/api/certificates/verify/${certificateId}`);
      setCertificate(response.data);
      setError('');
    } catch (error) {
      setError('Certificate not found');
      setCertificate(null);
    }
  };

  return (
    <div className="max-w-lg mx-auto my-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-center mb-4">Verify Certificate</h2>
      <form onSubmit={handleVerify} className="space-y-4">
        <input
          type="text"
          value={certificateId}
          onChange={(e) => setCertificateId(e.target.value)}
          placeholder="Certificate ID"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
        >
          Verify
        </button>
      </form>
      {certificate && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-center">Certificate Details</h3>
          <p className="text-center">Name: {certificate.name}</p>
          <p className="text-center">Course: {certificate.course}</p>
          <p className="text-center">Issued Date: {new Date(certificate.issuedDate).toLocaleDateString()}</p>
        </div>
      )}
      {error && <p className="mt-4 text-center text-red-600">{error}</p>}
    </div>
  );
};

export default VerifyCertificate;
