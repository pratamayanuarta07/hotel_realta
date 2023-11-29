import { combineReducers } from "redux";
import BanksReducer from "./banks";
import FintechsReducer from "./fintechs";
import AccountReducer from "./accounts";
import TopupReducer from "./topups";
import TransactionReducer from "./transactions";

export default combineReducers({
  BanksReducer,
  FintechsReducer,
  AccountReducer,
  TopupReducer,
  TransactionReducer,
});
