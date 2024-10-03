import React from "react";
import { Link } from "react-router-dom";
import userprofle from '../../../assets/img/user2-160x160.jpg'

function AsideBar() {
  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Link to="index3.html" className="brand-link">
          <img
            src={userprofle}
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
              <li className="nav-item menu-open">
                <Link to="/dashboard" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>
                    Dashboard
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </Link>
              </li>
              <li className="nav-item menu-open">
                <Link to="/datatable" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>
                    DataTable
                    <i className="right fas fa-angle-left"></i>
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
