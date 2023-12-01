import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./components/redux/reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: composeWithDevTools(),
});

export default store;
