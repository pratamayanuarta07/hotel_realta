import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {

  const params = new URLSearchParams(window.location.pathname)

  return (
    <div style={{ backgroundColor: "#435585" }}>
      <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-white">
        <h1 className="mb-4 display-1">Oops~</h1>
        <h1 className="mb-0">404</h1>
        <h1 className="mb-4">Page Not Found</h1>
        <p>There's no route for this url <mark className="bg-warning rounded">{params}</mark></p>
        <Link to="/">
          <button className="btn btn-primary">Back to Dashboard</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
