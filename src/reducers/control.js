const initialState = {
  networkError: null,
  usersList: null,
  usersTypes: null,
  housesList: null,
  settingsList: null,
  organizationDetails: null,
  organizationsList: {
    results: [],
    count: 0,
  },
  ownOrganizationsList: {
    results: [],
    count: 0,
  },
  uisList: [],
  uisDetails: {},
  uisCalls: {
    results: [],
    count: 0,
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CONTROL_USERS_LIST':
      return {
        ...state,
        usersList: action.payload,
        networkError: null,
      };

    case 'USER_DETAILS':
      return {
        ...state,
        userDetails: action.payload,
        networkError: null,
      };

    case 'USERS_TYPES':
      return {
        ...state,
        usersTypes: action.payload,
        networkError: null,
      };

    case 'CONTROL_HOUSES_LIST':
      return {
        ...state,
        housesList: action.payload,
        networkError: null,
      };

    case 'CONTROL_SETTINGS_LIST':
      return {
        ...state,
        settingsList: action.payload,
        networkError: null,
      };

    case 'ADDRESS_DETAILS':
      return {
        ...state,
        addressDetails: action.payload,
        networkError: null,
      };

    case 'CONTROL_ORGANIZATIONS_LIST':
      return {
        ...state,
        organizationsList: action.payload,
        networkError: null,
      };

    case 'CONTROL_OWN_ORGANIZATIONS_LIST':
      return {
        ...state,
        ownOrganizationsList: action.payload,
        networkError: null,
      };

    case 'ORGANIZATION_DETAILS':
      return {
        ...state,
        organizationDetails: action.payload,
        networkError: null,
      };

    case 'GET_UIS_LIST':
      return {
        ...state,
        uisList: action.payload,
      };

    case 'GET_UIS_DETAILS':
      return {
        ...state,
        uisDetails: action.payload,
      };

    case 'GET_UIS_CALLS':
      return {
        ...state,
        uisCalls: action.payload,
      };

    case 'NETWORK_ERROR':
      return {
        ...state,
        networkError: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
