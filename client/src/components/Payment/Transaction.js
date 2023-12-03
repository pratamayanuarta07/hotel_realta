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
      debit: "Rp.500000", // Nilai dalam Rupiah
      credit: 0,
      note: "Topup",
      orderNumber: "",
      source: "11-4567-890",
      transactionRef: "REF123",
      type: "TP",
      user: "Doel",
    },
    {
      transactionNumber: "TRX#2021232-0001",
      transactionDate: "2023-12-01",
      debit: "Rp.1200000", // Nilai dalam Rupiah
      credit: 0,
      note: "Booking",
      orderNumber: "BO-202239211-001",
      source: "11-3214-890",
      transactionRef: "REF321",
      type: "TRB",
      user: "Kasim",
    },
    {
      transactionNumber: "TRX#2021874-0001",
      transactionDate: "2023-12-05",
      debit: "Rp.200000", // Nilai dalam Rupiah
      credit: 0,
      note: "Food Order",
      orderNumber: "PO-202230123-001",
      source: "22-6767-123",
      transactionRef: "REF112",
      type: "ORM",
      user: "Jasmien",
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
      <div class="d-flex justify-content-center">
        {/* Search Bar */}
        <div class="me-md-3 mt-md-1">
          <input class="rounded" type="text" placeholder="Transaction Number" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <div class="me-md-3 mt-md-1">
          <a href="#" class="btn btn-dark btn-sm" role="button" data-bs-toggle="button">
            Search
          </a>
        </div>

        <select class="rounded mt-md-1" value={selectedPaymentType} onChange={(e) => setSelectedPaymentType(e.target.value)}>
          <option value="All">Payment Types</option>
          <option value="TP">Topup</option>
          <option value="TRB">Booking</option>
          <option value="ORM">Food Order</option>
        </select>
      </div>

      {/* Transaction Table */}
      <table class="table align-middle mt-md-3">
        <thead class="table-success fs-6">
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
        <tbody class="fs-6">
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
