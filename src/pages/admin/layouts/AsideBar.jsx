import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import userLogo from '../../../assets/img/eRMC.png'
import userprofle from '../../../assets/img/user2-160x160.jpg'

function AsideBar() {

  const [activeMenu, setActiveMenu] = useState()

  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Link to="/" className="brand-link">
          <img
            src={userLogo}
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
          />
          <span className="brand-text font-weight-light">eRMC</span>
        </Link>

        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src={userprofle}
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <Link to="#" className="d-block">
                Alexander Pierce
              </Link>
            </div>
          </div>

          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item menu-open" onClick={()=>setActiveMenu()}>
                <Link to="/dashboard" className={`nav-link ${activeMenu}`}>
                <FontAwesomeIcon className="nav-icon" icon={faTachometerAlt} />
                  <p>
                    Dashboard
                  </p>
                </Link>
              </li>
              <li className="nav-item menu-open">
                <Link to="/datatable" className="nav-link">
                <FontAwesomeIcon className="nav-icon" icon={faTachometerAlt} />
                  <p>
                    DataTable
                  </p>
                </Link>
              </li>
              {/* <li className="nav-item menu-open">
                <Link to="/add-new" className="nav-link">
                <FontAwesomeIcon className="nav-icon" icon={faTachometerAlt} />
                  <p>
                    Form Inputs
                  </p>
                </Link>
              </li> */}
              <li className="nav-item menu-open">
                <Link to="/my-profile" className="nav-link">
                <FontAwesomeIcon className="nav-icon" icon={faTachometerAlt} />
                  <p>
                    My Profile
                  </p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default AsideBar;
