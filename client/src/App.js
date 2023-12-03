import "./App.css";
import Breadcrumb from "./components/Payment/Breadcrumb";
import Nav from "./components/Payment/Nav";
import { Routes, Route } from "react-router-dom";
import Masters from "./components/Payment/Masters";
import Home from "./components/Payment/Home";
import Menu from "./components/Payment/Menu";
import Modal from "./components/Payment/Modal";
import BankPage from "./components/Payment/BankPage";
import FintechPage from "./components/Payment/FintechPage";
import TopupPage from "./components/Payment/TopupPage";
import AccountPage from "./components/Payment/AccountPage";
import TransactionPage from "./components/Payment/TransactionPage";
import Main from "./components/Payment/Main";

function App() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Main />} />
        {/* <Route path="/" element={<Home />} /> */}

        <Route path="/payment">
          <Route path="bank" element={<BankPage />} />
          <Route path="fintech" element={<FintechPage />} />
          <Route path="topup" element={<TopupPage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="transaction" element={<TransactionPage />} />
          {/* <Route index path="banks/add" element={<Modal />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
