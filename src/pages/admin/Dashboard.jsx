import React from "react";
import Layout from "./layouts/Layout";
import { Link } from "react-router-dom";
import userprofle from "../../assets/img/user2-160x160.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faCartFlatbedSuitcase,
  faCog,
  faShoppingCart,
  faThumbsUp,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import AnalyticCard from "./components/AnalyticCard";

function Dashboard() {
  return (
    <>
      <Layout>
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Dashboard</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <Link to="#">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Dashboard v1</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3 col-6">
                  <AnalyticCard />
                </div>

                <div className="col-lg-3 col-6">
                  <div className="small-box bg-success">
                    <div className="inner">
                      <h3>53</h3>

                      <p>Bounce Rate</p>
                    </div>
                    <div className="icon">
                      <FontAwesomeIcon icon={faCartFlatbedSuitcase} />
                    </div>
                    <Link to="#" className="small-box-footer">
                      More info
                      <FontAwesomeIcon icon={faArrowCircleRight} />
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-6">
                  <div className="small-box bg-warning">
                    <div className="inner">
                      <h3>44</h3>

                      <p>User Registrations</p>
                    </div>
                    <div className="icon">
                      <FontAwesomeIcon icon={faCartFlatbedSuitcase} />
                    </div>
                    <Link to="#" className="small-box-footer">
                      More info
                      <FontAwesomeIcon icon={faArrowCircleRight} />
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-6">
                  <div className="small-box bg-danger">
                    <div className="inner">
                      <h3>65</h3>

                      <p>Unique Visitors</p>
                    </div>
                    <div className="icon">
                      <FontAwesomeIcon icon={faCartFlatbedSuitcase} />
                    </div>
                    <Link to="#" className="small-box-footer">
                      More info
                      <FontAwesomeIcon icon={faArrowCircleRight} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="info-box">
                    <span className="info-box-icon bg-info elevation-1">
                      <FontAwesomeIcon icon={faCog} />
                    </span>

                    <div className="info-box-content">
                      <span className="info-box-text">CPU Traffic</span>
                      <span className="info-box-number">
                        10
                        <small>%</small>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3">
                  <div className="info-box mb-3">
                    <span className="info-box-icon bg-danger elevation-1">
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </span>
                    <div className="info-box-content">
                      <span className="info-box-text">Likes</span>
                      <span className="info-box-number">41,410</span>
                    </div>
                  </div>
                </div>

                <div className="clearfix hidden-md-up"></div>

                <div className="col-12 col-sm-6 col-md-3">
                  <div className="info-box mb-3">
                    <span className="info-box-icon bg-success elevation-1">
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </span>

                    <div className="info-box-content">
                      <span className="info-box-text">Sales</span>
                      <span className="info-box-number">760</span>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3">
                  <div className="info-box mb-3">
                    <span className="info-box-icon bg-warning elevation-1">
                      <FontAwesomeIcon icon={faUsers} />
                    </span>

                    <div className="info-box-content">
                      <span className="info-box-text">New Members</span>
                      <span className="info-box-number">2,000</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Latest Members</h3>

                      <div className="card-tools">
                        <span className="badge badge-danger">8 New Members</span>
                        <button
                          type="button"
                          className="btn btn-tool"
                          data-card-widget="collapse"
                        >
                          <i className="fas fa-minus"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-tool"
                          data-card-widget="remove"
                        >
                          <i className="fas fa-times"></i>
                        </button>
                      </div>
                    </div>

                    <div className="card-body p-0">
                      <ul className="users-list clearfix">
                        <li>
                          <img src={userprofle} alt="User Image" />
                          <a className="users-list-name" href="#">
                            Alexander Pierce
                          </a>
                          <span className="users-list-date">Today</span>
                        </li>
                        <li>
                          <img src={userprofle} alt="User Image" />
                          <a className="users-list-name" href="#">
                            Norman
                          </a>
                          <span className="users-list-date">Yesterday</span>
                        </li>
                        <li>
                          <img src={userprofle} alt="User Image" />
                          <a className="users-list-name" href="#">
                            Jane
                          </a>
                          <span className="users-list-date">12 Jan</span>
                        </li>
                        <li>
                          <img src={userprofle} alt="User Image" />
                          <a className="users-list-name" href="#">
                            John
                          </a>
                          <span className="users-list-date">12 Jan</span>
                        </li>
                        <li>
                          <img src={userprofle} alt="User Image" />
                          <a className="users-list-name" href="#">
                            Alexander
                          </a>
                          <span className="users-list-date">13 Jan</span>
                        </li>
                        <li>
                          <img src={userprofle} alt="User Image" />
                          <a className="users-list-name" href="#">
                            Sarah
                          </a>
                          <span className="users-list-date">14 Jan</span>
                        </li>
                        <li>
                          <img src={userprofle} alt="User Image" />
                          <a className="users-list-name" href="#">
                            Nora
                          </a>
                          <span className="users-list-date">15 Jan</span>
                        </li>
                        <li>
                          <img src={userprofle} alt="User Image" />
                          <a className="users-list-name" href="#">
                            Nadia
                          </a>
                          <span className="users-list-date">15 Jan</span>
                        </li>
                      </ul>
                    </div>

                    <div className="card-footer text-center">
                      <a href="javascript:">View All Users</a>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="info-box mb-3 bg-warning">
                    <span className="info-box-icon">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    </span>

                    <div className="info-box-content">
                      <span className="info-box-text">Inventory</span>
                      <span className="info-box-number">5,200</span>
                    </div>
                  </div>

                  <div className="info-box mb-3 bg-success">
                    <span className="info-box-icon">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    </span>

                    <div className="info-box-content">
                      <span className="info-box-text">Mentions</span>
                      <span className="info-box-number">92,050</span>
                    </div>
                  </div>

                  <div className="info-box mb-3 bg-danger">
                    <span className="info-box-icon">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    </span>

                    <div className="info-box-content">
                      <span className="info-box-text">Downloads</span>
                      <span className="info-box-number">114,381</span>
                    </div>
                  </div>

                  <div className="info-box mb-3 bg-info">
                    <span className="info-box-icon">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    </span>

                    <div className="info-box-content">
                      <span className="info-box-text">Direct Messages</span>
                      <span className="info-box-number">163,921</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

export default Dashboard;
