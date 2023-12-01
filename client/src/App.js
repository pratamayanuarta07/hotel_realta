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
          {/* <Route index path="banks/add" element={<Modal />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
