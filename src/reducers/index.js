import { combineReducers } from "redux";
import authReducer from "./authReducer";
import yourBooksReducer from "./yourBooksReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  auth: authReducer,
  books: yourBooksReducer,
  errors: errorReducer
});
