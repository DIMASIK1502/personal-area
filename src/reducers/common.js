const initialState = {
  panelOpen: false,
  panelVisible: false,
  callsPanelOpen: false,
  callsPanelVisible: false,
  loadingStatistics: false,
  companyInfo: null,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'TOGGLE_NOTIFICATION_PANEL':
      return { ...state, panelOpen: action.payload };
    case 'TOGGLE_NOTIFICATION_VISIBLE_PANEL':
      return { ...state, panelVisible: action.payload };
    case 'TOGGLE_CALLS_PANEL':
      return { ...state, callsPanelOpen: action.payload };
    case 'TOGGLE_CALLS_VISIBLE_PANEL':
      return { ...state, callsPanelVisible: action.payload };
    case 'TOGGLE_LOADING_STATISTICS':
      return { ...state, loadingStatistics: action.payload };
    case 'GET_COMPANY_INFO':
      return { ...state, companyInfo: action.payload };
    default:
      return state;
  }
};
