import axios from "axios";
import Swal from "sweetalert2";

export const GET_LIST_TRANSACTION = "GET-LIST-TRANSACTION";
export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";
export const UPDATE_TRANSACTION = "UPDATE_TRANSACTION";
export const GET_DETAIL_TRANSACTION = "GET_DETAIL_TRANSACTION";
export const RESET_INITIAL_STATE_TRANSACTION = "RESET_INITIAL_STATE_TRANSACTION";

export const resetInitialStateTransaction = () => {
  return (dispatch) => {
    dispatch({ type: RESET_INITIAL_STATE_TRANSACTION });
  };
};

export const getListTransaction = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_LIST_TRANSACTION,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "GET",
      url: "http://localhost:3000/patrs",
      timeout: 120000,
    })
      .then((response) => {
        console.log("3. Berhasil dapet Data:", response.data);
        dispatch({
          type: GET_LIST_TRANSACTION,
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
          type: GET_LIST_TRANSACTION,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
export const addTransaction = (data) => {
  console.log("2. masuk action");
  return (dispatch) => {
    // loading

    dispatch({
      type: ADD_TRANSACTION,
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
          type: ADD_TRANSACTION,
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
          type: ADD_TRANSACTION,
          payload: {
            loading: false,
            data: false,
            errorMessage: error,
          },
        });
      });
  };
};
export const deleteTransaction = (id) => {
  console.log("2. masuk action");
  return (dispatch) => {
    // loading

    dispatch({
      type: DELETE_TRANSACTION,
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
          type: DELETE_TRANSACTION,
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
          type: DELETE_TRANSACTION,
          payload: {
            loading: false,
            data: false,
            errorMessage: error,
          },
        });
      });
  };
};
export const updateTransaction = (id, data) => {
  console.log("2. masuk action");
  return (dispatch) => {
    // loading

    dispatch({
      type: UPDATE_TRANSACTION,
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
          type: UPDATE_TRANSACTION,
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
          type: UPDATE_TRANSACTION,
          payload: {
            loading: false,
            data: false,
            errorMessage: error,
          },
        });
      });
  };
};
export const getDetailTransaction = (id) => {
  console.log("2. masuk action");
  return (dispatch) => {
    // loading

    dispatch({
      type: GET_DETAIL_TRANSACTION,
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
          type: GET_DETAIL_TRANSACTION,
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
          type: GET_DETAIL_TRANSACTION,
          payload: {
            loading: false,
            data: false,
            errorMessage: error,
          },
        });
      });
  };
};
