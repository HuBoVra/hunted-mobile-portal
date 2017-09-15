import * as constants from "../actions/Constants";
import { combineReducers } from "redux";

const initialState = {
  fetched: false,
  isLoading: false,
  hasErrored: false,
  teamPassword: "",
  teamName: "",
  newMessage: {},
  newLocation: {},
  newChallenge: {},
  messages: []
};

const hasErrored = (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCHING_MESSAGES_HAS_ERRORED:
      return action.hasErrored;
    default:
      return state;
  }
};

const isLoading = (state = initialState, action) => {
  switch (action.type) {
    case constants.MESSAGES_ARE_LOADING:
      return action.isLoading;
    default:
      return state;
  }
};

const messages = (state = initialState, action) => {
  switch (action.type) {
    case constants.MESSAGE_FETCHED_SUCCES:
      return { ...state, items: action.items };
    default:
      return state;
  }
};

const messageMarkedDone = (state = initialState, action) => {
  switch (action.type) {
    case constants.MESSAGE_MARKED_DONE:
      return { ...state, newMessage: {} };
    default:
      return state;
  }
};

export default combineReducers({
  hasErrored,
  isLoading,
  messages,
  messageMarkedDone
});
