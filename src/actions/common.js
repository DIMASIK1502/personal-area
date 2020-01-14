import axios from 'axios/index';

export function togglePanelState(state) {
  return dispatch =>
    dispatch({
      type: 'TOGGLE_NOTIFICATION_PANEL',
      payload: !state,
    });
}

export function toggleVisiblePanelState(state) {
  return dispatch =>
    dispatch({
      type: 'TOGGLE_NOTIFICATION_VISIBLE_PANEL',
      payload: !state,
    });
}

export function toggleCallsState(state) {
  return dispatch =>
    dispatch({
      type: 'TOGGLE_CALLS_PANEL',
      payload: !state,
    });
}

export function toggleVisibleCallsState(state) {
  return dispatch =>
    dispatch({
      type: 'TOGGLE_CALLS_VISIBLE_PANEL',
      payload: !state,
    });
}

export function toggleStatisticsLoading(state) {
  return dispatch =>
    dispatch({
      type: 'TOGGLE_LOADING_STATISTICS',
      payload: !state,
    });
}

export function sendError(data) {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const body = {
    data: data,
  };

  return () => axios.post('/api/v1/logging/', body, config);
}

export function getCompanyInfo() {
  return dispatch =>
    axios
      .get('/api/v1/settings/user/list/')
      .then(res => {
        dispatch({
          type: 'GET_COMPANY_INFO',
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
