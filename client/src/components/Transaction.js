import React, { useState } from "react";

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(amount);
};

const TransactionList = () => {
  const [transactions, setTransactions] = useState([
    // Data transaksi awal
    {
      transactionNumber: "TRX#2021127-0001",
      transactionDate: "2023-12-07",
      debit: 500000, // Nilai dalam Rupiah
      credit: 0,
      note: "Topup",
      orderNumber: "BO-202230123-001",
      source: "11-4567-890",
      transactionRef: "REF123",
      type: "TP",
      user: "John Doe",
    },
    // Tambahkan data transaksi lainnya jika diperlukan
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPaymentType, setSelectedPaymentType] = useState("All");

  const filteredTransactions = transactions.filter((transaction) => {
    // Filter berdasarkan nomor transaksi
    const isMatchingTransactionNumber = transaction.transactionNumber.toLowerCase().includes(searchTerm.toLowerCase());

    // Filter berdasarkan tipe pembayaran
    const isMatchingPaymentType = selectedPaymentType === "All" || transaction.type === selectedPaymentType;

    return isMatchingTransactionNumber && isMatchingPaymentType;
  });

  return (
    <div>
      <h1>Transaction List</h1>

      {/* Search Bar */}
      <input type="text" placeholder="Search by Transaction Number" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

      {/* Dropdown Type Payment */}
      <select value={selectedPaymentType} onChange={(e) => setSelectedPaymentType(e.target.value)}>
        <option value="All">All Types</option>
        <option value="TP">Topup</option>
        <option value="TRB">Booking</option>
        <option value="ORM">Food Order</option>
      </select>

      {/* Transaction Table */}
      <table>
        <thead>
          <tr>
            <th>Transaction Number</th>
            <th>Transaction Date</th>
            <th>Debit</th>
            <th>Credit</th>
            <th>Note</th>
            <th>Order Number</th>
            <th>Source</th>
            <th>Transaction Ref</th>
            <th>Type</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.transactionNumber}>
              <td>{transaction.transactionNumber}</td>
              <td>{transaction.transactionDate}</td>
              <td>{formatCurrency(transaction.debit)}</td>
              <td>{formatCurrency(transaction.credit)}</td>
              <td>{transaction.note}</td>
              <td>{transaction.orderNumber}</td>
              <td>{transaction.source}</td>
              <td>{transaction.transactionRef}</td>
              <td>{transaction.type}</td>
              <td>{transaction.user}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
