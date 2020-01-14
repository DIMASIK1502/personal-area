import moment from 'moment';
import { createdAtFormat } from '../helpers/dateFormat';

const initialState = {
  ordersList: [],
  formattedList: [],
  statusList: [],
  filterCityList: [],
  filterStreetList: [],
  filterHouseList: [],
  filterEntranceList: [],
  filterFlatList: [],
  error: '',
  searchQuery: {},
  orderCategories: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ORDERS_LIST':
      let tempFormattedList = action.payload.results.map(order => ({
        key: order.id,
        num: order.service_number,
        category: order.category ? order.category.name : 'Не указана',
        status: order.status_info.name,
        statusColor: order.status_info.color,
        address: order.address
          ? `ул. ${order.address.street.name}, д. ${order.address.house.house_number}, п. ${
              order.address.entrance_number
            }, кв. ${order.address.flat_number}`
          : 'Не указан',
        creation_date: {
          date: createdAtFormat(order.created_at),
          time: moment(order.created_at).format('HH:mm'),
        },
      }));
      return { ...state, ordersList: action.payload, formattedList: tempFormattedList };

    case 'CREATED_ORDER':
      return { ...state, createdOrder: action.payload, createdOrderError: null };

    case 'CREATED_ORDER_ERROR':
      return { ...state, createdOrderError: action.payload };

    case 'ORDER_CATEGORIES':
      return { ...state, orderCategories: action.payload };

    case 'ORDER_CATEGORIES_CHILD':
      return { ...state, orderCategoriesChild: action.payload.results };

    case 'ORDER_DETAILS':
      return { ...state, orderDetails: action.payload };

    case 'GET_STATUS_LIST':
      return { ...state, statusList: action.payload.results };

    case 'GET_FILTER_CITY_LIST':
      return { ...state, filterCityList: action.payload.suggestions };

    case 'GET_FILTER_STREET_LIST':
      return { ...state, filterStreetList: action.payload.suggestions };

    case 'GET_FILTER_HOUSE_LIST':
      return { ...state, filterHouseList: action.payload.suggestions };

    case 'GET_FILTER_ENTRANCE_LIST':
      return { ...state, filterEntranceList: Array.from({ length: action.payload.entrance_count }, (v, k) => k + 1) };

    case 'GET_FILTER_FLAT_LIST':
      return { ...state, filterFlatList: action.payload.suggestions };

    case 'CLEAR_FILTER_ADDRESS_LIST':
      return { ...state, filterFlatList: [], filterHouseList: [], filterStreetList: [] };

    case 'USER_LOGOUT':
      return {
        ...state,
        ordersList: [],
        formattedList: [],
      };

    default:
      return state;
  }
};
