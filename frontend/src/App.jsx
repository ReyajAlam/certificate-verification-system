import React from 'react';
import AddCertificate from './components/AddCertificate';
import VerifyCertificate from './components/VerifyCertificate';

function App() {
  return (
    <div className="min-h-screen bg-gray-500  ">
      <div className="container mx-auto py-8 flex text-center ">
        <h1 className="text-4xl font-bold text-center mb-8">Certificate Verification System</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AddCertificate />
          <VerifyCertificate />
        </div>
      </div>
    </div>
  );
}

export default App;
