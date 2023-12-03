import axios from "axios";
import Swal from "sweetalert2";

export const GET_LIST_ACCOUNT = "GET-LIST-ACCOUNT";
export const ADD_ACCOUNT = "ADD_ACCOUNT";
export const DELETE_ACCOUNT = "DELETE_ACCOUNT";
export const UPDATE_ACCOUNT = "UPDATE_ACCOUNT";
export const GET_DETAIL_ACCOUNT = "GET_DETAIL_ACCOUNT";
export const RESET_INITIAL_STATE_ACCOUNT = "RESET_INITIAL_STATE_ACCOUNT";

export const resetInitialStateAccount = () => {
  return (dispatch) => {
    dispatch({ type: RESET_INITIAL_STATE_ACCOUNT });
  };
};

export const getListAccount = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_LIST_ACCOUNT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "GET",
      url: "http://localhost:3000/usacs",
      timeout: 120000,
    })
      .then((response) => {
        console.log("3. Berhasil dapet Data:", response.data);
        dispatch({
          type: GET_LIST_ACCOUNT,
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
          type: GET_LIST_ACCOUNT,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
export const addAccount = (data) => {
  console.log("2. masuk action");
  return (dispatch) => {
    // loading

    dispatch({
      type: ADD_ACCOUNT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get api
    axios({
      method: "POST",
      url: `http://localhost:3000/usacs/create`,
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
          type: ADD_ACCOUNT,
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
          type: ADD_ACCOUNT,
          payload: {
            loading: false,
            data: false,
            errorMessage: error,
          },
        });
      });
  };
};
export const deleteAccount = (id) => {
  console.log("2. masuk action");
  return (dispatch) => {
    // loading

    dispatch({
      type: DELETE_ACCOUNT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get api
    axios({
      method: "DELETE",
      url: `http://localhost:3000/usacs/delete/${id}`,
      // headers: {
      //   Authorization: Cookies.get("accessToken"),
      // },
      timeout: 120000,
    })
      .then((response) => {
        //berhasil get

        console.log("3. berhasil create data: ", response.data);
        dispatch({
          type: DELETE_ACCOUNT,
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
          type: DELETE_ACCOUNT,
          payload: {
            loading: false,
            data: false,
            errorMessage: error,
          },
        });
      });
  };
};
export const updateAccount = (id, data) => {
  console.log("2. masuk action");
  return (dispatch) => {
    // loading

    dispatch({
      type: UPDATE_ACCOUNT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get api
    axios({
      method: "PUT",
      url: `http://localhost:3000/usacs/update/${id}`,
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
          type: UPDATE_ACCOUNT,
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
          type: UPDATE_ACCOUNT,
          payload: {
            loading: false,
            data: false,
            errorMessage: error,
          },
        });
      });
  };
};
export const getDetailAccount = (id) => {
  console.log("2. masuk action");
  return (dispatch) => {
    // loading

    dispatch({
      type: GET_DETAIL_ACCOUNT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get api
    axios({
      method: "GET",
      url: `http://localhost:3000/usacs/detail/${id}`,
      timeout: 120000,
    })
      .then((response) => {
        //berhasil get

        console.log("3. berhasil get data: ", response.data);
        dispatch({
          type: GET_DETAIL_ACCOUNT,
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
          type: GET_DETAIL_ACCOUNT,
          payload: {
            loading: false,
            data: false,
            errorMessage: error,
          },
        });
      });
  };
};
