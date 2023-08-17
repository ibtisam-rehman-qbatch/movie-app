import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import showsReducer from "./shows/reducer";
import { devToolsEnhancer } from "redux-devtools-extension";

const reducers = combineReducers({ showsReducer });
const store = createStore(
  reducers,
  compose(applyMiddleware(thunk), devToolsEnhancer({ trace: true }))
);
export default store;
