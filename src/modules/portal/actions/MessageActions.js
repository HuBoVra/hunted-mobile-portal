import * as constants from "./constants";

export const fetchingMessagesHasErrored = bool => {
  return {
    type: constants.FETCHING_MESSAGES_HAS_ERRORED,
    hasErrored: bool
  };
};

export const messagesAreLoading = bool => {
  return {
    type: constants.MESSAGES_ARE_LOADING,
    isLoading: bool
  };
};

export const messageFetchedSucces = messages => {
  return {
    type: constants.MESSAGE_FETCHED_SUCCES,
    messages: messages
  };
};

export const receivedNewMessage = message => {
  return {
    type: constants.RECEIVED_NEW_MESSAGE,
    message: message
  };
};

export const messageMarkedDone = id => {
  return {
    type: constants.MESSAGE_MARKED_DONE,
    id: id
  };
};
