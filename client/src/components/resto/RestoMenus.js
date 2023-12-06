import React, { useEffect, useState } from "react";
import {
  getListMenus,
  addMenus,
  editMenus,
  delMenu,
  getDetailMenu,
} from "../../actions/resto/menusAction";
import { useDispatch, useSelector } from "react-redux";
// import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import { IoMdAdd, IoMdCloudUpload } from "react-icons/io";
import {
  FaCreativeCommonsSamplingPlus,
  FaPencilAlt,
  FaTrash,
} from "react-icons/fa";

const RestoMenus = () => {
  const {
    getListMenusResult,
    addMenusResult,
    editMenusResult,
    delMenuResult,
    getDetailMenuResult,
  } = useSelector((state) => state.MenusReducer);

  const dispatch = useDispatch();

  const [menu, setMenu] = useState({
    reme_name: "",
    reme_description: "",
    reme_price: "",
    reme_status: "",
  });

  const [id, setId] = useState("");

  const handleAddMenus = (e) => {
    e.preventDefault();
    dispatch(addMenus(menu));
    dispatch(getListMenus());
  };

  const handleEditMenus = (e) => {
    e.preventDefault();
    console.log("Menu to be added:", menu);
    dispatch(editMenus(+id, menu));
    dispatch(getListMenus());
  };

  useEffect(() => {
    dispatch(getListMenus());
  }, [dispatch]);

  useEffect(() => {
    if (addMenusResult) {
      dispatch(getListMenus());
      setMenu({
        reme_name: "",
        reme_description: "",
        reme_price: "",
        reme_status: "",
      });
    }
  }, [addMenusResult, dispatch]);

  useEffect(() => {
    if (delMenuResult) {
      dispatch(getListMenus());
    }
  }, [delMenuResult, dispatch]);

  useEffect(() => {
    if (getDetailMenuResult) {
      setMenu({
        reme_name: getDetailMenuResult.reme_name,
        reme_description: getDetailMenuResult.reme_description,
        reme_price: getDetailMenuResult.reme_price,
        reme_status: getDetailMenuResult.reme_status,
      });
      setId(getDetailMenuResult.reme_id);
    }
  }, [getDetailMenuResult, dispatch]);

  useEffect(() => {
    if (editMenusResult) {
      dispatch(getListMenus());
      setMenu({
        reme_name: "",
        reme_description: "",
        reme_price: "",
        reme_status: "",
      });
      setId("");
    }
  }, [editMenusResult, dispatch]);

  const menus = [].concat(getListMenusResult);
  // console.log("getListMenusResult:", typeof getListMenusResult);
  // console.log("menus:", menus);

  return (
    <div>
      <div class="content text-center container">
        <div class="row justify-content-start">
          <div class="col-12 text-start table-responsive">
            <h4>Resto Menus</h4>
            <table class="table align-middle shadow rounded">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col"></th>
                  <th scope="col">Desc</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col" colSpan={2} className="col-1">
                    <div class="d-grid">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#addModal"
                      >
                        <IoMdAdd />
                        Add
                      </button>
                    </div>
                    <div className="modal fade" id="addModal">
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1 classname="modal title fs-5" id="addModalLabel">
                              Add Resto Menu
                            </h1>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body row align-items-center">
                            <div className="col-4">
                              <label>Name</label>
                            </div>
                            <div className="col-6">
                              <input
                                className="form-control"
                                type="text"
                                placeholder=""
                                onChange={(e) => {
                                  setMenu({
                                    ...menu,
                                    reme_name: e.target.value,
                                  });
                                }}
                              />
                            </div>
                          </div>
                          <div className="modal-body row align-items-center">
                            <div className="col-4">
                              <label>Desc</label>
                            </div>
                            <div className="col-6">
                              <input
                                className="form-control"
                                type="text"
                                placeholder=""
                                onChange={(e) => {
                                  setMenu({
                                    ...menu,
                                    reme_description: e.target.value,
                                  });
                                }}
                              />
                            </div>
                          </div>
                          <div className="modal-body row align-items-center">
                            <div className="col-4">
                              <label>Price</label>
                            </div>
                            <div className="col-6">
                              <input
                                className="form-control"
                                type="text"
                                placeholder=""
                                onChange={(e) => {
                                  setMenu({
                                    ...menu,
                                    reme_price: e.target.value,
                                  });
                                }}
                              />
                            </div>
                          </div>
                          <div className="modal-body row align-items-center">
                            <div className="col-4">
                              <label>Status</label>
                            </div>
                            <div className="col-6">
                              <select
                                class="form-select"
                                onChange={(e) => {
                                  setMenu({
                                    ...menu,
                                    reme_status: e.target.value,
                                  });
                                }}
                              >
                                <option value={"Available"} selected="selected">
                                  Available
                                </option>
                                <option value={"Empty"}>Empty</option>
                              </select>
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={(e) => handleAddMenus(e)}
                              type="submit"
                              class="btn btn-primary"
                              data-bs-dismiss="modal"
                            >
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              {menus.map((menus, i) => {
                // console.log("datas:", menus);
                return (
                  <tbody>
                    <tr key={menus.reme_id}>
                      <td></td>
                      <td>{menus.reme_id}</td>
                      <td>{menus.reme_name}</td>
                      <td></td>
                      <td>{menus.reme_description}</td>
                      <td>{menus.reme_price}</td>
                      <td>{menus.reme_status}</td>
                      <td>
                        <div className="dropdown">
                          <button
                            type="button"
                            className="btn"
                            data-bs-toggle="dropdown"
                          >
                            <SlOptionsVertical />
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <button
                                onClick={() =>
                                  dispatch(getDetailMenu(menus.reme_id))
                                }
                                type="button"
                                className="btn"
                                data-bs-toggle="modal"
                                data-bs-target={`#editModal${menus.reme_id}`}
                              >
                                <FaPencilAlt /> Edit
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="btn"
                                data-bs-toggle="modal"
                                data-bs-target={`#upfotoModal`}
                              >
                                <IoMdCloudUpload /> Upload Foto
                              </button>
                            </li>
                            <li>
                              <button
                                onClick={() => dispatch(delMenu(menus.reme_id))}
                                type="button"
                                className="btn btn-danger"
                              >
                                <FaTrash /> Delete
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="modal fade"
                          id={`editModal${menus.reme_id}`}
                        >
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1
                                  classname="modal title fs-5"
                                  id="addModalLabel"
                                >
                                  Edit Resto Menu
                                </h1>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body row align-items-center">
                                <div className="col-4">
                                  <label>Name</label>
                                </div>
                                <div className="col-6">
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder=""
                                    value={menus.reme_name}
                                    onChange={(e) => {
                                      setMenu({
                                        ...menu,
                                        reme_name: e.target.value,
                                      });
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="modal-body row align-items-center">
                                <div className="col-4">
                                  <label>Desc</label>
                                </div>
                                <div className="col-6">
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder=""
                                    value={menus.reme_description}
                                    onChange={(e) => {
                                      setMenu({
                                        ...menu,
                                        reme_description: e.target.value,
                                      });
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="modal-body row align-items-center">
                                <div className="col-4">
                                  <label>Price</label>
                                </div>
                                <div className="col-6">
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder=""
                                    value={menus.reme_price}
                                    onChange={(e) => {
                                      setMenu({
                                        ...menu,
                                        reme_price: e.target.value,
                                      });
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="modal-body row align-items-center">
                                <div className="col-4">
                                  <label>Status</label>
                                </div>
                                <div className="col-6">
                                  <select
                                    class="form-select"
                                    onChange={(e) => {
                                      setMenu({
                                        ...menu,
                                        reme_status: e.target.value,
                                      });
                                    }}
                                  >
                                    <option value={"Available"} selected>
                                      Available
                                    </option>
                                    <option value={"Empty"}>Empty</option>
                                  </select>
                                </div>
                              </div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Cancel
                                </button>
                                <button
                                  onClick={(e) => handleEditMenus(e)}
                                  type="submit"
                                  class="btn btn-primary"
                                  data-bs-dismiss="modal"
                                >
                                  Update
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal fade" id="upfotoModal">
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1
                                  classname="modal title fs-5"
                                  id="addModalLabel"
                                >
                                  Upload Foto Menu
                                </h1>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body row align-items-center">
                                <div className="col-4">
                                  <label>Upload</label>
                                </div>
                                <div className="col-6">
                                  <input
                                    id="uploadform"
                                    className="form-control-sm"
                                    type="file"
                                    onChange={(e) => {
                                      console.log(
                                        "Selected file:",
                                        e.target.files[0].name
                                      );
                                    }}
                                  />
                                </div>
                              </div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Cancel
                                </button>
                                <button
                                  type="submit"
                                  class="btn btn-primary"
                                  data-bs-dismiss="modal"
                                >
                                  Add
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
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

export default RestoMenus;
