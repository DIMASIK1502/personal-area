import React from "react";
import SkinView from "./components/SkinView/SkinView";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import configureStore from "./store";
import history from "./history";
import Root from "./routes/Root";
import "bootstrap/dist/css/bootstrap.min.css";
import "rsuite/dist/styles/rsuite-default.css";
import "./App.css";

const store = configureStore();
function App() {
  return (
    <Provider className="" store={store}>
      <Router history={history}>
        <Root></Root>
      </Router>
    </Provider>
  );
}

export default App;
