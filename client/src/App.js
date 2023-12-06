import "./App.css";

import { Routes, Route } from "react-router-dom";

import Main from "./components/resto/Main";
import ResMen from "./components/resto/ResMen";

function App() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Main />} />

        <Route path="/resto">
          <Route path="menus" element={<ResMen />} />
        </Route>

        {/* <Route path="/departement" element={<></>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
