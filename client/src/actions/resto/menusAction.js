import axios from "axios";
import Swal from "sweetalert2";

export const GET_LIST_MENUS = "GET_LIST_MENUS";
export const ADD_MENUS = "ADD_MENUS";
export const EDIT_MENUS = "EDIT_MENUS";
export const DEL_MENUS = "DEL_MENUS";
export const GET_DETAIL_MENU = "GET_DETAIL_MENU";

export const getListMenus = () => {
  return (dispatch) => {
    console.log("load menu");
    dispatch({
      type: GET_LIST_MENUS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: "http://localhost:3000/resto",
      timeout: 12000,
    })
      .then((response) => {
        console.log("menu berhasil di get", response.data);
        dispatch({
          type: GET_LIST_MENUS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("menu gagal di get", error.message);
        dispatch({
          type: GET_LIST_MENUS,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addMenus = (data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_MENUS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "POST",
      url: "http://localhost:3000/resto/add",
      data: data,
    })
      .then((response) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Menu Added",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log("menu berhasil ditambah", response.data);
        dispatch({
          type: ADD_MENUS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("menu gagal ditambah", error.response);
        Swal.fire({
          icon: "error",
          title: "Menu Adding Failed",
          text: error.response.data.error,
        });
        dispatch({
          type: ADD_MENUS,
          payload: {
            loading: false,
            data: false,
            errorMessage: error,
          },
        });
      });
  };
};

export const editMenus = (id, data) => {
  return (dispatch) => {
    dispatch({
      type: EDIT_MENUS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "PUT",
      url: "http://localhost:3000/resto/edit/" + id,
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Menu updated",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log("menu berhasil diupdate", response.data);
        dispatch({
          type: EDIT_MENUS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Menu failed to update",
          text: error.response.data.error,
        });
        console.log("menu gagal diupdate", error.response);
        dispatch({
          type: EDIT_MENUS,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const delMenu = (id, data) => {
  return (dispatch) => {
    dispatch({
      type: DEL_MENUS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axios({
            method: "DELETE",
            url: "http://localhost:3000/resto/del/" + id,
            timeout: 12000,
          }).then((response) => {
            dispatch({
              type: DEL_MENUS,
              payload: {
                loading: false,
                data: response.data,
                errorMessage: false,
              },
            });
          });
          Swal.fire({
            title: "Deleted!",
            text: "Category has been deleted.",
            icon: "success",
          });
        }
      })

      .catch((error) => {
        dispatch({
          type: DEL_MENUS,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getDetailMenu = (id) => {
  return (dispatch) => {
    console.log("load menu id " + id);
    dispatch({
      type: GET_DETAIL_MENU,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: "http://localhost:3000/resto/menu/" + id,
      timeout: 12000,
    })
      .then((response) => {
        console.log(`menu id ${id} berhasil di get`, response.data);
        dispatch({
          type: GET_DETAIL_MENU,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log(`menu id ${id} gagal di get`, error.message);
        dispatch({
          type: GET_DETAIL_MENU,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
