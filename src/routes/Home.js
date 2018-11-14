import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { frontloadConnect } from 'react-frontload';
import { logoutUser } from '../modules/auth';

import Page from '../components/Page';
import logo from '../images/logo.svg';

const frontload = async props => await props.logoutUser();

const Home = () => (
  <Page id="homepage">
    <p>Here's our homepage. All are welcome.</p>
    <img src={logo} alt="Homepage" style={{ width: '400px' }} />
  </Page>
);

const mapDispatchToProps = dispatch => bindActionCreators({ logoutUser }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(
  frontloadConnect(frontload, {
    onMount: true,
    onUpdate: false,
  })(Home)
);
