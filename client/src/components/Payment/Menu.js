import React from "react";
import { Link, Outlet } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="bank">Bank</Link>
        </li>
        <li>
          <Link to="fintech">Fintech</Link>
        </li>
        <li>
          <Link to="account">Accounts</Link>
        </li>
        <li>
          <Link to="topup">Topup</Link>
        </li>
        <li>
          <Link to="transaction">Transaction</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Menu;
