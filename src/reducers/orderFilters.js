import { includes } from 'lodash';

const initialState = {
  filter: {
    status: [],
    date_lte: null,
    date_gte: null,
    address: [],
    id: [],
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_ID_FILTER_LIST':
      if (!Array.isArray(action.payload) && includes(state.filter.id, action.payload)) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          filter: {
            ...state.filter,
            id: Array.isArray(action.payload) ? action.payload : [...state.filter.id, action.payload],
          },
        };
      }

    case 'SET_STATUS_FILTER_LIST':
      return {
        ...state,
        filter: {
          ...state.filter,
          status: action.payload,
        },
      };

    case 'SET_ADDRESS_FILTER_LIST':
      return {
        ...state,
        filter: {
          ...state.filter,
          address: action.payload,
        },
      };

    case 'SET_LTE_DATE_FILTER':
      return {
        ...state,
        filter: {
          ...state.filter,
          date_lte: action.payload,
        },
      };

    case 'SET_GTE_DATE_FILTER':
      return {
        ...state,
        filter: {
          ...state.filter,
          date_gte: action.payload,
        },
      };

    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        filter: action.payload,
      };

    case 'CLEAR_FILTER':
      return initialState;

    default:
      return state;
  }
};
