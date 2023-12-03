import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul className="navbar-nav sidebar sidebar-dark accordion" style={{ backgroundColor: "#435585" }} id="accordionSidebar">
        {/* Sidebar - Brand */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
          <div className="sidebar-brand-icon">
            <img src={require("../../photos/logo.png")} alt="" style={{ width: "50px", height: "50px" }} />
          </div>
          <div className="sidebar-brand-text mx-2">
            <h5 className="m-0">
              Hotel Realta
              <br />
              <p className="fs-6 fst-italic lead m-0">check in dong</p>
            </h5>
          </div>
        </a>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
          <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </a>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
        <div className="sidebar-heading">Module</div>
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseUsers" aria-expanded="true" aria-controls="collapseUsers">
            <span>Users</span>
          </a>
          <div id="collapseUsers" className="collapse" aria-labelledby="headingUsers" data-bs-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Menus:</h6>
              <a className="collapse-item" href="buttons.html">
                My Profile
              </a>
              <a className="collapse-item" href="cards.html">
                My Bookings
              </a>
              <a className="collapse-item" href="cards.html">
                My Accounts
              </a>
            </div>
          </div>
        </li>
        {/* Nav Item - Utilities Collapse Menu */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseMaster" aria-expanded="true" aria-controls="collapseMaster">
            <span>Master</span>
          </a>
          <div id="collapseMaster" className="collapse" aria-labelledby="headingMaster" data-bs-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Menus:</h6>
              <a className="collapse-item" href="utilities-color.html">
                Locations
              </a>
              <a className="collapse-item" href="utilities-border.html">
                Policy
              </a>
              <a className="collapse-item" href="utilities-animation.html">
                Category Group
              </a>
              <a className="collapse-item" href="utilities-other.html">
                Price Items
              </a>
              <a className="collapse-item" href="utilities-other.html">
                Service Task
              </a>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseHotels" aria-expanded="true" aria-controls="collapseHotels">
            <i className="fas fa-fw fa-cog" />
            <span>Hotels</span>
          </a>
          <div id="collapseHotels" className="collapse" aria-labelledby="headingHotels" data-bs-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Menus:</h6>
              <a className="collapse-item" href="buttons.html">
                Hotel
              </a>
              <a className="collapse-item" href="cards.html">
                Facilities
              </a>
              <a className="collapse-item" href="cards.html">
                Reviews
              </a>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseBooking" aria-expanded="true" aria-controls="collapseBooking">
            <span>Booking</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseResto" aria-expanded="true" aria-controls="collapseResto">
            <span>Resto</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePayment" aria-expanded="true" aria-controls="collapsePayment">
            <span>Payment</span>
          </a>
          <div id="collapsePayment" className="collapse" aria-labelledby="headingPayment" data-bs-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Menus:</h6>
              <Link to={"payment/bank"} className="collapse-item">
                Bank
              </Link>
              <Link to={"payment/fintech"} className="collapse-item">
                Fintech
              </Link>
              <Link to={"payment/account"} className="collapse-item">
                Accounts
              </Link>
              <Link to={"payment/topup"} className="collapse-item">
                Topup
              </Link>
              <Link to={"payment/transaction"} className="collapse-item">
                Transaction
              </Link>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseHR" aria-expanded="true" aria-controls="collapseHR">
            <span>HR</span>
          </a>
          <div id="collapseHR" className="collapse" aria-labelledby="headingHR" data-bs-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Menus:</h6>
              <a className="collapse-item" href="buttons.html">
                Departement
              </a>
              <a className="collapse-item" href="cards.html">
                Employee
              </a>
              <a className="collapse-item" href="cards.html">
                WorkOrder
              </a>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapsePurchasing" aria-expanded="true" aria-controls="collapsePurchasing">
            <span>Purchasing</span>
          </a>
          <div id="collapsePurchasing" className="collapse" aria-labelledby="headingPurchasing" data-bs-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Menus:</h6>
              <a className="collapse-item" href="buttons.html">
                Vendor
              </a>
              <a className="collapse-item" href="cards.html">
                Stock
              </a>
              <a className="collapse-item" href="cards.html">
                Purchasing Order
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
