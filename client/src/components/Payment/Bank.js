import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import { getListBank, addBank, deleteBank, updateBank, getDetailBank, searchBank } from "../../actions/Payment/bankAction";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import { FaEdit, FaTrash, FaPlus, FaSearch } from "react-icons/fa";

const Bank = () => {
  const { getListBanksResult, addBanksResult, deleteBanksResult, updateBanksResult, getDetailBanksResult } = useSelector((state) => state.BanksReducer);

  const dispatch = useDispatch();

  const [bank, setBank] = useState({
    bank_code: "",
    bank_name: "",
  });

  const [id, setId] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    dispatch(searchBank(searchTerm));
  };

  const handleaddbank = (e) => {
    e.preventDefault();
    dispatch(addBank(bank));
    dispatch(getListBank());
  };

  const handleupdatebank = (e) => {
    e.preventDefault();
    dispatch(updateBank(+id, bank));
    dispatch(getListBank());
  };

  useEffect(() => {
    dispatch(getListBank());
  }, [dispatch]);

  useEffect(() => {
    if (addBanksResult) {
      dispatch(getListBank());
      setBank({
        bank_code: "",
        bank_name: "",
      });
    }
  }, [addBanksResult, dispatch]);

  useEffect(() => {
    if (updateBanksResult) {
      dispatch(getListBank());
      setBank({
        bank_code: "",
        bank_name: "",
      });
      setId("");
    }
  }, [updateBanksResult, dispatch]);

  useEffect(() => {
    if (deleteBanksResult) {
      dispatch(getListBank());
      setBank({
        bank_code: "",
        bank_name: "",
      });
    }
  }, [deleteBanksResult, dispatch]);

  useEffect(() => {
    if (getDetailBanksResult) {
      setBank({
        bank_code: getDetailBanksResult.bank_code,
        bank_name: getDetailBanksResult.bank_name,
      });
      setId(getDetailBanksResult.bank_entity_id);
    }
  }, [getDetailBanksResult, dispatch]);

  const banks = [].concat(getListBanksResult);

  return (
    <div>
      <div class="content text-center container">
        <div class="row justify-content-start">
          <div class="col-12 text-start">
            <h4>Table Bank</h4>
            <div className="d-flex justify-content-between mb-3">
              <div className="col-4">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search by Bank Code" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                  <button className="btn btn-primary" onClick={handleSearch}>
                    <FaSearch />
                  </button>
                </div>
              </div>
              <div class="d-grid">
                <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <FaPlus />
                  Add
                </button>
              </div>
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Add Bank
                      </h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body row align-items-center">
                      <div className="col-auto">
                        <label>Bank Code</label>
                      </div>
                      <div className="col-auto">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="BCA"
                          onChange={(e) =>
                            setBank({
                              ...bank,
                              bank_code: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div class="modal-body row align-items-center">
                      <div className="col-auto">
                        <label>Bank Name</label>
                      </div>
                      <div className="col-auto">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="BCA"
                          onChange={(e) =>
                            setBank({
                              ...bank,
                              bank_name: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Cancel
                      </button>
                      <button onClick={(e) => handleaddbank(e)} type="submit" class="btn btn-primary" data-bs-dismiss="modal">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <table class="table align-middle">
              <thead class="table-success">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Bank Code</th>
                  <th scope="col">Bank Name</th>
                  <th scope="col" colSpan={2} className="col-1">
                    Actions
                  </th>
                </tr>
              </thead>
              {banks.length > 0 ? (
                banks.map((entity, i) => {
                  return (
                    <tbody className="text-start" key={entity.bank_entity_id}>
                      <tr>
                        <td>{i + 1}</td>
                        <td>{entity.bank_code}</td>
                        <td>{entity.bank_name}</td>
                        <td>
                          <div class="d-grid">
                            <button type="button" class="btn btn-transparent" data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => dispatch(getDetailBank(entity.bank_entity_id))}>
                              <FaEdit /> Edit
                            </button>
                          </div>
                          <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h1 class="modal-title fs-5" id="editModalLabel">
                                    Edit Bank
                                  </h1>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body row align-items-center">
                                  <div className="col-auto">
                                    <label>Bank Code</label>
                                  </div>
                                  <div className="col-auto">
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="BCA"
                                      value={bank.bank_code}
                                      onChange={(e) =>
                                        setBank({
                                          ...bank,
                                          bank_code: e.target.value,
                                        })
                                      }
                                    />
                                  </div>
                                </div>
                                <div class="modal-body row align-items-center">
                                  <div className="col-auto">
                                    <label>Bank Name</label>
                                  </div>
                                  <div className="col-auto">
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="BCA"
                                      value={bank.bank_name}
                                      onChange={(e) =>
                                        setBank({
                                          ...bank,
                                          bank_name: e.target.value,
                                        })
                                      }
                                    />
                                  </div>
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                    Cancel
                                  </button>
                                  <button onClick={(e) => handleupdatebank(e)} type="submit" class="btn btn-danger" data-bs-dismiss="modal">
                                    Edit
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-grid">
                            <button className="btn btn-transparent" onClick={() => dispatch(deleteBank(entity.bank_entity_id))}>
                              <FaTrash /> Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  );
                })
              ) : (
                <Loading />
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bank;
