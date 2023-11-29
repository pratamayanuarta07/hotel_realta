import { GET_LIST_TRANSACTION } from "../../actions/transactionAction";

const initialState = {
  getListTransactionResult: false,
  getListTransactionLoading: false,
  getListTransactionError: false,
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

    default:
      return state;
  }
};

export default transactions;
