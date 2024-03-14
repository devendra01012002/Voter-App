import React from "react";
import { NavLink } from "react-router-dom";
import { SiGnuprivacyguard } from "react-icons/si";
import { BiLogIn } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary-subtle">
        <div className="container-fluid">
          <button
            className="navbar-toggler mb-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarTogglerDemo01"
          >
            <NavLink className="navbar-brand" to="#">
              <span className="text-info-emphasis">Dapp</span>Votes
            </NavLink>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="#">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  Link
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              <NavLink className="navbar-brand" to="/signup">
                <SiGnuprivacyguard />
                Signup
              </NavLink>
              <NavLink className="navbar-brand" to="/login">
                <BiLogIn />
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
