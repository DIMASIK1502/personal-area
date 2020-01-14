const initialState = {
  notificationList: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_NOTIFICATION_LIST':
      return { ...state, notificationList: action.payload };
    default:
      return state;
  }
};
