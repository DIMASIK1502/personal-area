import axios from 'axios';

export function createUser(values) {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const data = {
    ...values,
  };

  return () => axios.post('/api/v1/service/create/user/', data, config);
}

export function editUser(values, id) {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const data = {
    ...values,
  };

  return () => axios.put(`/api/v1/service/create/user/${id}/`, data, config);
}

export function findUser(values) {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  return dispatch =>
    axios
      .get(`/api/v1/service/applicant/list?${values}`, config)
      .then(response => {
        dispatch({
          type: 'USERS_FOUND',
          payload: response.data,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
}

export function findUserOrders(id) {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  return dispatch =>
    axios
      .get(`/api/v1/service/${id}/list`, config)
      .then(response => {
        dispatch({
          type: 'FOUND_USER_ORDERS',
          payload: response.data,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
}

export function setUserProfileInfo(data) {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  return () => axios.put(`/api/v1/accounts/profile/edit/`, data, config);
}

export function setUserAvatar(image) {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  return () => axios.put(`/api/v1/accounts/profile/edit/avatar/`, image, config);
}

export function setUserAddressInfo(data) {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  return () => axios.post(`/api/v1/address/save/`, data, config);
}

export function getFilterCityList(query = null) {
  let config = {
    headers: {
      Accept: 'application/json',
    },
    params: {},
  };
  if (query) {
    config['params']['query'] = query;
  }
  return dispatch =>
    axios
      .get(`/api/v1/address/search/city/?all`, config)
      .then(response => {
        dispatch({
          type: 'GET_FILTER_CITY_LIST',
          payload: response.data,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
}

export function getFilterStreetList(query = null, city = null) {
  let config = {
    headers: {
      Accept: 'application/json',
    },
    params: {},
  };
  if (city) {
    config['params']['city'] = city;
  }
  if (query) {
    config['params']['query'] = query;
  }
  return dispatch =>
    axios
      .get(`/api/v1/address/search/street/?all`, config)
      .then(response => {
        dispatch({
          type: 'GET_FILTER_STREET_LIST',
          payload: response.data,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
}

export function getFilterHouseList(query = null, city = null, street = null) {
  let config = {
    headers: {
      Accept: 'application/json',
    },
    params: {},
  };
  if (city) {
    config['params']['city'] = city;
  }
  if (street) {
    config['params']['street'] = street;
  }
  if (query) {
    config['params']['query'] = query;
  }
  return dispatch =>
    axios
      .get(`/api/v1/address/search/house/?all`, config)
      .then(response => {
        dispatch({
          type: 'GET_FILTER_HOUSE_LIST',
          payload: response.data,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
}

export function getFilterEntranceList(query = null, city = null, street = null, house = null) {
  let config = {
    headers: {
      Accept: 'application/json',
    },
    params: {},
  };
  if (city) {
    config['params']['city'] = city;
  }
  if (street) {
    config['params']['street'] = street;
  }
  if (house) {
    config['params']['house'] = house;
  }

  return dispatch =>
    axios
      .get(`/api/v1/address/get/entrance/?all`, config)
      .then(response => {
        dispatch({
          type: 'GET_FILTER_ENTRANCE_LIST',
          payload: response.data,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
}

export function getFilterFlatList(query = null, city = null, street = null, house = null) {
  let config = {
    headers: {
      Accept: 'application/json',
    },
    params: {},
  };
  if (city) {
    config['params']['city'] = city;
  }
  if (street) {
    config['params']['street'] = street;
  }
  if (query) {
    config['params']['query'] = query;
  }
  if (house) {
    config['params']['house'] = house;
  }

  return dispatch =>
    axios
      .get(`/api/v1/address/search/flat/?all`, config)
      .then(response => {
        dispatch({
          type: 'GET_FILTER_FLAT_LIST',
          payload: response.data,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
}

export function getBlockedUsersList(page = 1) {
  return dispatch =>
    axios
      .get(`/api/v1/accounts/blocking/?page=${page}`)
      .then(response => {
        dispatch({
          type: 'BLOCKED_USERS_LIST',
          payload: response.data,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
}

export function setBlockedUser(data) {
  return () => axios.post(`/api/v1/accounts/blocking/`, data);
}

export function unblockUser(id) {
  return () => axios.delete(`/api/v1/accounts/blocking/${id}`);
}

export function getSipLine() {
  return dispatch =>
    axios
      .get(`/api/v1/uis/sip/`)
      .then(response => {
        dispatch({
          type: 'GET_SIP_LINE',
          payload: response.data,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
}
