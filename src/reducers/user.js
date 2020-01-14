const initialState = {
  error: '',
  userFound: [],
  foundUserOrders: [],
  blockedUsersList: null,
  blockedUsersCount: 0,
  sipLineInfo: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CREATED_USER':
      return { ...state, createdUser: action.payload };

    case 'USERS_FOUND':
      return { ...state, usersFound: action.payload.results };

    case 'FOUND_USER_ORDERS':
      return { ...state, foundUserOrders: action.payload.results };

    case 'BLOCKED_USERS_LIST':
      return { ...state, blockedUsersList: action.payload.results, blockedUsersCount: action.payload.count };

    case 'GET_SIP_LINE':
      return { ...state, sipLineInfo: action.payload };

    default:
      return state;
  }
};
