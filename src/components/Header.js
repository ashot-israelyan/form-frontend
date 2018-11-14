import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    to: '/',
    text: 'Reforma Box',
  },
  {
    to: '/menu',
    text: 'Menu',
  },
  {
    to: '/about',
    text: 'About',
  },
  {
    to: '/contacts',
    text: 'Contacts',
  },
];

const isCurrent = (to, current) => {
  if (to === '/' && current === to) {
    return true;
  } else if (to !== '/' && current.includes(to)) {
    return true;
  }

  return false;
};

export default ({ current }) => (
  <header id={'header'}>
    <h1 id="title">My awesome website</h1>
    <ul id="links">
      {links.map((link, index) => (
        <li key={index} className={isCurrent(link.to, current) ? 'current' : ''}>
          <Link to={link.to}>{link.text}</Link>
        </li>
      ))}
    </ul>
  </header>
);
