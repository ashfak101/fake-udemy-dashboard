import { combineReducers } from "redux";
import { reviewReducer } from "./reviewReducer";

const reducers = combineReducers({
  reviews: reviewReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
