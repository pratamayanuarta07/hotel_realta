import { GET_LIST_TRANSACTION, ADD_TRANSACTION, DELETE_TRANSACTION, UPDATE_TRANSACTION, GET_DETAIL_TRANSACTION } from "../../../actions/Payment/transactionAction";

const initialState = {
  getListTransactionsResult: false,
  getListTransactionsLoading: false,
  getListTransactionsError: false,

  addTransactionsResult: false,
  addTransactionsLoading: false,
  addTransactionsError: false,

  deleteTransactionsResult: false,
  deleteTransactionsLoading: false,
  deleteTransactionsError: false,

  updateTransactionsResult: false,
  updateTransactionsLoading: false,
  updateTransactionsError: false,

  getDetailTransactionsResult: false,
  getDetailTransactionsLoading: false,
  getDetailTransactionsError: false,
};

const transactions = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_TRANSACTION:
      return {
        ...state,
        getListTransactionResult: action.payload.data,
        getListTransactionLoading: action.payload.loading,
        getListTransactionError: action.payload.errorMessage,
      };

    case ADD_TRANSACTION:
      return {
        ...state,
        addTransactionsResult: action.payload.data,
        addTransactionsLoading: action.payload.loading,
        addTransactionsError: action.payload.errorMessage,
      };

    case DELETE_TRANSACTION:
      return {
        ...state,
        deleteTransactionsResult: action.payload.data,
        deleteTransactionsLoading: action.payload.loading,
        deleteTransactionsError: action.payload.errorMessage,
      };

    case UPDATE_TRANSACTION:
      return {
        ...state,
        updateTransactionsResult: action.payload.data,
        updateTransactionsLoading: action.payload.loading,
        updateTransactionsError: action.payload.errorMessage,
      };

    case GET_DETAIL_TRANSACTION:
      return {
        ...state,
        getDetailTransactionsResult: action.payload.data,
        getDetailTransactionsLoading: action.payload.loading,
        getDetailTransactionsError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default transactions;
