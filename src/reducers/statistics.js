const initialState = {
  statisticsLocation: null,
  statisticsOperational: null,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_STATISTICS_LOCATION':
      return { ...state, statisticsLocation: action.payload };
    case 'GET_OPERATIONAL_LOCATION':
      return { ...state, statisticsOperational: action.payload };
    default:
      return state;
  }
};
