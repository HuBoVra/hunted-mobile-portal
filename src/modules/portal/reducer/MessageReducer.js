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
    case "FETCHING_MESSAGES_HAS_ERRORED":
      return action.hasErrored;
    default:
      return state;
  }
};

const isLoading = (state = initialState, action) => {
  switch (action.type) {
    case "MESSAGES_ARE_LOADING":
      return action.isLoading;
    default:
      return state;
  }
};

const messages = (state = initialState, action) => {
  switch (action.type) {
    case "MESSAGE_FETCHED_SUCCES":
      return { ...state, items: action.items };
    default:
      return state;
  }
};
