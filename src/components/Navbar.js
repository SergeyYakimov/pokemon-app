import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-info">
    <div className="navbar-brand">
      Pokemon App
    </div>
    <ul className="navbar-nav">
      <li className="navbar-item">
        <NavLink to="/" exact className="nav-link">Главная</NavLink>
      </li>
      <li className="navbar-item">
        <NavLink to="/list" className="nav-link">Список покемонов</NavLink>
      </li>
    </ul>
  </nav>
)