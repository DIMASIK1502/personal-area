import { filter } from 'lodash';

const initialState = {
  userAgent: null,
  telephonyStatus: false,
  userByPhone: null,
  newUserPhone: null,
  session: null,
  missedCalls: {
    results: [],
    count: 0,
  },
  callsList: {
    results: [],
    count: 0,
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_USER_AGENT':
      return { ...state, userAgent: action.payload };

    case 'SET_TELEPHONY_STATUS':
      return { ...state, telephonyStatus: action.payload };

    case 'SET_SESSION':
      return { ...state, session: action.payload };

    case 'GET_USER_BY_PHONE':
      return { ...state, userByPhone: action.payload };

    case 'CLEAR_USER_BY_PHONE':
      return { ...state, userByPhone: null };

    case 'SET_NEW_USER_PHONE':
      return { ...state, newUserPhone: action.payload };

    case 'CLEAR_NEW_USER_PHONE':
      return { ...state, newUserPhone: null };

    case 'GET_MISSED_CALLS':
      return { ...state, missedCalls: { results: action.payload.results, count: action.payload.count } };

    case 'HANDLE_CALL_BACK':
      const filteredCalls = filter(state.missedCalls.results, function(o) {
        return o.id !== action.payload.id;
      });
      return { ...state, missedCalls: { results: filteredCalls, count: filteredCalls.length } };

    case 'NEW_MISSED_CALL':
      const data = [action.payload, ...state.missedCalls.results];
      return {
        ...state,
        missedCalls: {
          results: data,
          count: data.length,
        },
      };

    case 'GET_CALLS_JOURNAL':
      return { ...state, callsList: action.payload };

    default:
      return state;
  }
};
