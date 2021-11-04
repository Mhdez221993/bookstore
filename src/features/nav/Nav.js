import PropTypes from 'prop-types';
import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = ({ title, routes }) => (
  <nav className="navBar">
    <ul className="nav-list">
      <li>
        <Link to="/"><h1 className="nav-title">{title}</h1></Link>
      </li>
      { routes.map(({ name, path }) => (
        <li key={path} className="nav-links">
          <NavLink className="active" activeClassName="active-link" exact to={path}>{name}</NavLink>
        </li>
      ))}
      <li className="login">
        <FaUserAlt />
      </li>
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
