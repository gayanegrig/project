import { combineReducers } from "redux";
import {
  boardReducer,
  listsByIdReducer,
  cardsByIdReducer,
} from "./Reducers";

export default combineReducers({
  boardReducer,
  listsByIdReducer,
  cardsByIdReducer,
});
