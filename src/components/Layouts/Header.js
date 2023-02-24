import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="l-header">
        <nav className="nav bd-grid">
          <div>
            <a href="#" className="nav__logo">
            Nabendu
            </a>
          </div>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink to="/" className="nav__link">
                  Home
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/about" className="nav__link">
                  About
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/skill" className="nav__link">
                  Skills
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/work" className="nav__link">
                  Work
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/contact" className="nav__link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-menu" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
