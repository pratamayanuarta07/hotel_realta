import axios from "axios";
import Swal from "sweetalert2";

export const GET_LIST_FINTECH = "GET-LIST-FINTECH";
export const GET_ACTIVE_FINTECH = "GET-ACTIVE-FINTECH";
export const ADD_FINTECH = "ADD_FINTECH";
export const DELETE_FINTECH = "DELETE_FINTECH";
export const UPDATE_FINTECH = "UPDATE_FINTECH";
export const GET_DETAIL_FINTECH = "DETAIL_FINTECH";
export const RESET_INITIAL_STATE_FINTECH = "RESET_INITIAL_STATE_FINTECH";

export const resetInitialStateFintech = () => {
  return (dispatch) => {
    dispatch({ type: RESET_INITIAL_STATE_FINTECH });
  };
};

export const getListFintech = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_LIST_FINTECH,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "GET",
      url: "http://localhost:3000/pagas",
      timeout: 120000,
    })
      .then((response) => {
        console.log("3. Berhasil dapet Data:", response.data);
        dispatch({
          type: GET_LIST_FINTECH,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("3. Gagal dapet Data:", error.message);
        dispatch({
          type: GET_LIST_FINTECH,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
export const getActivefintech = () => {
  console.log("2. masuk action");
  return (dispatch) => {
    // loading

    dispatch({
      type: GET_ACTIVE_FINTECH,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get api
    axios({
      method: "GET",
      url: `http://localhost:3000?status=true`,
      timeout: 120000,
    })
      .then((response) => {
        //berhasil get

        console.log("3. berhasil get data: ", response.data);
        dispatch({
          type: GET_ACTIVE_FINTECH,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //gagal get api
        console.log("3. gagal get data: ", error.message);

        dispatch({
          type: GET_ACTIVE_FINTECH,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
export const addFintech = (data) => {
  console.log("2. masuk action");
  return (dispatch) => {
    // loading

    dispatch({
      type: ADD_FINTECH,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get api
    axios({
      method: "POST",
      url: `http://localhost:3000/pagas/create`,
      // headers: {
      //   Authorization: Cookies.get("accessToken"),
      // },
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        //berhasil get

        Swal.fire("Berhasil menambah data");
        console.log("3. berhasil create data: ", response.data);
        dispatch({
          type: ADD_FINTECH,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //gagal get api
        console.log("3. gagal menambah data: ", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
        dispatch({
          type: ADD_FINTECH,
          payload: {
            loading: false,
            data: false,
            errorMessage: error,
          },
        });
      });
  };
};
export const deleteFintech = (id) => {
  console.log("2. masuk action");
  return (dispatch) => {
    // loading

    dispatch({
      type: DELETE_FINTECH,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get api
    axios({
      method: "DELETE",
      url: `http://localhost:3000/pagas/delete/${id}`,
      // headers: {
      //   Authorization: Cookies.get("accessToken"),
      // },
      timeout: 120000,
    })
      .then((response) => {
        //berhasil get

        console.log("3. berhasil create data: ", response.data);
        dispatch({
          type: DELETE_FINTECH,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //gagal get api
        console.log("3. gagal get data: ", error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });

        dispatch({
          type: DELETE_FINTECH,
          payload: {
            loading: false,
            data: false,
            errorMessage: error,
          },
        });
      });
  };
};
export const updateFintech = (id, data) => {
  console.log("2. masuk action");
  return (dispatch) => {
    // loading

    dispatch({
      type: UPDATE_FINTECH,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get api
    axios({
      method: "PUT",
      url: `http://localhost:3000/pagas/update/${id}`,
      // headers: {
      //   Authorization: Cookies.get("accessToken"),
      // },
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        //berhasil get

        Swal.fire("Berhasil mengubah data");
        console.log("3. berhasil mengubah data: ", response.data);
        dispatch({
          type: UPDATE_FINTECH,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //gagal get api
        console.log("3. gagal get data: ", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });

        dispatch({
          type: UPDATE_FINTECH,
          payload: {
            loading: false,
            data: false,
            errorMessage: error,
          },
        });
      });
  };
};
export const getDetailFintech = (id) => {
  console.log("2. masuk action");
  return (dispatch) => {
    // loading

    dispatch({
      type: GET_DETAIL_FINTECH,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get api
    axios({
      method: "GET",
      url: `http://localhost:3000/pagas/detail/${id}`,
      timeout: 120000,
    })
      .then((response) => {
        //berhasil get

        console.log("3. berhasil get data: ", response.data);
        dispatch({
          type: GET_DETAIL_FINTECH,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //gagal get api
        console.log("3. gagal get data: ", error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });

        dispatch({
          type: GET_DETAIL_FINTECH,
          payload: {
            loading: false,
            data: false,
            errorMessage: error,
          },
        });
      });
  };
};
