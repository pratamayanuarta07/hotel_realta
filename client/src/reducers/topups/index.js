import { GET_LIST_TOPUP } from "../../actions/topupAction";

const initialState = {
  getListTopupsResult: false,
  getListTopupsLoading: false,
  getListTopupsError: false,
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

    default:
      return state;
  }
};

export default topups;
