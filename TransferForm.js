// TransferForm.js

import { useState } from 'react';
import { ethers } from 'ethers';
import './styles.css'; // Adjust the path if necessary

const TransferForm = ({ onSubmit }) => {
  const [connectedWallet, setConnectedWallet] = useState(null);
  const [connectedBeneficiary, setConnectedBeneficiary] = useState(null);
  const [userAddress, setUserAddress] = useState('');
  const [beneficiaryAddress, setBeneficiaryAddress] = useState('');
  const [platform, setPlatform] = useState('');
  const [transferDate, setTransferDate] = useState('');

  const connectToMetaMask = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        setConnectedWallet(accounts[0]);
        setUserAddress(accounts[0]);
      } else {
        console.error('MetaMask not found.');
      }
    } catch (error) {
      console.error('Error connecting to MetaMask:', error.message);
    }
  };

  const connectBeneficiaryToMetaMask = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        setConnectedBeneficiary(accounts[0]);
        setBeneficiaryAddress(accounts[0]);
      } else {
        console.error('MetaMask not found.');
      }
    } catch (error) {
      console.error('Error connecting beneficiary to MetaMask:', error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ userAddress, beneficiaryAddress, platform, transferDate });
    alert('Transfer scheduled successfully!')
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Transfer Form</h2>
      <div>
        <label>User Address:</label>
        <input type="text" value={userAddress} readOnly />
        <button type="button" onClick={connectToMetaMask}>
          Connect User to MetaMask
        </button>
      </div>
      <div>
        <label>Beneficiary Address:</label>
        <input type="text" value={beneficiaryAddress} readOnly />
        <button type="button" onClick={connectBeneficiaryToMetaMask}>
          Connect Beneficiary to MetaMask
        </button>
      </div>
      <div>
        <label>Platform:</label>
        <input type="text" value={platform} onChange={(e) => setPlatform(e.target.value)} />
      </div>
      <div>
        <label>Transfer Date:</label>
        <input
          type="datetime-local"
          value={transferDate}
          onChange={(e) => setTransferDate(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default TransferForm;


