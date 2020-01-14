const initialState = {
  error: '',
  organizationBlocked: false,
  organizationUnpaid: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'USER_AUTH':
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        role: action.payload.user.type.type.value,
        organizationBlocked: action.payload.organization_is_blocked,
        organizationUnpaid: action.payload.organization_is_unpaid,
        error: '',
      };

    case 'GET_TOKEN_FROM_COOKIES':
      return { ...state, token: action.payload, error: '' };

    case 'NEW_USER':
      return { ...state, user: action.payload, error: '' };

    case 'CURRENT_USER':
      return { ...state, user: action.payload, error: '' };

    case 'REGISTER_RESPONSE':
      return { ...state, registerResponse: action.payload, error: '' };

    case 'ACTIVATION_RESPONSE':
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        role: action.payload.user.type.type.value,
        activationError: '',
      };

    case 'VERIFY_RESPONSE':
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        role: action.payload.user.type.type.value,
        organizationBlocked: action.payload.organization_is_blocked,
        organizationUnpaid: action.payload.organization_is_unpaid,
        error: '',
      };

    case 'RESET_RESPONSE':
      return { ...state, resetResponse: action.payload, error: '' };

    case 'RESET_PASSWORD_PHONE':
      return { ...state, resetPasswordPhoneResponse: action.payload, error: '' };

    case 'RESET_COMMON_RESPONSE':
      return { ...state, resetCommonResponse: action.payload, error: '' };

    case 'USER_AUTH_ERROR':
      return { ...state, error: action.payload };

    case 'AUTH_ERROR':
      return { ...state, error: action.payload };

    case 'REGISTER_ERROR':
      return { ...state, error: action.payload, registerResponse: null };

    case 'ACTIVATION_ERROR':
      return { ...state, activationError: action.payload, token: null, user: null };

    case 'RESET_RESPONSE_ERROR':
      return { ...state, resetResponseError: action.payload, resetResponse: null };

    case 'RESET_PASSWORD_ERROR':
      return { ...state, resetPasswordError: action.payload, resetCommonResponse: null };

    case 'RESET_PASSWORD_PHONE_ERROR':
      return { ...state, resetPasswordPhoneError: action.payload, resetPasswordPhoneResponse: null };

    case 'GUIDE_INFO':
      return { ...state, guideInfo: action.payload };

    case 'UPDATE_USER_DATA':
      return { ...state, user: { ...state.user, ...action.payload } };

    case 'UPDATE_USER_ADDRESS':
      return { ...state, user: { ...state.user, ...action.payload }, role: action.payload.type.type.value };

    case 'USER_LOGOUT':
      return {
        ...state,
        token: null,
        user: null,
        role: null,
        guideInfo: null,
        organizationBlocked: false,
        organizationUnpaid: false,
        error: '',
      };

    default:
      return state;
  }
};
