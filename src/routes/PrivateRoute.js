import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }, props) => {
  const loggedIn = props.token ? props.token : localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={props =>
        loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth/login"
            }}
          />
        )
      }
    />
  );
};

function mapStateToProps(state) {
  return {
    token: state.auth.token
  };
}

export default connect(mapStateToProps)(PrivateRoute);
