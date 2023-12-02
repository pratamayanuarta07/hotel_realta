import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Account = () => {
  // State untuk menyimpan data akun
  const [accounts, setAccounts] = useState([
    { id: 1, accountNumber: "123456", description: "Main Account", balance: 1000, type: "Savings" },
    { id: 2, accountNumber: "789012", description: "Secondary Account", balance: 500, type: "Checking" },
  ]);

  // State untuk mengelola data formulir modal
  const [formData, setFormData] = useState({
    accountNumber: "",
    balance: "",
    type: "",
  });

  // State untuk menangani tampilan modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State untuk menyimpan ID akun yang akan diubah atau dihapus
  const [selectedAccountId, setSelectedAccountId] = useState(null);

  // Fungsi untuk menangani perubahan pada formulir modal
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fungsi untuk menangani penambahan akun baru atau mengedit akun
  const handleSaveAccount = () => {
    // Memastikan tidak ada kolom yang kosong
    if (formData.accountNumber && formData.balance && formData.type) {
      // Mengecek apakah sedang dalam mode edit atau tambah baru
      if (selectedAccountId) {
        // Mode edit: mengupdate data akun yang ada dengan data baru
        setAccounts((prevAccounts) => prevAccounts.map((account) => (account.id === selectedAccountId ? { ...account, accountNumber: formData.accountNumber, balance: parseFloat(formData.balance), type: formData.type } : account)));
        setSelectedAccountId(null); // Mereset ID akun yang akan diubah
      } else {
        // Mode tambah baru: menambahkan akun baru ke dalam daftar akun
        const newAccount = {
          id: accounts.length + 1,
          accountNumber: formData.accountNumber,
          description: `Account ${accounts.length + 1}`,
          balance: parseFloat(formData.balance),
          type: formData.type,
        };
        setAccounts([...accounts, newAccount]);
      }

      // Menutup modal
      setIsModalOpen(false);

      // Mereset formulir modal
      setFormData({ accountNumber: "", balance: "", type: "" });
    } else {
      alert("Silakan isi semua kolom formulir!");
    }
  };

  // Fungsi untuk menangani pengeditan data akun
  const handleEditAccount = (accountId) => {
    const selectedAccount = accounts.find((account) => account.id === accountId);
    setFormData({
      accountNumber: selectedAccount.accountNumber,
      balance: String(selectedAccount.balance),
      type: selectedAccount.type,
    });
    setSelectedAccountId(accountId);
    setIsModalOpen(true);
  };

  // Fungsi untuk menangani penghapusan data akun
  const handleDeleteAccount = (accountId) => {
    // Filter data akun untuk menghilangkan akun dengan ID yang sesuai
    setAccounts((prevAccounts) => prevAccounts.filter((account) => account.id !== accountId));
  };

  return (
    <div className="container">
      <h1>Account Management</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Account Number</th>
            <th>Description</th>
            <th>Balance</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td>{account.accountNumber}</td>
              <td>{account.description}</td>
              <td>{account.balance}</td>
              <td>{account.type}</td>
              <td>
                <button className="btn btn-warning" onClick={() => handleEditAccount(account.id)}>
                  <FaEdit /> Edit
                </button>
                <button className="btn btn-danger" onClick={() => handleDeleteAccount(account.id)}>
                  <FaTrash /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Tombol untuk membuka modal */}
      <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
        Add Data
      </button>

      {/* Modal untuk menambahkan atau mengedit data */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add/Edit Account</h5>
                <button type="button" className="btn-close" onClick={() => setIsModalOpen(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Account Number:</label>
                  <input className="form-control" type="text" name="accountNumber" value={formData.accountNumber} onChange={handleFormChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Balance:</label>
                  <input className="form-control" type="text" name="balance" value={formData.balance} onChange={handleFormChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Type:</label>
                  <input className="form-control" type="text" name="type" value={formData.type} onChange={handleFormChange} />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>
                  Close
                </button>
                <button className="btn btn-primary" onClick={handleSaveAccount}>
                  {selectedAccountId ? "Edit Account" : "Add Account"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
