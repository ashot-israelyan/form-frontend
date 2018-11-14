import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import { establishCurrentUser } from './modules/auth';
import { isServer } from './store';

import Header from './components/Header';
import Routes from './routes';

class App extends Component {
  componentDidMount() {
    if (!isServer) {
      this.props.establishCurrentUser();
    }
  }

  render() {
    return (
      <div id={'app'}>
        <Header current={this.props.location.pathname} />
        <div id={'content'}>
          <Routes />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ establishCurrentUser }, dispatch);

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
