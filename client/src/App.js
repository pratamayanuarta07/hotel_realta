import "./App.css";
import Breadcrumb from "./components/Breadcrumb";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Masters from "./components/Masters";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Modal from "./components/Modal";
import BankPage from "./components/BankPage";
import FintechPage from "./components/FintechPage";
import TopupPage from "./components/TopupPage";
import AccountPage from "./components/AccountPage";
import TransactionPage from "./components/TransactionPage";
import Main from "./components/Main";

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
          {/* <Route path="transaction" element={<TransactionPage />} /> */}
          {/* <Route index path="banks/add" element={<Modal />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
