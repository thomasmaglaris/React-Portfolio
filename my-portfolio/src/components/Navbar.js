import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isActive, setisActive] = React.useState(false);
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            Thomas Maglaris
          </Link>

          <a
            onClick={() => {
              setisActive(!isActive);
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <ul className="navbar-item">
              <li className="navbar-item">
                <Link className="navbar-item" to="/about">
                  About
                </Link>
              </li>
              <li className="navbar-item">
                <Link className="navbar-item" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="navbar-item">
                <Link className="navbar-item" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="navbar-item"></div>
          </div>
        </div>
      </nav>
      <div className="border-gradient"></div>
    </div>
  );
}

export default Navbar;
