import React from "react";
import SkinView from "./components/SkinView/SkinView";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import configureStore from "./store";
import history from "./history";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const store = configureStore();
function App() {
  return (
    <Provider className="" store={store}>
      <ConnectedRouter history={history}>
        <div className="App"></div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
