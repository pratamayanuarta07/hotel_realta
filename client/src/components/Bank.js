import React, { useEffect } from "react";
import Menu from "./Menu";
import { getListBanks } from "../actions/bankAction";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Bank = () => {
  const { getListBanksResult } = useSelector((state) => state.BanksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListBanks());
  }, [dispatch]);

  const bank = [].concat(getListBanksResult);
  console.log(bank);

  return (
    <div>
      <div class="content text-center container">
        <div class="row justify-content-start">
          <div class="col-2 text-start"></div>
          <div class="col-9 text-start">
            <h4>Table Bank</h4>
            <table class="table align-middle">
              <thead>
                <tr>
                  <th scope="col">Bank Id</th>
                  <th scope="col">Bank Name</th>
                  <th scope="col"></th>
                  <th scope="col">
                    <button className="btn btn-primary">Add</button>
                  </th>
                </tr>
              </thead>
              {bank.map((entity, i) => {
                return (
                  <tbody className="text-start">
                    <tr>
                      <td>{i + 1}</td>
                      <td>{entity.bank_code}</td>
                      <td>
                        <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <MdOutlineKeyboardDoubleArrowRight />
                        </button>

                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                              <div class="modal-body">{entity.bank_name}</div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <button className="btn btn-warning mx-1">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bank;
