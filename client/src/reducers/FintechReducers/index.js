import { GET_LIST_FINTECH } from "../actions/fintechAction";

const initialState = {
  getListFintechResult: false,
  getListFintechLoading: false,
  getListFintechError: false,
};

const fintechsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_FINTECH:
      console.log("4. Masuk Reducer");
      return {
        ...state,
        getListFintechResult: action.payload.data,
        getListFintechLoading: action.payload.loading,
        getListFintechError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default fintechsReducer;
