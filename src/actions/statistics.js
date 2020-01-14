import axios from 'axios/index';

export function getStatisticsLocation(values) {
  const config = {
    headers: {
      Accept: 'application/json',
      'Cache-Control': 'no-cache',
    },
  };

  return dispatch =>
    axios
      .get(`/api/v1/statistic/location/?${values}`, config)
      .then(response => {
        dispatch({
          type: 'GET_STATISTICS_LOCATION',
          payload: response.data,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
}

export function getStatisticsOperational() {
  const config = {
    headers: {
      Accept: 'application/json',
      'Cache-Control': 'no-cache',
    },
  };

  return dispatch =>
    axios
      .get(`/api/v1/statistic/operational/`, config)
      .then(response => {
        dispatch({
          type: 'GET_OPERATIONAL_LOCATION',
          payload: response.data,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
}
