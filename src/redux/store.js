import { composeWithDevTools } from "@redux-devtools/extension";
import { combineReducers, createStore } from "redux";
import { themeReducer } from "./themeReducer";

const reducers=combineReducers({
    theme: themeReducer,
})

export const store=createStore(reducers, composeWithDevTools());