import axios from 'axios';

export function orderUpdate(orderId, data) {
  const config = {
    headers: {
      Accept: 'application/json',
      enctype: 'multipart/form-data',
    },
  };

  return dispatch =>
    axios
      .put(`/api/v1/service/${orderId}/update/`, data, config)
      .then(response => {
        dispatch({
          type: 'UPLOAD_SUCCESS',
          payload: response.status,
        });
        dispatch({
          type: 'UPLOAD_ERROR',
          payload: false,
        });
        dispatch({
          type: 'ORDER_DETAILS',
          payload: response.data,
        });
      })
      .catch(function(error) {
        dispatch({
          type: 'UPLOAD_SUCCESS',
          payload: null,
        });
        dispatch({
          type: 'UPLOAD_ERROR',
          payload: true,
        });
      });
}

export function orderUpdateAsync(orderId, data) {
  const config = {
    headers: {
      Accept: 'application/json',
      enctype: 'multipart/form-data',
    },
  };

  return () => axios.put(`/api/v1/service/${orderId}/update/`, data, config);
}

export function orderUpdateSuccess(data) {
  return dispatch =>
    dispatch({
      type: 'ORDER_DETAILS',
      payload: data,
    });
}

export function getCommentsList(orderId) {
  const config = {
    headers: {
      Accept: 'application/json',
      'Cache-Control': 'no-cache',
    },
  };

  return dispatch =>
    axios
      .get(`/api/v1/service/${orderId}/comment/list`, config)
      .then(response => {
        dispatch({
          type: 'GET_COMMENTS_LIST',
          payload: response.data,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
}

export function getHistory(orderId, page = 1, pageSize = 10, isChecked = true) {
  const config = {
    headers: {
      Accept: 'application/json',
      'Cache-Control': 'no-cache',
    },
  };

  return dispatch =>
    axios
      .get(`/api/v1/service/history/?service=${orderId}&seen=${!isChecked}&page=${page}&page_size=${pageSize}`, config)
      .then(response => {
        dispatch({
          type: 'GET_HISTORY_LIST',
          payload: response.data,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
}

export function addComment(orderId, comment) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = {
    body: comment,
  };

  return dispatch =>
    axios
      .post(`/api/v1/service/${orderId}/comment/`, body, config)
      .then(response => {
        dispatch({
          type: 'COMMENT_CREATED',
          payload: response.data,
        });
      })
      .catch(function(error) {
        dispatch({
          type: 'COMMENT_CREATED_ERROR',
          payload: error,
        });
      });
}
export function deleteFile(serviceId, fileId) {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  return () => axios.delete(`/api/v1/service/${serviceId}/files/${fileId}/`, config);
}

export function deleteImage(serviceId, imageId) {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  return () => axios.delete(`/api/v1/service/${serviceId}/images/${imageId}/`, config);
}
export function uploadDocument(orderId, doc, type) {
  const config = {
    headers: {
      enctype: 'multipart/form-data',
    },
  };
  return () => axios.post(`/api/v1/service/${orderId}/${type}s/`, doc, config);
}

// export function deleteDocument(serviceId, docId, type) {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };
//   return () => axios.delete(`/api/v1/service/${serviceId}/${type}s/delete/${docId}`, config);
// }

export function uploadFile(orderId, file) {
  const config = {
    headers: {
      Accept: 'application/json',
      enctype: 'multipart/form-data',
    },
  };
  return () => axios.post(`/api/v1/service/${orderId}/file/`, { file: file }, config);
}

export function getEngineersList() {
  return dispatch =>
    axios
      .get(`/api/v1/accounts/list/engineer/`)
      .then(response => {
        dispatch({
          type: 'ENGINEERS_LIST',
          payload: response.data,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
}

export function getExecutorsList() {
  return dispatch =>
    axios
      .get(`/api/v1/accounts/list/worker/`)
      .then(response => {
        dispatch({
          type: 'EXECUTORS_LIST',
          payload: response.data,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
}

export function getContractorsList() {
  return dispatch =>
    axios
      .get(`/api/v1/service/contractor/list/`)
      .then(response => {
        dispatch({
          type: 'CONTRACTORS_LIST',
          payload: response.data,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
}

export function getSettingsList() {
  return dispatch =>
    axios
      .get(`/api/v1/settings/list/`)
      .then(response => {
        dispatch({
          type: 'SETTINGS_LIST',
          payload: response.data,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
}
