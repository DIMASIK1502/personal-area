import axios from 'axios';
import moment from 'moment';

export function getOrdersList(page = 1) {
  const config = {
    headers: {
      Accept: 'application/json',
      'Cache-Control': 'no-cache',
    },
  };

  return dispatch =>
    axios
      .get(`/api/v1/service/list/?page=${page}`, config)
      .then(response => {
        dispatch({
          type: 'ORDERS_LIST',
          payload: response.data,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
}

export function searchOrders(values) {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  return dispatch =>
    axios
      .get(`/api/v1/service/list/?${values}`, config)
      .then(response => {
        dispatch({
          type: 'ORDERS_LIST',
          payload: response.data,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
}

export function filterOrders(filter, page = 1) {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  let status = [];
  let address = [];
  let ids = [];
  let dateLte = null;
  let dateGte = null;

  if (filter.status.length) {
    status = filter.status.map(status => {
      return status.id;
    });
  }

  if (filter.address.length) {
    address = filter.address.map(address => {
      return {
        flat: address.flat ? address.flat.value : null,
        house: address.house ? address.house.value : null,
        street: address.street ? address.street.value : null,
      };
    });
  }

  if (filter.id && filter.id.length) {
    ids = filter.id;
  }

  if (filter.date_gte) {
    dateGte = moment(filter.date_gte)
      .startOf('day')
      .format();
  }

  if (filter.date_lte) {
    dateLte = moment(filter.date_lte)
      .endOf('day')
      .format();
  }

  const body = {
    address: address,
    status: status,
    date_gte: dateGte,
    date_lte: dateLte,
    id: ids,
  };

  return dispatch =>
    axios
      .post(`/api/v1/service/list/filter/?page=${page}`, body, config)
      .then(response => {
        dispatch({
          type: 'ORDERS_LIST',
          payload: response.data,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
}

export function createOrder(values) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return dispatch =>
    axios
      .post('/api/v1/service/create/', values, config)
      .then(response => {
        dispatch({
          type: 'CREATED_ORDER',
          payload: true,
        });
      })
      .catch(function(error) {
        dispatch({
          type: 'CREATED_ORDER_ERROR',
          payload: error,
        });
      });
}

export function getStatusList() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  return dispatch =>
    axios
      .get('/api/v1/status/list/', config)
      .then(response => {
        dispatch({
          type: 'GET_STATUS_LIST',
          payload: response.data,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
}

export function getOrderCategories() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  return dispatch =>
    axios
      .get(`/api/v1/service/category/list`, config)
      .then(response => {
        dispatch({
          type: 'ORDER_CATEGORIES',
          payload: response.data,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
}

export function getOrderCategoriesChild(id) {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  return dispatch =>
    axios
      .get(`/api/v1/service/category/${id}/list`, config)
      .then(response => {
        dispatch({
          type: 'ORDER_CATEGORIES_CHILD',
          payload: response.data,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
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
      .get(`/api/v1/address/search/city/`, config)
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
      .get(`/api/v1/address/search/street/`, config)
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
      .get(`/api/v1/address/search/house/`, config)
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
      .get(`/api/v1/address/get/entrance/`, config)
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
      .get(`/api/v1/address/search/flat/`, config)
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

export function clearAddressSelectList() {
  return dispatch =>
    dispatch({
      type: 'CLEAR_FILTER_ADDRESS_LIST',
    });
}

export function getOrderDetail(id) {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  return dispatch =>
    axios
      .get(`/api/v1/service/${id}/`, config)
      .then(response => {
        dispatch({
          type: 'ORDER_DETAILS',
          payload: response.data,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
}
