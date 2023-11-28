import { GET_LIST_BANK } from "../actions/bankAction";

const initialState = {
  getListBankResult: false,
  getListBankLoading: false,
  getListBankError: false,
};

const banksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_BANK:
      console.log("4. Masuk Reducer");
      return {
        ...state,
        getListBankResult: action.payload.data,
        getListBankLoading: action.payload.loading,
        getListBankError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default banksReducer;
