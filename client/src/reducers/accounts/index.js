import { GET_LIST_ACCOUNT } from "../../actions/accountAction";

const initialState = {
  getListAccountResult: false,
  getListAccountLoading: false,
  getListAccountError: false,
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

    default:
      return state;
  }
};

export default accounts;
