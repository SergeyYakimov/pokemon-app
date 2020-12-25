import React from 'react';

export const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-info">
    <div className="navbar-brand">
      Pokemon App
    </div>
    <ul className="navbar-nav">
      <li className="navbar-item">
        <a href="/" className="nav-link">Главная</a>
      </li>
      <li className="navbar-item">
        <a href="/list" className="nav-link">Список покемонов</a>
      </li>
    </ul>
  </nav>
)