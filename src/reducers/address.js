const initialState = {
  addressList: {
    results: [],
    count: 0,
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADDRESS_LIST':
      return { ...state, addressList: action.payload };
    default:
      return state;
  }
};
