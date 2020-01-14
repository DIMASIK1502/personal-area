import axios from 'axios/index';

export function setUserAgent(userAgent) {
  return dispatch =>
    dispatch({
      type: 'SET_USER_AGENT',
      payload: userAgent,
    });
}

export function setTelephonyStatus(status) {
  return dispatch =>
    dispatch({
      type: 'SET_TELEPHONY_STATUS',
      payload: status,
    });
}

export function setSession(session) {
  return dispatch =>
    dispatch({
      type: 'SET_SESSION',
      payload: session,
    });
}

export function getUserByPhone(phone) {
  const body = {
    phone_number: phone,
  };
  return dispatch =>
    axios
      .post('/api/v1/accounts/filter/', body)
      .then(res => {
        dispatch({
          type: 'GET_USER_BY_PHONE',
          payload: res.data,
        });
      })
      .catch(error => {
        dispatch({
          type: 'NETWORK_ERROR',
          payload: error.response,
        });
      });
}

export function clearUserByPhone() {
  return dispatch =>
    dispatch({
      type: 'CLEAR_USER_BY_PHONE',
    });
}

export function setNewUserPhone(phone) {
  return dispatch =>
    dispatch({
      type: 'SET_NEW_USER_PHONE',
      payload: phone,
    });
}

export function clearNewUserPhone() {
  return dispatch =>
    dispatch({
      type: 'CLEAR_NEW_USER_PHONE',
    });
}

export function newMissedCall(body) {
  return dispatch =>
    axios
      .post('/api/v1/uis/call/create/', body)
      .then(res => {
        dispatch({
          type: 'NEW_MISSED_CALL',
          payload: res.data,
        });
      })
      .catch(error => {
        dispatch({
          type: 'NETWORK_ERROR',
          payload: error.response,
        });
      });
}

export function getMissedCalls() {
  return dispatch =>
    axios
      .get('/api/v1/uis/calls/journal/?is_lost=true&is_called_back=false&direction=in&limit=9')
      .then(res => {
        dispatch({
          type: 'GET_MISSED_CALLS',
          payload: res.data,
        });
      })
      .catch(error => {
        dispatch({
          type: 'NETWORK_ERROR',
          payload: error.response,
        });
      });
}

export function handleCallBack(id) {
  const body = {
    is_called_back: true,
  };

  return dispatch =>
    axios
      .put(`/api/v1/uis/call/${id}/`, body)
      .then(res => {
        dispatch({
          type: 'HANDLE_CALL_BACK',
          payload: res.data,
        });
      })
      .catch(error => {
        dispatch({
          type: 'NETWORK_ERROR',
          payload: error.response,
        });
      });
}

export function getCallsJournal(page = 1, pageSize = 10) {
  return dispatch =>
    axios
      .get(`/api/v1/uis/calls/journal/?limit=${pageSize}&offset=${pageSize * (page - 1)}`)
      .then(res => {
        dispatch({
          type: 'GET_CALLS_JOURNAL',
          payload: res.data,
        });
      })
      .catch(error => {
        dispatch({
          type: 'NETWORK_ERROR',
          payload: error.response,
        });
      });
}
