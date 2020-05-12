import Project1Reducer from "./project1_Reducer";
import { combineReducers } from "redux";
import ComputersReducer from "./computersReducer";

export default combineReducers({
  pr1: Project1Reducer,
  comp: ComputersReducer,
});
