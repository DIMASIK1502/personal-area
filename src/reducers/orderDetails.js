const initialState = {
  commentsList: null,
  uploadError: false,
  uploadSuccess: null,
  engineersList: [],
  executorsList: [],
  contractorsList: [],
  historyList: { results: [], count: 0 },
  settingsList: null,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_COMMENTS_LIST':
      return { ...state, commentsList: action.payload.results };

    case 'COMMENT_CREATED':
      return { ...state, createdComment: action.payload };

    case 'COMMENT_CREATED_ERROR':
      return { ...state, createdCommentError: action.payload };

    case 'UPLOAD_SUCCESS':
      return { ...state, uploadSuccess: action.payload };

    case 'UPLOAD_ERROR':
      return { ...state, uploadError: action.payload };

    case 'ENGINEERS_LIST':
      return { ...state, engineersList: action.payload.results };

    case 'EXECUTORS_LIST':
      return { ...state, executorsList: action.payload.results };

    case 'CONTRACTORS_LIST':
      return { ...state, contractorsList: action.payload.results };

    case 'SETTINGS_LIST':
      return { ...state, settingsList: action.payload };

    case 'GET_HISTORY_LIST':
      return {
        ...state,
        historyList: action.payload,
      };

    default:
      return state;
  }
};
