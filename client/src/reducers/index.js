import { combineReducers } from "redux";
import RegionsReducer from "./master/regions";
import CountriesReducer from "./master/countries";
import ProvincesReducer from "./master/provinces";
import CitiesReducer from "./master/cities";
import PoliciesReducer from "./master/policies";
import CategoriesReducer from "./master/categories";
import PriceItemsReducer from "./master/priceitems";
import ServiceTasksReducer from "./master/servicetasks";
import list from "./HR";
import BanksReducer from "./Payment/banks";
import FintechsReducer from "./Payment/fintechs";
import AccountReducer from "./Payment/accounts";
import TopupReducer from "./Payment/topups";
import TransactionReducer from "./Payment/transactions";

export default combineReducers({
  RegionsReducer,
  CountriesReducer,
  ProvincesReducer,
  CitiesReducer,
  PoliciesReducer,
  CategoriesReducer,
  PriceItemsReducer,
  ServiceTasksReducer,
  list,
  BanksReducer,
  FintechsReducer,
  AccountReducer,
  TopupReducer,
  TransactionReducer,
});
