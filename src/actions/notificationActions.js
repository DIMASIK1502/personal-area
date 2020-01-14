import axios from 'axios/index';

export function getNotificationList() {
  const config = {
    headers: {
      Accept: 'application/json',
      'Cache-Control': 'no-cache',
    },
  };

  return dispatch =>
    axios
      .get(`/api/v1/notifications/`, config)
      .then(response => {
        dispatch({
          type: 'GET_NOTIFICATION_LIST',
          payload: response.data.results,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
}
export function setNotificationList(list) {
  return dispatch => dispatch({ type: 'GET_NOTIFICATION_LIST', payload: list });
}
