import React, { useState } from "react";

const Topup = () => {
  const [sourceName, setSourceName] = useState("");
  const [sourceAccount, setSourceAccount] = useState("");
  const [sourceBalance, setSourceBalance] = useState(0);

  const [targetName, setTargetName] = useState("");
  const [targetAccount, setTargetAccount] = useState("");
  const [targetBalance, setTargetBalance] = useState(0);

  const handleSourceSearch = (name) => {
    // Implement search logic for source
    // Update source related states accordingly
  };

  const handleTargetSearch = (name) => {
    // Implement search logic for target
    // Update target related states accordingly
  };

  const handleSourceAccountChange = (account) => {
    // Handle source account dropdown change
    setSourceAccount(account);
  };

  const handleTargetAccountChange = (account) => {
    // Handle target account dropdown change
    setTargetAccount(account);
  };

  // Render UI
  return (
    <div>
      {/* Left Side - Source */}
      <div>
        <h2>Source</h2>
        <form>
          <label>Search Name:</label>
          <input type="text" value={sourceName} onChange={(e) => setSourceName(e.target.value)} />

          <label>Account:</label>
          {/* Implement dropdown for source account */}
          <select onChange={(e) => handleSourceAccountChange(e.target.value)}>{/* Dropdown options */}</select>

          <label>Current Saldo:</label>
          <input type="number" value={sourceBalance} onChange={(e) => setSourceBalance(e.target.value)} />
        </form>
      </div>

      {/* Right Side - Target */}
      <div>
        <h2>Target</h2>
        <form>
          <label>Search Name:</label>
          <input type="text" value={targetName} onChange={(e) => setTargetName(e.target.value)} />

          <label>Account:</label>
          {/* Implement dropdown for target account */}
          <select onChange={(e) => handleTargetAccountChange(e.target.value)}>{/* Dropdown options */}</select>

          <label>Current Saldo:</label>
          <input type="number" value={targetBalance} onChange={(e) => setTargetBalance(e.target.value)} />
        </form>
      </div>
    </div>
  );
};

export default Topup;
