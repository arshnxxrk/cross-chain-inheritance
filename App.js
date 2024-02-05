// App.js
import React from 'react';
import TransferForm from './TransferForm';

const App = () => {
  const handleTransferSubmit = (formData) => {
    // Handle the form data submission (we'll do this in backend later)
    console.log('Form Data:', formData);
  };

  return (
    <div>
      <h1>Cross-Chain Inheritance Platform</h1>
      <TransferForm onSubmit={handleTransferSubmit} />
    </div>
  );
};

export default App;
