import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCog,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import { MainContext } from "../../../utils/MainContextProvider";
import AppLogout from "../components/AppLogout";

function TopHeader() {
  const { status, handleSideMenuToggle } = useContext(MainContext);
  const [toggleSearch, setToggleSearch] = useState("navbar-search-block");
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const profileSettingDropdown = toggleDropdown ? "show" : null;

  return (
    <>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              className="nav-link"
              onClick={() => handleSideMenuToggle(!status)}
            >
              <FontAwesomeIcon icon={faBars} />
            </Link>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="index3.html" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="#" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link
              className="nav-link"
              role="button"
              onClick={() =>
                setToggleSearch("navbar-search-block navbar-search-open")
              }
            >
              <FontAwesomeIcon icon={faSearch} />
            </Link>
            <div className={toggleSearch}>
              <form className="form-inline">
                <div className="input-group input-group-sm">
                  <input
                    className="form-control form-control-navbar"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <button
                      className="btn btn-navbar"
                      type="button"
                      onClick={() => setToggleSearch("navbar-search-block")}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
          <li className="nav-item dropdown show">
            <a
              className="nav-link dropdown-toggle"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            >
              My Account
            </a>
            <ul
              class={`dropdown-menu border-0 shadow ${profileSettingDropdown}`}
            >
              <li>
                <a className="dropdown-item">
                  <Link className="nav-link btn-m-5">
                    My Profile <FontAwesomeIcon icon={faCog} />
                  </Link>
                </a>
              </li>
              <li>
                <a className="dropdown-item">
                  <AppLogout />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default TopHeader;
