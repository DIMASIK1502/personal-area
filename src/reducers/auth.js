const initialState = {
  user: null,
  token: null
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "USER_AUTH":
      return {
        ...state,
        token: action.payload.jwt,
        user: action.payload.user
      };

    case "REGISTER_RESPONSE":
      return { ...state, registerResponse: action.payload, error: "" };

    case "VERIFY_RESPONSE":
      return {
        ...state,
        token: action.payload.jwt,
        user: action.payload.user
      };

    default:
      return state;
  }
};
