import axios from 'axios';

export function registerUser(user) {
  const body = {
    ...user,
  };

  return dispatch =>
    axios
      .post('/api/v1/auth/signup/', body)
      .then(response => {
        dispatch({
          type: 'REGISTER_RESPONSE',
          payload: response.data,
        });
      })
      .catch(function(error) {
        dispatch({
          type: 'REGISTER_ERROR',
          payload: error.response,
        });
      });
}

export function demoGet() {
  return dispatch => axios.get('/api/v1/demo/get/');
}
export function demoCreate() {
  return dispatch => axios.post('/api/v1/demo/create/');
}

export function activateUser(activationCode) {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const body = {
    code: activationCode,
  };

  return dispatch =>
    axios
      .post('/api/v1/auth/activate/', body, config)
      .then(response => {
        dispatch({
          type: 'ACTIVATION_RESPONSE',
          payload: response.data,
        });
      })
      .catch(function(error) {
        dispatch({
          type: 'ACTIVATION_ERROR',
          payload: error.response,
        });
      });
}

export function userAuth(user) {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const body = {
    password: user.password,
    email_or_phone: user.username,
  };

  return dispatch =>
    axios
      .post('/api/v1/auth/login/', body, config)
      .then(response => {
        dispatch({
          type: 'USER_AUTH',
          payload: response.data,
        });
      })
      .catch(function(error) {
        dispatch({
          type: 'USER_AUTH_ERROR',
          payload: error.response,
        });
      });
}

export function userLogout() {
  return dispatch =>
    axios
      .get('/api/v1/auth/logout/')
      .then(response => {
        dispatch({
          type: 'USER_LOGOUT',
          payload: [],
        });
      })
      .catch(function(error) {
        console.log(error);
      });
}

export function validateToken(token) {
  const body = {
    token: token,
  };

  return dispatch =>
    axios
      .post('/api/v1/auth/verify/', body)
      .then(response => {
        dispatch({
          type: 'VERIFY_RESPONSE',
          payload: response.data,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
}

export function resetPassword(login) {
  const body = {
    email_or_phone: login,
  };

  return dispatch =>
    axios
      .post('/api/v1/auth/password/reset/', body)
      .then(response => {
        dispatch({
          type: 'RESET_RESPONSE',
          payload: response.data,
        });
      })
      .catch(function(error) {
        dispatch({
          type: 'RESET_RESPONSE_ERROR',
          payload: error.response,
        });
      });
}

export function resetPasswordCommon(pwd, code) {
  const body = {
    password1: pwd.password1,
    password2: pwd.password2,
    code: code,
  };

  return dispatch =>
    axios
      .post(`/api/v1/auth/password/reset/confirm/`, body)
      .then(response => {
        dispatch({
          type: 'RESET_COMMON_RESPONSE',
          payload: response.data,
        });
      })
      .catch(function(error) {
        dispatch({
          type: 'RESET_PASSWORD_ERROR',
          payload: error.response,
        });
      });
}

export function updateUserData(data) {
  return dispatch => dispatch({ type: 'UPDATE_USER_DATA', payload: data });
}

export function updateUserAddress(data) {
  return dispatch => dispatch({ type: 'UPDATE_USER_ADDRESS', payload: data });
}

export function setTokenFromCookies(token) {
  return dispatch =>
    dispatch({
      type: 'GET_TOKEN_FROM_COOKIES',
      payload: token,
    });
}

export function getGuideInfo() {
  return dispatch =>
    axios
      .get('/api/v1/accounts/training/')
      .then(response => {
        dispatch({
          type: 'GUIDE_INFO',
          payload: response.data,
        });
      })
      .catch(function(error) {
        dispatch({
          type: 'RESET_PASSWORD_ERROR',
          payload: error.response,
        });
      });
}

export function updateGuideInfo(data) {
  console.log(data);
  return dispatch => {
    return axios
      .put('/api/v1/accounts/training/', data)
      .then(response => {
        console.log(response);
        dispatch({
          type: 'GUIDE_INFO',
          payload: response.data,
        });
      })
      .catch(function(error) {
        console.log(error);

        dispatch({
          type: 'RESET_PASSWORD_ERROR',
          payload: error.response,
        });
      });
  };
}
