import { combineReducers, createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productdetailsReducer,
  productReducer,
} from "./Reducer/ProductReducer";

const reudcer = combineReducers({
  products: productReducer,
  productDetails: productdetailsReducer,
});

let intialState = {};

const middlewear = [thunk];
// const store = configureStore({
//   reducer: reudcer,
//   intialState,
//   middleware: getDefaultMiddleware()
// });

const store = createStore(
  reudcer,
  intialState,
  composeWithDevTools(applyMiddleware(...middlewear))
);

export default store;
