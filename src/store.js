import { createStore, combineReducers } from "redux";
import { messageReducer } from "src/modules/portal/reducers/messageReducer";

const rootReducer = combineReducers({
  messageReducer
});

const store = createStore(
  rootReducer,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default store;
