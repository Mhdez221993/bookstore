import PropTypes from 'prop-types';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = ({ title, routes }) => (
  <nav className="navBar">
    <Link to="/">{title}</Link>
    <ul className="nav-list">
      { routes.map(({ name, path }) => (
        <li key={path} className="nav-links">
          <NavLink activeClassName="active-link" exact to={path}>{name}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

Nav.propTypes = {
  title: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })).isRequired,
};

export default Nav;
