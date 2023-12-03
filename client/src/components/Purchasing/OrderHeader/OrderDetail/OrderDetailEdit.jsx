import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const OrderDetailEdit = () => {
  const [stock, setStock] = useState("");
  const [orderQty, setOrderQty] = useState("");
  const [receive, setReceive] = useState("");
  const [rejected, setRejected] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const generateToken = (id) => {};

  const editOrderDetailHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3005/purchasing/orderheaderdetail?id=${id}`, {
        vendor_name: stock,
        pode_order_qty: orderQty,
        pode_received_qty: receive,
        pode_rejected_qty: rejected,
      });

      navigate("/purchasing/vendor");

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Vendor has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Vendor Failed to save!",
      });
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <div className="card shadow mb-4 ">
        <div className="card-body">
          {/* Modal Body */}
          <form onSubmit={editOrderDetailHandler}>
            <div className="row">
              <div className="mb-3 col-md-5">
                <label for="stockName" className="form-label">
                  stock
                </label>
                <input type="text" onChange={(e) => setStock(e.target.value)} className="form-control" id="stockName" required />
              </div>

              <div class="col-md-3 mb-3">
                <label for="reOrder">Order Qty</label>
                <input type="number" onChange={(e) => setOrderQty(e.target.value)} class="form-control" id="orderqty" placeholder="0" required />
              </div>

              <div class="col-md-3 mb-3">
                <label for="reOrder">Receive</label>
                <input type="number" onChange={(e) => setReceive(e.target.value)} class="form-control" id="received" placeholder="0" required />
              </div>

              <div class="col-md-3 mb-3">
                <label for="reOrder">Rejected</label>
                <input type="number" onChange={(e) => setRejected(e.target.value)} class="form-control" placeholder="0" required />
              </div>

              <div className="container d-flex justify-content-center">
                {receive ? (
                  <button class="btn btn-primary btn-lg active" role="button" aria-pressed="true">
                    Generate Token
                  </button>
                ) : (
                  <button type="button" class="btn btn-secondary btn-lg" disabled>
                    Generate Token
                  </button>
                )}
              </div>

              <div className="modal-footer">
                <button type="submit" className="btn btn-dark mr-5">
                  Save
                </button>
              </div>
            </div>
          </form>
          {/* End Content */}
        </div>
      </div>
    </div>
  );
};

export default OrderDetailEdit;
