import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const Account = () => {
  // State untuk menyimpan data akun
  const [accounts, setAccounts] = useState([
    { id: 1, accountNumber: "131-3456-22", description: "BCA", balance: "Rp.10.000.000", type: "Debit" },
    { id: 2, accountNumber: "321-6543-00", description: "GoTo", balance: "Rp.90.000", type: "Fintech" },
    { id: 3, accountNumber: "123-7382-21", description: "BSI", balance: "Rp.100.000", type: "Debit" },
    { id: 4, accountNumber: "322-6544-02", description: "Flip", balance: "Rp.9.000.000", type: "Fintech" },
  ]);

  // State untuk mengelola data formulir modal
  const [accountFormData, setAccountFormData] = useState({
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
    setAccountFormData({ ...accountFormData, [name]: value });
  };

  // Fungsi untuk menangani penambahan atau pengeditan data akun
  const handleSaveAccount = () => {
    // Memastikan tidak ada kolom yang kosong
    if (accountFormData.accountNumber && accountFormData.balance && accountFormData.type) {
      // Validasi format account number
      const accountNumberRegex = /^\d{3}-\d{4}-\d{2}$/;
      if (!accountNumberRegex.test(accountFormData.accountNumber)) {
        alert("Format account number tidak valid. Gunakan format xxx-xxxx-xx.");
        return;
      }

      // Mengecek apakah sedang dalam mode edit atau tambah baru
      if (selectedAccountId) {
        // Mode edit: mengupdate data akun yang ada dengan data baru
        setAccounts((prevAccounts) =>
          prevAccounts.map((account) => (account.id === selectedAccountId ? { ...account, accountNumber: accountFormData.accountNumber, balance: parseFloat(accountFormData.balance), type: accountFormData.type } : account))
        );
        setSelectedAccountId(null); // Mereset ID akun yang akan diubah
      } else {
        // Mode tambah baru: menambahkan akun baru ke dalam daftar akun
        const newAccount = {
          id: accounts.length + 1,
          accountNumber: accountFormData.accountNumber,
          description: getDescription(accountFormData.accountNumber),
          balance: parseFloat(accountFormData.balance),
          type: accountFormData.type,
        };
        setAccounts([...accounts, newAccount]);
      }

      // Menutup modal
      setIsModalOpen(false);

      // Mereset formulir modal
      setAccountFormData({ accountNumber: "", balance: "", type: "" });
    } else {
      alert("Silakan isi semua kolom formulir!");
    }
  };

  // Fungsi untuk mendapatkan deskripsi berdasarkan account number
  const getDescription = (accountNumber) => {
    switch (accountNumber.substring(0, 3)) {
      case "123":
        return "BCA";
      case "456":
        return "Goto";
      case "789":
        return "Flip";
      default:
        return "Unknown";
    }
  };

  // Fungsi untuk menangani pengeditan data akun
  const handleEditAccount = (accountId) => {
    const selectedAccount = accounts.find((account) => account.id === accountId);
    setAccountFormData({
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
      <table className="table table-bordered align-middle">
        <thead className="table-success fs-6">
          <tr>
            <th>Account Number</th>
            <th>Description</th>
            <th>Balance</th>
            <th>Type</th>
            <th scope="col" colSpan={2} className="col-1">
              <div class="d-grid">
                <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <FaPlus />
                  Add
                </button>
              </div>
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Add Account
                      </h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body row align-items-center">
                      <div className="col-auto">
                        <label>Account Number</label>
                      </div>
                      <div className="col-auto">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="xxx-xxxx-xx"
                          value={accountFormData.accountNumber}
                          onChange={(e) =>
                            setAccountFormData({
                              ...accountFormData,
                              accountNumber: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div class="modal-body row align-items-center">
                      <div className="col-auto">
                        <label>Balance</label>
                      </div>
                      <div className="col-auto">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Rp.10.000.000"
                          value={accountFormData.balance}
                          onChange={(e) =>
                            setAccountFormData({
                              ...accountFormData,
                              balance: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div class="modal-body row align-items-center">
                      <div className="col-auto">
                        <label>Type</label>
                      </div>
                      <div className="col-auto">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Savings"
                          value={accountFormData.type}
                          onChange={(e) =>
                            setAccountFormData({
                              ...accountFormData,
                              type: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Cancel
                      </button>
                      <button onClick={handleSaveAccount} type="submit" class="btn btn-dark" data-bs-dismiss="modal">
                        <FaPlus /> Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </th>
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
                <div class="d-grid">
                  <button type="button" class="btn btn-transparent" data-bs-toggle="modal" data-bs-target="#editModal">
                    <FaEdit /> Edit
                  </button>
                </div>
                <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="editModalLabel">
                          Edit Account
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body row align-items-center">
                        <div className="col-auto">
                          <label>Account Number</label>
                        </div>
                        <div className="col-auto">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="xxx-xxxx-xx"
                            value={accountFormData.accountNumber}
                            onChange={(e) =>
                              setAccountFormData({
                                ...accountFormData,
                                accountNumber: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div class="modal-body row align-items-center">
                        <div className="col-auto">
                          <label>Balance</label>
                        </div>
                        <div className="col-auto">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Rp.10.000.000"
                            value={accountFormData.balance}
                            onChange={(e) =>
                              setAccountFormData({
                                ...accountFormData,
                                balance: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div class="modal-body row align-items-center">
                        <div className="col-auto">
                          <label>Type</label>
                        </div>
                        <div className="col-auto">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Savings"
                            value={accountFormData.type}
                            onChange={(e) =>
                              setAccountFormData({
                                ...accountFormData,
                                type: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                          Cancel
                        </button>
                        <button className="btn btn-danger" onClick={() => handleEditAccount(account.id)}>
                          <FaEdit /> Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn btn-transparent" onClick={() => handleDeleteAccount(account.id)}>
                  <FaTrash /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Tombol untuk membuka modal */}
    </div>
  );
};

export default Account;
