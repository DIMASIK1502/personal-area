import axios from "axios";

export function registerUser(user) {
  const body = {
    ...user
  };

  return dispatch =>
    axios
      .post("/api/v1/auth/signup/", body)
      .then(response => {
        dispatch({
          type: "REGISTER_RESPONSE",
          payload: response.data
        });
      })
      .catch(function(error) {
        dispatch({
          type: "REGISTER_ERROR",
          payload: error.response
        });
      });
}

export function userAuth(user) {
  const config = {
    headers: {
      Accept: "application/json"
    }
  };

  return dispatch =>
    axios
      .post("http://94.103.84.215:1337/auth/local", {
        identifier: user.username,
        password: user.password
      })
      .then(response => {
        //response.data.user
        //response.data.jwt
        dispatch({
          type: "USER_AUTH",
          payload: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
        dispatch({
          type: "USER_AUTH_ERROR",
          payload: error.response
        });
      });
}

export function userLogout() {
  return dispatch =>
    axios
      .get("/api/v1/auth/logout/")
      .then(response => {
        dispatch({
          type: "USER_LOGOUT",
          payload: []
        });
      })
      .catch(function(error) {
        console.log(error);
      });
}

export function validateToken(token) {
  const body = {
    token: token
  };

  return dispatch =>
    axios
      .post("/api/v1/auth/verify/", body)
      .then(response => {
        dispatch({
          type: "VERIFY_RESPONSE",
          payload: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
}

export function resetPassword(login) {
  const body = {
    email_or_phone: login
  };

  return dispatch =>
    axios
      .post("/api/v1/auth/password/reset/", body)
      .then(response => {
        dispatch({
          type: "RESET_RESPONSE",
          payload: response.data
        });
      })
      .catch(function(error) {
        dispatch({
          type: "RESET_RESPONSE_ERROR",
          payload: error.response
        });
      });
}

export function resetPasswordCommon(pwd, code) {
  const body = {
    password1: pwd.password1,
    password2: pwd.password2,
    code: code
  };

  return dispatch =>
    axios
      .post(`/api/v1/auth/password/reset/confirm/`, body)
      .then(response => {
        dispatch({
          type: "RESET_COMMON_RESPONSE",
          payload: response.data
        });
      })
      .catch(function(error) {
        dispatch({
          type: "RESET_PASSWORD_ERROR",
          payload: error.response
        });
      });
}
