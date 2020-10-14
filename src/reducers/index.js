import { combineReducers } from "redux";
import authReducer from "./authReducer";
import accountReducer from "./accountReducer";
import yourBooksReducer from "./yourBooksReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  auth: authReducer,
  books: yourBooksReducer,
  accountInfo: accountReducer,
  errors: errorReducer
});
