import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from './components/Header';
import Routes from './routes';
import { updateMenu } from './modules/settings';

class App extends Component {
  componentWillUnmount() {
    window.removeEventListener('resize', this.props.updateMenu);
  }

  componentDidMount() {
    window.addEventListener('resize', this.props.updateMenu);
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <Routes />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ updateMenu }, dispatch);

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
