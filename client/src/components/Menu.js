import React from "react";
import { Link, Outlet } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="locations">Bank</Link>
        </li>
        <li>
          <Link to="policy">Fintech</Link>
        </li>
        <li>
          <Link to="category">Accounts</Link>
        </li>
        <li>
          <Link to="priceitems">Topup</Link>
        </li>
        <li>
          <Link to="servicetasks">Transaction</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Menu;
