import React, { useState } from "react";

const Topup = () => {
  // Data contoh
  const sourceAccounts = [
    { id: 1, name: "Source Account 1", balance: 5000 },
    { id: 2, name: "Source Account 2", balance: 8000 },
    { id: 3, name: "Source Account 3", balance: 10000 },
  ];

  const targetAccounts = [
    { id: 4, name: "Target Account 1", balance: 3000 },
    { id: 5, name: "Target Account 2", balance: 6000 },
    { id: 6, name: "Target Account 3", balance: 12000 },
  ];

  const [sourceName, setSourceName] = useState("");
  const [sourceAccount, setSourceAccount] = useState("");
  const [sourceBalance, setSourceBalance] = useState(0);

  const [targetName, setTargetName] = useState("");
  const [targetAccount, setTargetAccount] = useState("");
  const [targetBalance, setTargetBalance] = useState(0);

  const handleSourceSearch = (name) => {
    // Implement search logic for source
    // For now, let's just set the source name based on the input
    setSourceName(name);
  };

  const handleTargetSearch = (name) => {
    // Implement search logic for target
    // For now, let's just set the target name based on the input
    setTargetName(name);
  };

  const handleSourceAccountChange = (accountId) => {
    // Handle source account dropdown change
    const selectedAccount = sourceAccounts.find((account) => account.id === parseInt(accountId));
    if (selectedAccount) {
      setSourceAccount(selectedAccount);
      setSourceBalance(selectedAccount.balance);
    }
  };

  const handleTargetAccountChange = (accountId) => {
    // Handle target account dropdown change
    const selectedAccount = targetAccounts.find((account) => account.id === parseInt(accountId));
    if (selectedAccount) {
      setTargetAccount(selectedAccount);
      setTargetBalance(selectedAccount.balance);
    }
  };

  const updateSourceBalance = () => {
    // Simulate fetching source balance from an external source (API call)
    // For now, let's generate a random balance for demonstration purposes
    const randomBalance = Math.floor(Math.random() * 10000);
    setSourceBalance(randomBalance);
  };

  const updateTargetBalance = () => {
    // Simulate fetching target balance from an external source (API call)
    // For now, let's generate a random balance for demonstration purposes
    const randomBalance = Math.floor(Math.random() * 10000);
    setTargetBalance(randomBalance);
  };

  const handleTransfer = () => {
    // Check if there is enough balance in the source account
    if (sourceBalance > 0) {
      // Simulate the transfer process
      // For now, let's just log a success message
      console.log(`Transfer success from ${sourceName} to ${targetName}`);
      // After successful transfer, update the balances
      updateSourceBalance();
      updateTargetBalance();
    } else {
      // Log an error message if there is not enough balance
      console.error("Insufficient balance for transfer");
    }
  };

  return (
    <div className="container d-flex">
      {/* Left Side - Source */}
      <div className="col-6">
        <h2>Source</h2>
        <div className="d-flex justify-content-start mb-md-3">
          <label className="mt-md-2">Source Name</label>
          <div className="input-group rounded col-8">
            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={sourceName} onChange={(e) => handleSourceSearch(e.target.value)} />
            <span className="input-group-text border-0" id="search-addon">
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-start mb-md-3">
          <label className="me-md-5">Account</label>
          <select data-mdb-select-init data-mdb-filter="true" className="rounded col-4" onChange={(e) => handleSourceAccountChange(e.target.value)}>
            <option value="" disabled selected>
              Select Source Account
            </option>
            {sourceAccounts.map((account) => (
              <option key={account.id} value={account.id}>
                {account.name}
              </option>
            ))}
          </select>
        </div>
        <div className="d-flex justify-content-start">
          <div className="">
            <label className="col-form-label">Current Saldo</label>
          </div>
          <div className="col-4">
            <input type="number" id="current_saldo_source" placeholder="0" className="form-control border-0 bg-white text-center fs-7" disabled value={sourceBalance} />
            <hr className="mt-md-1 border-bottom border-black" />
          </div>
        </div>
        <div className="row mt-md-5">
          <div className="col-6 justify-content-center">
            <button type="submit" className="btn btn-primary w-75" onClick={handleTransfer}>
              Transfer
            </button>
          </div>
          <div className="col-5">
            <input type="text" required value="0" id="saldo" className="form-control border-black" />
          </div>
        </div>
      </div>

      {/* Right Side - Target */}
      <div className="col-6">
        <h2>Target</h2>
        <div className="d-flex justify-content-start mb-md-3">
          <label className="mt-md-2 me-md-5">Target</label>
          <div className="input-group rounded col-8">
            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={targetName} onChange={(e) => handleTargetSearch(e.target.value)} />
            <span className="input-group-text border-0" id="search-addon">
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-start mb-md-3">
          <label className="me-md-5">Account</label>
          <select data-mdb-select-init data-mdb-filter="true" className="rounded col-4" onChange={(e) => handleTargetAccountChange(e.target.value)}>
            <option value="" disabled selected>
              Select Target Account
            </option>
            {targetAccounts.map((account) => (
              <option key={account.id} value={account.id}>
                {account.name}
              </option>
            ))}
          </select>
        </div>
        <div className="d-flex justify-content-start">
          <div className="">
            <label className="col-form-label">Current Saldo</label>
          </div>
          <div className="col-4">
            <input type="number" id="current_saldo_source" placeholder="0" className="form-control border-0 bg-white text-center fs-7" disabled value={targetBalance} />
            <hr className="mt-md-1 border-bottom border-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topup;
