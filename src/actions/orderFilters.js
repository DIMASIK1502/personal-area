export function setIdFilter(id) {
  return dispatch => {
    dispatch({
      type: 'SET_ID_FILTER_LIST',
      payload: id,
    });
  };
}

export function setAddressFilterList(list) {
  return dispatch => {
    dispatch({
      type: 'SET_ADDRESS_FILTER_LIST',
      payload: list,
    });
  };
}

export function setStatusFilterList(list) {
  return dispatch => {
    dispatch({
      type: 'SET_STATUS_FILTER_LIST',
      payload: list,
    });
  };
}

export function setLteDateFilter(date) {
  return dispatch => {
    dispatch({
      type: 'SET_LTE_DATE_FILTER',
      payload: date,
    });
  };
}

export function setGteDateFilter(date) {
  return dispatch => {
    dispatch({
      type: 'SET_GTE_DATE_FILTER',
      payload: date,
    });
  };
}

export function setSearchQuery(query) {
  return dispatch =>
    dispatch({
      type: 'SET_SEARCH_QUERY',
      payload: query,
    });
}

export function clearSearchQuery() {
  return dispatch =>
    dispatch({
      type: 'CLEAR_SEARCH_QUERY',
    });
}

export function clearFilter() {
  return dispatch => {
    dispatch({
      type: 'CLEAR_FILTER',
    });
  };
}
