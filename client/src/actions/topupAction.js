import axios from "axios";
import Swal from "sweetalert2";

export const GET_LIST_TOPUP = "GET-LIST-TOPUP";
export const RESET_INITIAL_STATE_TOPUP = "RESET_INITIAL_STATE_TOPUP";

export const resetInitialStateTopup = () => {
  return (dispatch) => {
    dispatch({ type: RESET_INITIAL_STATE_TOPUP });
  };
};

export const getListTopup = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_LIST_TOPUP,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "GET",
      url: "http://localhost:4500/topups",
      timeout: 120000,
    })
      .then((response) => {
        console.log("3. Berhasil dapet Data:", response.data);
        dispatch({
          type: GET_LIST_TOPUP,
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
          type: GET_LIST_TOPUP,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
