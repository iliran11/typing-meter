import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore() {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
}

function getReduxDevTools() {
  if (typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "function") {
    return window.__REDUX_DEVTOOLS_EXTENSION__();
  }
  return undefined;
}
