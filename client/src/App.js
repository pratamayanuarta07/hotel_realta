import "./App.css";

import { Routes, Route } from "react-router-dom";

import Main from "./components/master/Main";
import Loc from "./components/master/Loc";
import Pol from "./components/master/Pol";
import Cat from "./components/master/Cat";
import Pri from "./components/master/Pri";
import Ser from "./components/master/Ser";

function App() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Main />} />
        
        <Route path="/master">
          <Route path="locations" element={<Loc />} />
          <Route path="policy" element={<Pol />} />
          <Route path="category" element={<Cat />} />
          <Route path="priceitems" element={<Pri />} />
          <Route path="servicetasks" element={<Ser />} />
        </Route>

        {/* <Route path="/departement" element={<></>}></Route> */}

      </Routes>
    </div>
  );
}

export default App;
