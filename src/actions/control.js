import axios from 'axios';

// **************************** Users control ****************************
export function getUsersList(page = 1, pageSize = 10) {
  return dispatch =>
    axios
      .get(`/api/v1/admin/user/list/?page=${page}&page_size=${pageSize}`)
      .then(response => {
        dispatch({
          type: 'CONTROL_USERS_LIST',
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

export function getUserDetails(id) {
  return dispatch =>
    axios
      .get(`/api/v1/admin/user/${id}/`)
      .then(response => {
        dispatch({
          type: 'USER_DETAILS',
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

export function createUser(data) {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const body = {
    ...data,
  };

  return () => axios.post('/api/v1/admin/user/create/', body, config);
}

export function updateUser(id, data) {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const body = {
    ...data,
  };

  return () => axios.put(`/api/v1/admin/user/${id}/`, body, config);
}

export function deleteUser(id) {
  return () => axios.delete(`/api/v1/admin/user/${id}/`);
}

export function getUsersTypes() {
  return dispatch =>
    axios
      .get(`/api/v1/admin/usertype/list/`)
      .then(response => {
        dispatch({
          type: 'USERS_TYPES',
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

// **************************** Address control ****************************

export function getStatesList(page = 1) {
  return dispatch =>
    axios
      .get(`/api/v1/admin/address/state/?page=${page}`)
      .then(response => {
        dispatch({
          type: 'CONTROL_STATES_LIST',
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

export function getCitiesList(page = 1) {
  return dispatch =>
    axios
      .get(`/api/v1/admin/address/city/?page=${page}`)
      .then(response => {
        dispatch({
          type: 'CONTROL_CITIES_LIST',
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

export function getStreetsList(page = 1) {
  return dispatch =>
    axios
      .get(`/api/v1/admin/address/street/?page=${page}`)
      .then(response => {
        dispatch({
          type: 'CONTROL_STREETS_LIST',
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

export function getHousesList(page = 1, pageSize = 10, query = '', sorter = '') {
  return dispatch =>
    axios
      .get(`/api/v1/admin/address/houses/?page=${page}&page_size=${pageSize}&search=${query}&ordering=${sorter}`)
      .then(response => {
        dispatch({
          type: 'CONTROL_HOUSES_LIST',
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

export function createAddress(data) {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const body = {
    ...data,
  };

  return () => axios.post('/api/v1/admin/address/save/', body, config);
}

export function deleteAddress(id) {
  return () => axios.delete(`/api/v1/admin/address/house/${id}/`);
}

export function getAddressDetails(id) {
  return dispatch =>
    axios
      .get(`/api/v1/admin/address/house/${id}/detail/`)
      .then(response => {
        dispatch({
          type: 'ADDRESS_DETAILS',
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

export function updateAddress(id, data) {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const body = {
    ...data,
  };

  return () => axios.put(`/api/v1/admin/address/house/${id}/edit/`, body, config);
}

// **************************** Settings control ****************************

export function getSettingsList() {
  return dispatch =>
    axios
      .get('/api/v1/admin/settings/list/')
      .then(response => {
        dispatch({
          type: 'CONTROL_SETTINGS_LIST',
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

export function updateSettings(id, data) {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const body = {
    value: data,
  };

  return () => axios.put(`/api/v1/admin/settings/${id}/`, body, config);
}

// **************************** Organizations control ****************************

export function getOrganizationsList(page = 1, query = '') {
  return dispatch =>
    axios
      .get(`/api/v1/admin/contractor/list/?page=${page}&search=${query}`)
      .then(response => {
        dispatch({
          type: 'CONTROL_ORGANIZATIONS_LIST',
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

export function getOwnOrganizationsList(page = 1) {
  return dispatch =>
    axios
      .get(`/api/v1/admin/contractor/?page=${page}`)
      .then(response => {
        dispatch({
          type: 'CONTROL_OWN_ORGANIZATIONS_LIST',
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

export function getOrganizationDetails(id) {
  return dispatch =>
    axios
      .get(`/api/v1/admin/contractor/${id}/`)
      .then(response => {
        dispatch({
          type: 'ORGANIZATION_DETAILS',
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

export function addOrganization(id) {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const body = {
    contractor: [id],
  };

  return () => axios.put(`/api/v1/admin/contractor/add/`, body, config);
}

export function deleteOrganization(id) {
  return () => axios.delete(`/api/v1/admin/contractor/${id}/delete/`);
}

// **************************** Telephony control ****************************

export function createIntegrationKey(key) {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const body = {
    access_token: key,
  };

  return () => axios.post('/api/v1/uis/create/', body, config);
}

export function updateIntegrationKey(token) {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const body = {
    access_token: token,
  };

  return () => axios.put(`/api/v1/uis/update/`, body, config);
}

export function deleteIntegrationKey() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const body = {};

  return () => axios.delete(`/api/v1/uis/delete/`, body, config);
}

export function getUisDetails() {
  return dispatch =>
    axios
      .get(`/api/v1/uis/detail/`)
      .then(response => {
        dispatch({
          type: 'GET_UIS_DETAILS',
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

export function getUisList() {
  return dispatch =>
    axios
      .get(`/api/v1/uis/list/`)
      .then(response => {
        dispatch({
          type: 'GET_UIS_LIST',
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

export function getUisCalls(page = 1, pageSize = 10) {
  return dispatch =>
    axios
      .get(`/api/v1/uis/calls/?offset=${(page - 1) * pageSize}&limit=${pageSize}&is_lost=false`)
      .then(response => {
        dispatch({
          type: 'GET_UIS_CALLS',
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
