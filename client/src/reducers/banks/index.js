import { GET_LIST_BANK, ADD_BANK, DELETE_BANK, UPDATE_BANK, GET_DETAIL_BANK } from "../../actions/bankAction";

const initialState = {
  getListBanksResult: false,
  getListBanksLoading: false,
  getListBanksError: false,

  addBanksResult: false,
  addBanksLoading: false,
  addBanksError: false,

  deleteBanksResult: false,
  deleteBanksLoading: false,
  deleteBanksError: false,

  updateBanksResult: false,
  updateBanksLoading: false,
  updateBanksError: false,

  getDetailBanksResult: false,
  getDetailBanksLoading: false,
  getDetailBanksError: false,
};

const banks = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_BANK:
      return {
        ...state,
        getListBanksResult: action.payload.data,
        getListBanksLoading: action.payload.loading,
        getListBanksError: action.payload.errorMessage,
      };

    case ADD_BANK:
      return {
        ...state,
        addBanksResult: action.payload.data,
        addBanksLoading: action.payload.loading,
        addBanksError: action.payload.errorMessage,
      };

    case DELETE_BANK:
      return {
        ...state,
        deleteBanksResult: action.payload.data,
        deleteBanksLoading: action.payload.loading,
        deleteBanksError: action.payload.errorMessage,
      };

    case UPDATE_BANK:
      return {
        ...state,
        updateBanksResult: action.payload.data,
        updateBanksLoading: action.payload.loading,
        updateBanksError: action.payload.errorMessage,
      };

    case GET_DETAIL_BANK:
      return {
        ...state,
        getDetailBanksResult: action.payload.data,
        getDetailBanksLoading: action.payload.loading,
        getDetailBanksError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default banks;
