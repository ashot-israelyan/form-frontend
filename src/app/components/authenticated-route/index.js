import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return rest.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={`/login/redirect=${props.location.pathname}`} />
      );
    }}
  />
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(AuthenticatedRoute);
