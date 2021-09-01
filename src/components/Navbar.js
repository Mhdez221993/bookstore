import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BookStore CMS',
    },
    {
      id: 2,
      path: '/',
      text: 'Books',
    },
    {
      id: 3,
      path: '/categories',
      text: 'Categories',
    },
    {
      id: 4,
      path: '/',
      text: <AiOutlineUser className="login" />,
    },
  ];

  return (
    <nav className="navBar">
      <ul className="nav-list">
        {links.map(link => (
          <li key={link.id} className="nav-links">
            <NavLink to={link.path} activeClassName="active-link" exact>
              <span className="navigation-menu">{link.text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
