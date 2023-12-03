import { GET_LIST_FINTECH, ADD_FINTECH, DELETE_FINTECH, UPDATE_FINTECH, GET_DETAIL_FINTECH } from "../../../actions/Payment/fintechAction";

const initialState = {
  getListFintechsResult: false,
  getListFintechsLoading: false,
  getListFintechsError: false,

  addFintechsResult: false,
  addFintechsLoading: false,
  addFintechsError: false,

  deleteFintechsResult: false,
  deleteFintechsLoading: false,
  deleteFintechsError: false,

  updateFintechsResult: false,
  updateFintechsLoading: false,
  updateFintechsError: false,

  getDetailFintechsResult: false,
  getDetailFintechsLoading: false,
  getDetailFintechsError: false,
};

const fintechs = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_FINTECH:
      return {
        ...state,
        getListFintechsResult: action.payload.data,
        getListFintechsLoading: action.payload.loading,
        getListFintechsError: action.payload.errorMessage,
      };

    case ADD_FINTECH:
      return {
        ...state,
        addFintechsResult: action.payload.data,
        addFintechsLoading: action.payload.loading,
        addFintechsError: action.payload.errorMessage,
      };

    case DELETE_FINTECH:
      return {
        ...state,
        deleteFintechsResult: action.payload.data,
        deleteFintechsLoading: action.payload.loading,
        deleteFintechsError: action.payload.errorMessage,
      };

    case UPDATE_FINTECH:
      return {
        ...state,
        updateFintechsResult: action.payload.data,
        updateFintechsLoading: action.payload.loading,
        updateFintechsError: action.payload.errorMessage,
      };

    case GET_DETAIL_FINTECH:
      return {
        ...state,
        getDetailFintechsResult: action.payload.data,
        getDetailFintechsLoading: action.payload.loading,
        getDetailFintechsError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default fintechs;
