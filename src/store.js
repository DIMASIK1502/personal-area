import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import history from './history';
import rootReducer from './rootReducer';

const router = routerMiddleware(history);
const middlewares = [router, thunk];

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

export default function configureStore(initialState) {
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  const store = createStore(rootReducer(history), initialState, enhancer);
  return store;
}
