import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faTruck, faClone } from '@fortawesome/free-solid-svg-icons';

import Header from './components/Header';
import Routes from './routes';
import { updateMenu } from './modules/settings';

library.add(faEnvelope);
library.add(faTruck);
library.add(faClone);

class App extends Component {
  componentWillUnmount() {
    window.removeEventListener('resize', this.props.updateMenu);
  }

  componentDidMount() {
    window.addEventListener('resize', this.props.updateMenu);

    this.props.updateMenu();
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
