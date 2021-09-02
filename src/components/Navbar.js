import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: <span className="nav-title">BookStore CMS</span>,
    },
    {
      id: 2,
      path: '/',
      text: <span className="nav-book">Books</span>,
    },
    {
      id: 3,
      path: '/categories',
      text: <span className="nav-categories">Categories</span>,
    },
    {
      id: 4,
      path: '/',
      text: <FaUserAlt className="login" />,
    },
  ];

  return (
    <nav className="navBar">
      <ul className="nav-list">
        {links.map(link => (
          <li key={link.id} className="nav-links">
            <NavLink to={link.path} activeClassName="active-link" exact>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
