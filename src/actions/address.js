import axios from 'axios';

export function getAddressList(page = 1, pageSize = 10, query = '', sorter = '') {
  return dispatch =>
    axios
      .get(`/api/v1/address/houses/?page=${page}&page_size=${pageSize}&search=${query}&ordering=${sorter}`)
      .then(response => {
        dispatch({
          type: 'ADDRESS_LIST',
          payload: response.data,
        });
      })
      .catch(function(error) {
        dispatch({
          type: 'NETWORK_ERROR',
          payload: error.response,
        });
      });
}

export function parseExcelFile(data) {
  const config = {
    headers: {
      Accept: 'application/json',
      enctype: 'multipart/form-data',
    },
  };

  return () => axios.post('/api/v1/admin/datatransfer/address/parse/excel/', data, config);
}

export function loadParsedData(data) {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  return () => axios.post('/api/v1/admin/datatransfer/address/load/', data, config);
}
