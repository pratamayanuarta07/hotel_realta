import React, { useEffect, useState } from "react";
import {
  getListRegions,
  addRegion,
  deleteRegion,
  updateRegion,
  getDetailRegion,
  getListCountries,
  addCountry,
  deleteCountry,
  updateCountry,
  getDetailCountry,
  getListProvinces,
  addProvince,
  deleteProvince,
  updateProvince,
  getDetailProvince,
  getListCities,
  addCity,
  deleteCity,
  updateCity,
  getDetailCity,
} from "../../actions/master/locationAction";
import { useDispatch, useSelector } from "react-redux";
import { IoMdAdd } from "react-icons/io";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const Content = () => {
  const {
    getListRegionsResult,
    addRegionResult,
    deleteRegionResult,
    updateRegionResult,
    getDetailRegionResult,
  } = useSelector((state) => state.RegionsReducer);

  const {
    getListCountriesResult,
    addCountryResult,
    deleteCountryResult,
    updateCountryResult,
    getDetailCountryResult,
  } = useSelector((state) => state.CountriesReducer);

  const {
    getListProvincesResult,
    addProvinceResult,
    deleteProvinceResult,
    updateProvinceResult,
    getDetailProvinceResult,
  } = useSelector((state) => state.ProvincesReducer);

  const {
    getListCitiesResult,
    addCityResult,
    deleteCityResult,
    updateCityResult,
    getDetailCityResult,
  } = useSelector((state) => state.CitiesReducer);

  const dispatch = useDispatch();

  const [region, setRegion] = useState({
    region_name: "",
  });
  const [id, setId] = useState("");

  const [country, setCountry] = useState({
    country_name: "",
    country_region_id: "",
  });

  const [province, setProvince] = useState({
    prov_name: "",
    prov_country_id: "",
  });

  const [city, setCity] = useState({
    addr_line1: "",
    addr_line2: "",
    addr_postal_code: "",
    lat: "",
    long: "",
    addr_prov_id: "",
  });

  const handleAddRegion = (e) => {
    e.preventDefault();
    dispatch(addRegion(region));
    dispatch(getListRegions());
  };

  const handleEditRegion = (e) => {
    e.preventDefault();
    dispatch(updateRegion(+id, region));
    dispatch(getListRegions());
  };

  const handleAddCountry = (e) => {
    e.preventDefault();
    dispatch(addCountry(country));
    dispatch(getListCountries());
  };

  const handleEditCountry = (e) => {
    e.preventDefault();
    dispatch(updateCountry(+id, country));
    dispatch(getListCountries());
  };

  const handleAddProvince = (e) => {
    e.preventDefault();
    dispatch(addProvince(province));
    dispatch(getListProvinces());
  };

  const handleEditProvince = (e) => {
    e.preventDefault();
    dispatch(updateProvince(+id, province));
    dispatch(getListProvinces());
  };

  const handleAddCity = (e) => {
    e.preventDefault();
    dispatch(addCity(city));
    dispatch(getListCities());
  };

  const handleEditCity = (e) => {
    e.preventDefault();
    dispatch(updateCity(+id, city));
    dispatch(getListCities());
  };

  useEffect(() => {
    dispatch(getListRegions());
    dispatch(getListCountries());
    dispatch(getListProvinces());
    dispatch(getListCities());
  }, [dispatch]);

  useEffect(() => {
    if (addRegionResult) {
      dispatch(getListRegions());
      setRegion({
        region_name: "",
      });
    }
  }, [addRegionResult, dispatch]);

  useEffect(() => {
    if (deleteRegionResult) {
      dispatch(getListRegions());
    }
  }, [deleteRegionResult, dispatch]);

  useEffect(() => {
    if (getDetailRegionResult) {
      setRegion({
        region_name: getDetailRegionResult.region_name,
      });
      setId(getDetailRegionResult.region_code);
    }
  }, [getDetailRegionResult, dispatch]);

  useEffect(() => {
    if (updateRegionResult) {
      dispatch(getListRegions());
      setRegion({
        region_name: "",
      });
      setId("");
    }
  }, [updateRegionResult, dispatch]);

  useEffect(() => {
    if (addCountryResult) {
      dispatch(getListCountries());
      setCountry({
        country_name: "",
        country_region_id: "",
      });
    }
  }, [addCountryResult, dispatch]);

  useEffect(() => {
    if (deleteCountryResult) {
      dispatch(getListCountries());
    }
  }, [deleteCountryResult, dispatch]);

  useEffect(() => {
    if (getDetailCountryResult) {
      setCountry({
        country_name: getDetailCountryResult.country_name,
        country_region_id: getDetailCountryResult.country_region_id,
      });
      setId(getDetailCountryResult.country_id);
    }
  }, [getDetailCountryResult, dispatch]);

  useEffect(() => {
    if (updateCountryResult) {
      dispatch(getListCountries());
      setCountry({
        country_name: "",
        country_region_id: "",
      });
      setId("");
    }
  }, [updateCountryResult, dispatch]);

  useEffect(() => {
    if (addProvinceResult) {
      dispatch(getListProvinces());
      setProvince({
        prov_name: "",
        prov_country_id: "",
      });
    }
  }, [addProvinceResult, dispatch]);

  useEffect(() => {
    if (deleteProvinceResult) {
      dispatch(getListProvinces());
    }
  }, [deleteProvinceResult, dispatch]);

  useEffect(() => {
    if (getDetailProvinceResult) {
      setProvince({
        prov_name: getDetailProvinceResult.prov_name,
        prov_country_id: getDetailProvinceResult.country_country_id,
      });
      setId(getDetailProvinceResult.prov_id);
    }
  }, [getDetailProvinceResult, dispatch]);

  useEffect(() => {
    if (updateProvinceResult) {
      dispatch(getListProvinces());
      setProvince({
        prov_name: "",
        prov_country_id: "",
      });
      setId("");
    }
  }, [updateProvinceResult, dispatch]);

  useEffect(() => {
    if (addCityResult) {
      dispatch(getListCities());
      setCity({
        addr_line1: "",
        addr_line2: "",
        addr_postal_code: "",
        lat: "",
        long: "",
        addr_prov_id: "",
      });
    }
  }, [addCityResult, dispatch]);

  useEffect(() => {
    if (deleteCityResult) {
      dispatch(getListCities());
    }
  }, [deleteCityResult, dispatch]);

  useEffect(() => {
    if (getDetailCityResult) {
      setCity({
        addr_line1: getDetailCityResult.addr_line1,
        addr_line2: "",
        addr_postal_code: getDetailCityResult.addr_postal_code,
        lat: getDetailCityResult.lat,
        long: getDetailCityResult.long,
        addr_prov_id: getDetailCityResult.addr_prov_id,
      });
      setId(getDetailCityResult.addr_id);
    }
  }, [getDetailCityResult, dispatch]);

  useEffect(() => {
    if (updateCityResult) {
      dispatch(getListCities());
      setCity({
        addr_line1: "",
        addr_line2: "",
        addr_postal_code: "",
        lat: "",
        long: "",
        addr_prov_id: "",
      });
      setId("");
    }
  }, [updateCityResult, dispatch]);

  const regions = [].concat(getListRegionsResult);
  const countries = [].concat(getListCountriesResult);
  const provinces = [].concat(getListProvincesResult);
  const cities = [].concat(getListCitiesResult);

  return (
    <div>
      <div class="content text-center container">
        <div class="row justify-content-start">
          <div class="col-12 text-start table-responsive">
            <h4>Table Region</h4>
            <table class="table align-middle shadow rounded">
              <thead>
                <tr>
                  <th scope="col" className="col-3">
                    Region Id
                  </th>
                  <th scope="col">Region Name</th>
                  <th scope="col" colSpan={2} className="col-1">
                    <div class="d-grid">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#addRegionModal"
                      >
                        <IoMdAdd />
                        Add
                      </button>
                    </div>
                    <div
                      class="modal fade"
                      id="addRegionModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                              Add Region
                            </h1>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body row align-items-center">
                            <div className="col-auto">
                              <label>Region Name</label>
                            </div>
                            <div className="col-auto">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="South East"
                                onChange={(e) =>
                                  setRegion({
                                    ...region,
                                    region_name: e.target.value,
                                  })
                                }
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
                              onClick={(e) => handleAddRegion(e)}
                              type="submit"
                              class="btn btn-primary"
                              data-bs-dismiss="modal"
                            >
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
              {regions.map((regions, i) => {
                const { region_code, region_name } = regions;
                return (
                  <tbody className="text-start">
                    <tr key={region_code}>
                      <td>{i + 1}</td>
                      <td>{region_name}</td>
                      <td>
                        <div class="d-grid">
                          <button
                            onClick={() =>
                              dispatch(getDetailRegion(region_code))
                            }
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#modalEditRegion"
                            className="btn btn-warning"
                          >
                            <FaPencilAlt />
                          </button>
                        </div>
                        <div
                          class="modal fade"
                          id="modalEditRegion"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h1
                                  class="modal-title fs-5"
                                  id="exampleModalLabel"
                                >
                                  Edit Region
                                </h1>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body row align-items-center">
                                <div className="col-auto">
                                  <label>Region Name</label>
                                </div>
                                <div className="col-auto">
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="South East"
                                    value={region.region_name}
                                    onChange={(e) =>
                                      setRegion({
                                        ...region,
                                        region_name: e.target.value,
                                      })
                                    }
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
                                  onClick={(e) => handleEditRegion(e)}
                                  type="submit"
                                  class="btn btn-primary"
                                  data-bs-dismiss="modal"
                                >
                                  Edit
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="d-grid">
                          <button
                            onClick={() => dispatch(deleteRegion(region_code))}
                            className="btn btn-danger"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>

            <h4>Table Country</h4>
            <table class="table align-middle shadow rounded">
              <thead>
                <tr>
                  <th scope="col" className="col-3">
                    Country Id
                  </th>
                  <th scope="col">Country Name</th>
                  <th scope="col" colSpan={2} className="col-1">
                    <div class="d-grid">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#addCountryModal"
                      >
                        <IoMdAdd />
                        Add
                      </button>
                    </div>
                    <div
                      class="modal fade"
                      id="addCountryModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                              Add Country
                            </h1>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          {/* <div class="modal-body row align-items-center">
                            <div className="col-4">
                              <label>Region Name</label>
                            </div>
                            <div className="col-auto">
                              <input
                                className="form-control"
                                readOnly
                                type="text"
                                value={region.region_name}
                              />
                            </div>
                          </div> */}
                          <div class="modal-body row align-items-center">
                            <div className="col-4">
                              <label>Country Name</label>
                            </div>
                            <div className="col-auto">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Indonesia"
                                onChange={(e) =>
                                  setCountry({
                                    ...country,
                                    country_name: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div class="modal-body row align-items-center">
                            <div className="col-4">
                              <label>Country Region Id</label>
                            </div>
                            <div className="col-auto">
                              <input
                                className="form-control"
                                type="text"
                                onChange={(e) =>
                                  setCountry({
                                    ...country,
                                    country_region_id: e.target.value,
                                  })
                                }
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
                            onClick={(e)=>handleAddCountry(e)}
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

              {countries.map((countries, i) => {
                const { country_id, country_name, country_region_id } =
                  countries;
                const region_name = countries?.Region?.region_name;
                return (
                  <tbody>
                    <tr>
                      <td>{i + 1}</td>
                      <td>{country_name}</td>
                      <td>
                        <div class="d-grid">
                          <button
                            onClick={() =>
                              dispatch(getDetailCountry(country_id))
                            }
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#modalEditCountry"
                            className="btn btn-warning"
                          >
                            <FaPencilAlt />
                          </button>
                        </div>
                        <div
                          class="modal fade"
                          id="modalEditCountry"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h1
                                  class="modal-title fs-5"
                                  id="exampleModalLabel"
                                >
                                  Edit Country
                                </h1>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body row align-items-center">
                                <div className="col-4">
                                  <label>Region Name</label>
                                </div>
                                <div className="col-auto">
                                  <input
                                    className="form-control-plaintext"
                                    readOnly
                                    type="text"
                                    value={region_name}
                                  />
                                </div>
                              </div>
                              <div class="modal-body row align-items-center">
                                <div className="col-4">
                                  <label>Country Name</label>
                                </div>
                                <div className="col-auto">
                                  <input
                                    className="form-control"
                                    type="text"
                                    value={country.country_name}
                                    onChange={(e) =>
                                      setCountry({
                                        ...country,
                                        country_name: e.target.value,
                                      })
                                    }
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
                                onClick={(e)=>handleEditCountry(e)}
                                  type="submit"
                                  class="btn btn-primary"
                                  data-bs-dismiss="modal"
                                >
                                  Edit
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="d-grid">
                          <button
                            onClick={() => dispatch(deleteCountry(country_id))}
                            className="btn btn-danger"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>

            <h4>Table Province</h4>
            <table class="table align-middle shadow rounded">
              <thead>
                <tr>
                  <th scope="col" className="col-3">
                    Province Id
                  </th>
                  <th scope="col">Province Name</th>
                  <th scope="col" colSpan={2} className="col-1">
                    <div class="d-grid">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#addProvinceModal"
                      >
                        <IoMdAdd />
                        Add
                      </button>
                    </div>
                    <div
                      class="modal fade"
                      id="addProvinceModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                              Add Province
                            </h1>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body row align-items-center">
                            <div className="col-auto">
                              <label>Province Name</label>
                            </div>
                            <div className="col-auto">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Jawa Barat"
                                onChange={(e) =>
                                  setProvince({
                                    ...province,
                                    prov_name: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div class="modal-body row align-items-center">
                            <div className="col-auto">
                              <label>Prov Country Id</label>
                            </div>
                            <div className="col-auto">
                              <input
                                className="form-control"
                                type="text"
                                onChange={(e) =>
                                  setProvince({
                                    ...province,
                                    prov_country_id: e.target.value,
                                  })
                                }
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
                              onClick={(e) => handleAddProvince(e)}
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
              {provinces.map((provinces, i) => {
                const { prov_id, prov_name, prov_country_id } = provinces;
                const country_name = provinces?.Country?.country_name;
                return (
                  <tbody className="text-start">
                    <tr key={prov_id}>
                      <td>{i + 1}</td>
                      <td>{prov_name}</td>
                      <td>
                        <div class="d-grid">
                          <button
                            onClick={() => dispatch(getDetailProvince(prov_id))}
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#modalEditProvince"
                            className="btn btn-warning"
                          >
                            <FaPencilAlt />
                          </button>
                        </div>
                        <div
                          class="modal fade"
                          id="modalEditProvince"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h1
                                  class="modal-title fs-5"
                                  id="exampleModalLabel"
                                >
                                  Edit Province
                                </h1>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body row align-items-center">
                                <div className="col-4">
                                  <label>Country Name</label>
                                </div>
                                <div className="col-auto">
                                  <input
                                    className="form-control-plaintext"
                                    readOnly
                                    type="text"
                                    value={country_name}
                                  />
                                </div>
                              </div>
                              <div class="modal-body row align-items-center">
                                <div className="col-4">
                                  <label>Province Name</label>
                                </div>
                                <div className="col-auto">
                                  <input
                                    className="form-control"
                                    type="text"
                                    value={province.prov_name}
                                    onChange={(e) =>
                                      setProvince({
                                        ...province,
                                        prov_name: e.target.value,
                                      })
                                    }
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
                                  onClick={(e) => handleEditProvince(e)}
                                  type="submit"
                                  class="btn btn-primary"
                                  data-bs-dismiss="modal"
                                >
                                  Edit
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="d-grid">
                          <button
                            onClick={() => dispatch(deleteProvince(prov_id))}
                            className="btn btn-danger"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>

            <h4>Table City</h4>
            <table class="table align-middle shadow rounded">
              <thead>
                <tr>
                  <th scope="col" className="col-3">
                    City Id
                  </th>
                  <th scope="col">City Name</th>
                  <th scope="col" colSpan={2} className="col-1">
                    <div class="d-grid">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#addCityModal"
                      >
                        <IoMdAdd />
                        Add
                      </button>
                    </div>
                    <div
                      class="modal fade"
                      id="addCityModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                              Add City
                            </h1>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body row align-items-center">
                            <div className="col-4">
                              <label>City Name</label>
                            </div>
                            <div className="col-auto">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Cirebon"
                                onChange={(e) =>
                                  setCity({
                                    ...city,
                                    addr_line1: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div class="modal-body row align-items-center">
                            <div className="col-4">
                              <label>Postal Code</label>
                            </div>
                            <div className="col-auto">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="45111"
                                onChange={(e) =>
                                  setCity({
                                    ...city,
                                    addr_postal_code: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div class="modal-body row align-items-center">
                            <div className="col-4">
                              <label>Latitude</label>
                            </div>
                            <div className="col-auto">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="6.732023"
                                onChange={(e) =>
                                  setCity({
                                    ...region,
                                    lat: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div class="modal-body row align-items-center">
                            <div className="col-4">
                              <label>Longitude</label>
                            </div>
                            <div className="col-auto">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="108.552315"
                                onChange={(e) =>
                                  setCity({
                                    ...city,
                                    long: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div class="modal-body row align-items-center">
                            <div className="col-4">
                              <label>Address Prov Id</label>
                            </div>
                            <div className="col-auto">
                              <input
                                className="form-control"
                                type="text"
                                onChange={(e) =>
                                  setCity({
                                    ...city,
                                    addr_prov_id: e.target.value,
                                  })
                                }
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
                              onClick={(e) => handleAddCity(e)}
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
              {cities.map((cities, i) => {
                const {
                  addr_id,
                  addr_line1,
                  addr_postal_code,
                  lat,
                  long,
                  addr_prov_id,
                } = cities;
                const province_name = cities?.Province?.prov_name
                return (
                  <tbody className="text-start">
                    <tr key={addr_id}>
                      <td>{i + 1}</td>
                      <td>{addr_line1}</td>
                      <td>
                        <div class="d-grid">
                          <button
                            onClick={() => dispatch(getDetailCity(addr_id))}
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#modalEditCity"
                            className="btn btn-warning"
                          >
                            <FaPencilAlt />
                          </button>
                        </div>
                        <div
                          class="modal fade"
                          id="modalEditCity"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h1
                                  class="modal-title fs-5"
                                  id="exampleModalLabel"
                                >
                                  Edit City
                                </h1>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body row align-items-center">
                                <div className="col-4">
                                  <label>Province Name</label>
                                </div>
                                <div className="col-auto">
                                  <input
                                    className="form-control-plaintext"
                                    readOnly
                                    type="text"
                                    value={province_name}
                                  />
                                </div>
                              </div>
                              <div class="modal-body row align-items-center">
                            <div className="col-4">
                              <label>City Name</label>
                            </div>
                            <div className="col-auto">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Cirebon"
                                value={city.addr_line1}
                                onChange={(e) =>
                                  setCity({
                                    ...city,
                                    addr_line1: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div class="modal-body row align-items-center">
                            <div className="col-4">
                              <label>Postal Code</label>
                            </div>
                            <div className="col-auto">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="45111"
                                value={city.addr_postal_code}
                                onChange={(e) =>
                                  setCity({
                                    ...city,
                                    addr_postal_code: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div class="modal-body row align-items-center">
                            <div className="col-4">
                              <label>Latitude</label>
                            </div>
                            <div className="col-auto">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="6.732023"
                                value={city.lat}
                                onChange={(e) =>
                                  setCity({
                                    ...region,
                                    lat: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div class="modal-body row align-items-center">
                            <div className="col-4">
                              <label>Longitude</label>
                            </div>
                            <div className="col-auto">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="108.552315"
                                value={city.long}
                                onChange={(e) =>
                                  setCity({
                                    ...city,
                                    long: e.target.value,
                                  })
                                }
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
                                  onClick={(e) => handleEditCity(e)}
                                  type="submit"
                                  class="btn btn-primary"
                                  data-bs-dismiss="modal"
                                >
                                  Edit
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="d-grid">
                          <button
                            onClick={() => dispatch(deleteCity(addr_id))}
                            className="btn btn-danger"
                          >
                            <FaTrash />
                          </button>
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
      {/* <Outlet/> */}
    </div>
  );
};

export default Content;
