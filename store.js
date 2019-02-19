// store.js

import { createStore, combineReducers, applyMiddleware } from "redux";
import eventsReducer from "./src/reducers/eventsReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  events: eventsReducer
});

const configureStore = () => {
  return createStore(rootReducer, {}, applyMiddleware(thunk));
};

export default configureStore;
