import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as appReducer } from "./AppReducer/reducer";
import { reducer as authReducer } from "./AuthReducer/reducer";
const rootReducer = combineReducers({ appReducer, authReducer });
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
