import React, { useState } from "react";

const Topup = () => {
  const sourceAccounts = [
    { id: 1, accountNumber: "131-3456-22", name: "Bank BCA", balance: 10000000 },
    { id: 2, accountNumber: "123-7382-21", name: "Bank BSI", balance: 100000 },
  ];

  const targetAccounts = [
    { id: 4, accountNumber: "321-6543-00", name: "Goto", balance: 90000 },
    { id: 5, accountNumber: "322-6544-02", name: "Flip", balance: 9000000 },
  ];

  const [sourceaccnum, setSourceaccnum] = useState("");
  const [sourceName, setSourceName] = useState("");
  const [sourceAccount, setSourceAccount] = useState("");
  const [sourceBalance, setSourceBalance] = useState(0);

  const [targetaccnum, setTargetaccnum] = useState("");
  const [targetName, setTargetName] = useState("");
  const [targetAccount, setTargetAccount] = useState("");
  const [targetBalance, setTargetBalance] = useState(0);

  const [transferAmount, setTransferAmount] = useState(0);
  const [transferAmount2, setTransferAmount2] = useState(0);
  const [transferAmount3, setTransferAmount3] = useState(0);

  const handleSourceSearch = (name) => {
    setSourceName(name);
  };

  const handleTargetSearch = (name) => {
    setTargetName(name);
  };

  const handleSourceAccountChange = (accountId) => {
    const selectedAccount = sourceAccounts.find((account) => account.id === parseInt(accountId));
    if (selectedAccount) {
      setSourceAccount(selectedAccount.accountNumber);
      setSourceBalance(selectedAccount.balance);

      // Set the value for input formid = 1
      setTransferAmount(selectedAccount.balance);

      // Calculate the total for input formid = 3
      const totalBalance = selectedAccount.balance + (targetBalance || 0);
      setTransferAmount3(totalBalance);
    }
  };

  const handleTargetAccountChange = (accountId) => {
    const selectedAccount = targetAccounts.find((account) => account.id === parseInt(accountId));
    if (selectedAccount) {
      setTargetAccount(selectedAccount.accountNumber);
      setTargetBalance(selectedAccount.balance);

      // Set the value for input formid = 3
      setTransferAmount3(selectedAccount.balance);

      // Calculate the total for input formid = 2
      const totalBalance = (sourceBalance || 0) + selectedAccount.balance;
      setTransferAmount2(totalBalance);
    }
  };

  const updateSourceBalance = () => {
    // Simulate fetching source balance from an external source (API call)
    // For now, let's generate a random balance for demonstration purposes
    const randomBalance = Math.floor(Math.random() * 10000);
    setSourceBalance(randomBalance);

    // Set the value for input formid = 1
    setTransferAmount(randomBalance);

    // Calculate the total for input formid = 3
    const totalBalance = randomBalance + (targetBalance || 0);
    setTransferAmount3(totalBalance);

    // Set the value for input formid = 2 (formid1 + formid3)
    setTransferAmount2(randomBalance + totalBalance);
  };

  const updateTargetBalance = () => {
    // Simulate fetching target balance from an external source (API call)
    // For now, let's generate a random balance for demonstration purposes
    const randomBalance = Math.floor(Math.random() * 10000);
    setTargetBalance(randomBalance);
    // Set the value for input formid = 3
    // Assuming you want to set the transfer amount in the source section
    setTransferAmount(randomBalance);
  };

  const handleTransfer = () => {
    // Check if there is enough balance in the source account
    if (sourceBalance > 0) {
      // Simulate the transfer process
      // For now, let's just log a success message
      console.log(`Transfer success from ${sourceName} to ${targetName}`);
      // After a successful transfer, update the balances
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
            <input type="search" className="form-control rounded" placeholder="Search Bank" aria-label="Search" aria-describedby="search-addon" value={sourceName} onChange={(e) => handleSourceSearch(e.target.value)} />
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
                {account.accountNumber}
              </option>
            ))}
          </select>
        </div>
        <div className="d-flex justify-content-start">
          <div className="">
            <label className="col-form-label">Current Saldo</label>
          </div>
          <div className="col-4">
            <input id="postfix" type="text" formid="form1" className="form-control" readOnly value={transferAmount || ""} />
            <label className="form-label" htmlFor="form1">
              Enter the amount
            </label>
          </div>
        </div>
        <div className="row mt-md-5">
          <div className="col-6 justify-content-center">
            <button type="submit" className="btn btn-primary w-75" onClick={handleTransfer}>
              Transfer
            </button>
          </div>
          <div className="col-5">
            <input id="postfix" type="text" formid="form2" className="form-control" />
            <label className="form-label" htmlFor="form2">
              Enter the amount
            </label>
          </div>
        </div>
      </div>

      {/* Right Side - Target */}
      <div className="col-6">
        <h2>Target</h2>
        <div className="d-flex justify-content-start mb-md-3">
          <label className="mt-md-2 me-md-5">Target</label>
          <div className="input-group rounded col-8">
            <input type="search" className="form-control rounded" placeholder="Search Fintech" aria-label="Search" aria-describedby="search-addon" value={targetName} onChange={(e) => handleTargetSearch(e.target.value)} />
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
                {account.accountNumber}
              </option>
            ))}
          </select>
        </div>
        <div className="d-flex justify-content-start">
          <div className="">
            <label className="col-form-label">Current Saldo</label>
          </div>
          <div className="col-4">
            <input id="postfix" type="text" formid="form3" className="form-control" readOnly value={transferAmount3 || ""} />
            <label className="form-label" htmlFor="form3">
              Enter the amount
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topup;
