import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { frontloadConnect } from 'react-frontload';
import { Helmet } from 'react-helmet';

import HowItWorks from '../components/HowItWorks';
import Calculator from '../components/Calculator';
import { logoutUser } from '../modules/auth';

const frontload = async props => await props.logoutUser();

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet
          htmlAttributes={{
            lang: 'en',
            itemscope: undefined,
          }}
          title={'Form Healthy Food'}
          link={[
            {
              rel: 'canonical',
              href: `http://localhost:4000/${this.props.location.pathname}`,
            },
          ]}
        />
        <HowItWorks />
        <Calculator />
      </div>
    );
  }
}

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
