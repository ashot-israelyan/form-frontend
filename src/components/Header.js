import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from 'react-sidebar';
import logo from '../images/logo-white.png';
import bgImage from '../images/header.png';

class Header extends Component {
  constructor() {
    super();

    this.menuItems = ['Reforma Box', 'Menu', 'About', 'Contacts'];
    this.state = {
      sidebarOpen: false,
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onMenuItemClick = e => {
    e.preventDefault();
  };

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  renderDesktopMenu() {
    return (
      <>
        <div className="menu">
          <ul>
            {this.menuItems.map((item, i) => (
              <li className={'menu-item'} key={i}>
                <a href="/" onClick={this.onMenuItemClick}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={'menu-placeholder'} />
      </>
    );
  }

  renderMobileMenu() {
    const { sidebarOpen } = this.state;
    return (
      <Sidebar
        sidebar={
          <nav className={'mobile-menu-items'}>
            {this.menuItems.map((item, i) => (
              <a href={'/'} key={i} onClick={this.onMenuItemClick}>
                {item}
              </a>
            ))}
          </nav>
        }
        open={sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: 'white' } }}
        rootClassName={'mobile-menu'}
        sidebarClassName={'mobile-menu-sidebar'}
      >
        <button
          className={`mobile-menu-button hamburger hamburger--squeeze ${sidebarOpen ? 'is-active' : ''}`}
          type="button"
          onClick={() => this.onSetSidebarOpen(true)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </Sidebar>
    );
  }

  render() {
    const {
      screen: { layout },
    } = this.props;
    return (
      <header className={'header'}>
        <div className="top">
          <div className="container">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>

            {layout !== 'mobile' && this.renderDesktopMenu()}
            {layout === 'mobile' && this.renderMobileMenu()}
          </div>
        </div>
        <div className="background">
          <div className={'overlay'} />
          <img src={bgImage} alt="Form" />
        </div>
        <div className="inner">
          <h4>Meet Form</h4>
          <h1>FORM: ваша реформа каждый день</h1>
          <h3>The greatest mistake you can make in life is continually fearing that you'll make one.</h3>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ settings }) => ({
  screen: settings.screen,
});

export default connect(mapStateToProps)(Header);
