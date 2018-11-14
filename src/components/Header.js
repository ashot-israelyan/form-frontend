import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reveal as MobileMenu } from 'react-burger-menu';
import logo from '../images/logo.svg';

class Header extends Component {
  menuItems = ['Reforma Box', 'Menu', 'About', 'Contacts'];

  onMenuItemClick = e => {
    e.preventDefault();
  };

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
    return (
      <MobileMenu right>
        {this.menuItems.map((item, i) => (
          <a key={i} className={'menu-item'} href={'/'}>
            {item}
          </a>
        ))}
      </MobileMenu>
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
          <img
            src="https://storage.googleapis.com/tutor-directory-schools/dir-static/photo-1460518451285-97b6aa326961.jpeg"
            alt="Form"
          />
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
