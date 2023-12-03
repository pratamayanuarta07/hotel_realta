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
    <div className="container d-flex">
      {/* Left Side - Source */}
      <div className="col-6">
        <h2>Source</h2>
        <div className="d-flex justify-content-start mb-md-3">
          <label className="mt-md-2">Source Name</label>
          <div class="input-group rounded col-8">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={sourceName} onChange={(e) => setSourceName(e.target.value)} />
            <span class="input-group-text border-0" id="search-addon">
              <i class="fas fa-search"></i>
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-start mb-md-3">
          <label className="me-md-5">Account</label>
          <select data-mdb-select-init data-mdb-filter="true" className="rounded col-4" onChange={(e) => handleSourceAccountChange(e.target.value)}>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
          </select>
        </div>
        <div className="d-flex justify-content-start">
          <div className="">
            <label className="col-form-label">Current Saldo</label>
          </div>
          <div className="col-4">
            <input type="number" id="current_saldo_source" placeholder="0" className="form-control border-0 bg-white text-center fs-7" disabled value={sourceBalance} onChange={(e) => setSourceBalance(e.target.value)} />
            <hr className="mt-md-1 border-bottom border-black" />
          </div>
        </div>
        <div className="row mt-md-5">
          <div className="col-6 justify-content-center">
            <button type="submit" className="btn btn-primary w-75">
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
          <div class="input-group rounded col-8">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={targetName} onChange={(e) => setTargetName(e.target.value)} />
            <span class="input-group-text border-0" id="search-addon">
              <i class="fas fa-search"></i>
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-start mb-md-3">
          <label className="me-md-5">Account</label>
          <select data-mdb-select-init data-mdb-filter="true" className="rounded col-4" onChange={(e) => handleTargetAccountChange(e.target.value)}>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
          </select>
        </div>
        <div className="d-flex justify-content-start">
          <div className="">
            <label className="col-form-label">Current Saldo</label>
          </div>
          <div className="col-4">
            <input type="number" id="current_saldo_source" placeholder="0" className="form-control border-0 bg-white text-center fs-7" disabled value={targetBalance} onChange={(e) => setTargetBalance(e.target.value)} />
            <hr className="mt-md-1 border-bottom border-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topup;
