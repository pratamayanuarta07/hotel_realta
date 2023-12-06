import {
  GET_LIST_MENUS,
  ADD_MENUS,
  EDIT_MENUS,
  GET_DETAIL_MENU,
  DEL_MENUS,
} from "../../../actions/resto/menusAction";

const initialState = {
  getListMenusResult: false,
  getListMenusLoading: false,
  getListMenusError: false,

  addMenusResult: false,
  addMenusLoading: false,
  addMenusError: false,

  editMenusResult: false,
  editMenusLoading: false,
  editMenusError: false,

  delMenuResult: false,
  delMenuLoading: false,
  delMenuError: false,

  getDetailMenuResult: false,
  getDetailMenuLoading: false,
  getDetailMenuError: false,
};

const menus = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_MENUS:
      return {
        ...state,
        getListMenusResult: action.payload.data,
        getListMenusLoading: action.payload.loading,
        getListMenusError: action.payload.errorMessage,
      };

    case ADD_MENUS:
      return {
        ...state,
        addMenusResult: action.payload.data,
        addMenusLoading: action.payload.loading,
        addMenusError: action.payload.errorMessage,
      };

    case EDIT_MENUS:
      return {
        ...state,
        editMenusResult: action.payload.data,
        editMenusLoading: action.payload.loading,
        editMenusError: action.payload.errorMessage,
      };

    case DEL_MENUS:
      return {
        ...state,
        delMenuResult: action.payload.data,
        delMenuLoading: action.payload.loading,
        delMenuError: action.payload.errorMessage,
      };

    case GET_DETAIL_MENU:
      return {
        ...state,
        getDetailMenuResult: action.payload.data,
        getDetailMenuLoading: action.payload.loading,
        getDetailMenuError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default menus;
