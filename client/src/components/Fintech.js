import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import { getListFintech, addFintech, deleteFintech, updateFintech, getDetailFintech } from "../actions/fintechAction";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";

const Fintech = () => {
  const { getListFintechsResult, addFintechsResult, deleteFintechsResult, updateFintechsResult, getDetailFintechsResult } = useSelector((state) => state.FintechsReducer);

  const dispatch = useDispatch();

  const [fintech, setFintech] = useState({
    paga_code: "",
    paga_name: "",
  });

  const [id, setId] = useState("");

  const handleaddfintech = (e) => {
    e.preventDefault();
    dispatch(addFintech(fintech));
    dispatch(getListFintech());
  };

  const handleupdatefintech = (e) => {
    e.preventDefault();
    dispatch(updateFintech(+id, fintech));
    dispatch(getListFintech());
  };

  useEffect(() => {
    dispatch(getListFintech());
  }, [dispatch]);

  useEffect(() => {
    if (addFintechsResult) {
      dispatch(getListFintech());
      setFintech({
        paga_code: "",
        paga_name: "",
      });
    }
  }, [dispatch]);

  useEffect(() => {
    if (updateFintechsResult) {
      dispatch(getListFintech());
      setFintech({
        paga_code: "",
        paga_name: "",
      });
      setId("");
    }
  }, [dispatch]);

  useEffect(() => {
    if (deleteFintechsResult) {
      dispatch(getListFintech());
      setFintech({
        paga_code: "",
        paga_name: "",
      });
    }
  }, [dispatch]);

  useEffect(() => {
    if (getDetailFintechsResult) {
      setFintech({
        paga_code: getDetailFintechsResult.paga_code,
        paga_name: getDetailFintechsResult.paga_name,
      });
      setId(getDetailFintechsResult.paga_entity_id);
    }
  }, [dispatch]);

  const pagas = [].concat(getListFintechsResult);

  return (
    <div>
      <div class="content text-center container">
        <div class="row justify-content-start">
          <div class="col-2 text-start"></div>
          <div class="col-12 text-start">
            <h4>Table Fintech</h4>
            <table class="table align-middle">
              <thead>
                <tr>
                  {/* <th scope="col">Bank Id</th> */}
                  <th scope="col">No</th>
                  <th scope="col">Fintech Code</th>
                  <th scope="col">Fintech Name</th>
                  <th scope="col" colSpan={2} className="col-1">
                    <div class="d-grid">
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        {/* <IoMdAdd /> */}
                        Add
                      </button>
                    </div>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                              Add Fintech
                            </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body row align-items-center">
                            <div className="col-auto">
                              <label>Fintech Code</label>
                            </div>
                            <div className="col-auto">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="BCA"
                                onChange={(e) =>
                                  setFintech({
                                    ...fintech,
                                    paga_code: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div class="modal-body row align-items-center">
                            <div className="col-auto">
                              <label>Fintech Name</label>
                            </div>
                            <div className="col-auto">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="BCA"
                                onChange={(e) =>
                                  setFintech({
                                    ...fintech,
                                    paga_name: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                              Cancel
                            </button>
                            <button onClick={(e) => handleaddfintech(e)} type="submit" class="btn btn-primary" data-bs-dismiss="modal">
                              Add
                            </button>
                          </div>
                          {/* </form> */}
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              {pagas.length > 0 ? (
                pagas.map((entity, i) => {
                  return (
                    <tbody className="text-start">
                      <tr>
                        <td>{i + 1}</td>
                        <td>{entity.paga_code}</td>
                        <td>{entity.paga_name}</td>
                        <td>
                          <div class="d-grid">
                            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => dispatch(getDetailFintech(entity.paga_entity_id))}>
                              {/* <IoMdAdd /> */}
                              Edit
                            </button>
                          </div>
                          <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h1 class="modal-title fs-5" id="editModalLabel">
                                    Edit Fintech
                                  </h1>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body row align-items-center">
                                  <div className="col-auto">
                                    <label>Fintech Code</label>
                                  </div>
                                  <div className="col-auto">
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="BCA"
                                      value={pagas.paga_code}
                                      onChange={(e) =>
                                        setFintech({
                                          ...fintech,
                                          paga_code: e.target.value,
                                        })
                                      }
                                    />
                                  </div>
                                </div>
                                <div class="modal-body row align-items-center">
                                  <div className="col-auto">
                                    <label>Fintech Name</label>
                                  </div>
                                  <div className="col-auto">
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="BCA"
                                      value={pagas.paga_name}
                                      onChange={(e) =>
                                        setFintech({
                                          ...fintech,
                                          paga_name: e.target.value,
                                        })
                                      }
                                    />
                                  </div>
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                    Cancel
                                  </button>
                                  <button onClick={(e) => handleupdatefintech(e)} type="submit" class="btn btn-primary" data-bs-dismiss="modal">
                                    Edit
                                  </button>
                                </div>
                                {/* </form> */}
                              </div>
                            </div>
                          </div>
                          <button className="btn btn-danger" onClick={() => dispatch(deleteFintech(entity.paga_entity_id))}>
                            Delete
                          </button>
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

export default Fintech;
