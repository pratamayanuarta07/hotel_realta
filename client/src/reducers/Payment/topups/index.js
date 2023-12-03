import { GET_LIST_TOPUP, ADD_TOPUP, DELETE_TOPUP, UPDATE_TOPUP, GET_DETAIL_TOPUP } from "../../../actions/Payment/topupAction";

const initialState = {
  getListTopupsResult: false,
  getListTopupsLoading: false,
  getListTopupsError: false,

  addTopupsResult: false,
  addTopupsLoading: false,
  addTopupsError: false,

  deleteTopupsResult: false,
  deleteTopupsLoading: false,
  deleteTopupsError: false,

  updateTopupsResult: false,
  updateTopupsLoading: false,
  updateTopupsError: false,

  getDetailTopupsResult: false,
  getDetailTopupsLoading: false,
  getDetailTopupsError: false,
};

const topups = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_TOPUP:
      return {
        ...state,
        getListTopupsResult: action.payload.data,
        getListTopupsLoading: action.payload.loading,
        getListTopupsError: action.payload.errorMessage,
      };

    case ADD_TOPUP:
      return {
        ...state,
        addTopupsResult: action.payload.data,
        addTopupsLoading: action.payload.loading,
        addTopupsError: action.payload.errorMessage,
      };

    case DELETE_TOPUP:
      return {
        ...state,
        deleteTopupsResult: action.payload.data,
        deleteTopupsLoading: action.payload.loading,
        deleteTopupsError: action.payload.errorMessage,
      };

    case UPDATE_TOPUP:
      return {
        ...state,
        updateTopupsResult: action.payload.data,
        updateTopupsLoading: action.payload.loading,
        updateTopupsError: action.payload.errorMessage,
      };

    case GET_DETAIL_TOPUP:
      return {
        ...state,
        getDetailTopupsResult: action.payload.data,
        getDetailTopupsLoading: action.payload.loading,
        getDetailTopupsError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default topups;
