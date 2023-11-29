import "./App.css";
import Breadcrumb from "./components/Breadcrumb";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Masters from "./components/Masters";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Modal from "./components/Modal";
import Bank from "./components/Bank";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Main />} />
        {/* <Route path="/" element={<Home />} /> */}

        <Route path="/master" element={<Masters />}>
          <Route path="bank" element={<Bank />} />
          {/* <Route index path="banks/add" element={<Modal />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
