import { GET_LIST_ACCOUNT, ADD_ACCOUNT, DELETE_ACCOUNT, UPDATE_ACCOUNT, GET_DETAIL_ACCOUNT } from "../../actions/accountAction";

const initialState = {
  getListAccountsResult: false,
  getListAccountsLoading: false,
  getListAccountsError: false,

  addAccountsResult: false,
  addAccountsLoading: false,
  addAccountsError: false,

  deleteAccountsResult: false,
  deleteAccountsLoading: false,
  deleteAccountsError: false,

  updateAccountsResult: false,
  updateAccountsLoading: false,
  updateAccountsError: false,

  getDetailAccountsResult: false,
  getDetailAccountsLoading: false,
  getDetailAccountsError: false,
};

const accounts = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_ACCOUNT:
      return {
        ...state,
        getListAccountResult: action.payload.data,
        getListAccountLoading: action.payload.loading,
        getListAccountError: action.payload.errorMessage,
      };

    case ADD_ACCOUNT:
      return {
        ...state,
        addAccountsResult: action.payload.data,
        addAccountsLoading: action.payload.loading,
        addAccountsError: action.payload.errorMessage,
      };

    case DELETE_ACCOUNT:
      return {
        ...state,
        deleteAccountsResult: action.payload.data,
        deleteAccountsLoading: action.payload.loading,
        deleteAccountsError: action.payload.errorMessage,
      };

    case UPDATE_ACCOUNT:
      return {
        ...state,
        updateAccountsResult: action.payload.data,
        updateAccountsLoading: action.payload.loading,
        updateAccountsError: action.payload.errorMessage,
      };

    case GET_DETAIL_ACCOUNT:
      return {
        ...state,
        getDetailAccountsResult: action.payload.data,
        getDetailAccountsLoading: action.payload.loading,
        getDetailAccountsError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default accounts;
