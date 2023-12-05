//import "./App.css";
//import "./test.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/master/Main";
import Loc from "./components/master/Loc";
import Pol from "./components/master/Pol";
import Cat from "./components/master/Cat";
import Pri from "./components/master/Pri";
import Ser from "./components/master/Ser";
import DeptNew from "./components/HR/dept_new";
import LayoutNew from "./components/HR/layout_new";
import AddDeptNew from "./components/HR/add_dept_new";
import EditDeptNew from "./components/HR/edit_dept_new";
import EmployeeNew from "./components/HR/employee_new";
import AddEmployeeNew from "./components/HR/add_employee_new";
import EditEmployeeNew from "./components/HR/edit_employee_new";
import WorkOrderNew from "./components/HR/work_order_new";
import AddWoroNew from "./components/HR/add_woro_new";
import EditWoroNew from "./components/HR/edit_woro_new";
import WorkOrderDetailNew from "./components/HR/work_order_detail_new";
import AddWodeNew from "./components/HR/add_wode_new";
import EditWodeNew from "./components/HR/edit_wode_new";
import Menu from "./components/Payment/Menu";
import Modal from "./components/Payment/Modal";
import BankPage from "./components/Payment/BankPage"
import FintechPage from "./components/Payment/FintechPage";
import TopupPage from "./components/Payment/TopupPage";
import AccountPage from "./components/Payment/AccountPage";
import TransactionPage from "./components/Payment/TransactionPage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/master">
          <Route path="locations" element={<Loc />} />
          <Route path="policy" element={<Pol />} />
          <Route path="category" element={<Cat />} />
          <Route path="priceitems" element={<Pri />} />
          <Route path="servicetasks" element={<Ser />} />
        </Route>
        <Route path="/HR" element={<LayoutNew></LayoutNew>}>
          <Route path="dept" element={<DeptNew></DeptNew>}></Route>
          <Route path="dept/add_dept" element={<AddDeptNew></AddDeptNew>}></Route>
          <Route path="dept/edit_dept/:id/:name" element={<EditDeptNew></EditDeptNew>}></Route>
          <Route path="employee" element={<EmployeeNew></EmployeeNew>}></Route>
          <Route path="employee/add_employee" element={<AddEmployeeNew></AddEmployeeNew>}></Route>
          <Route path="employee/edit/edit_employee/:national_id/:id/:fullname/:birth_date/:hire_date/:image" element={<EditEmployeeNew></EditEmployeeNew>}></Route>
          <Route path="work_order" element={<WorkOrderNew></WorkOrderNew>}></Route>
          <Route path="work_order/add_woro" element={<AddWoroNew></AddWoroNew>}></Route>
          <Route path="work_order/edit/edit_woro/:id/:date" element={<EditWoroNew></EditWoroNew>}></Route>
          <Route path="work_order/get/work_order_detail/" element={<WorkOrderDetailNew></WorkOrderDetailNew>}></Route>
          <Route path="work_order/get/work_order_detail/add_wode" element={<AddWodeNew></AddWodeNew>}></Route>
          <Route path="work_order/get/work_order_detail/edit/edit_wode/:id/:task_name/:start/:end/:note" element={<EditWodeNew></EditWodeNew>}></Route>
        </Route>
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
