import { legacy_createStore, compose, combineReducers, applyMiddleware } from "redux";


import thunk from "redux-thunk"
import contactReducer from "./Redux/reducer";
const rootReducer = combineReducers({
    contact: contactReducer,
  });
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
