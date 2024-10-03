import React, { useState } from "react";
import Layout from "./layouts/Layout";
import ShowModel from "./components/ShowModel";

function AllModels() {
  const [show, setShow] = useState(false);
  const [showModelClass, setShowModelClass] = useState("");
  const handleShow = () => {
    const newElement = document.createElement("div");
    newElement.className = "modal-backdrop fade show";
    newElement.className = "modal-backdrop fade show";
    document.body.appendChild(newElement);
    setShowModelClass("show");
    setShow(true);
  };

  return (
    <>
      <Layout>
        <div className="content-wrapper">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>
                    Modals & Alerts
                    <small>new</small>
                  </h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Modals & Alerts</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="card card-primary card-outline">
                    <div className="card-header">
                      <h3 className="card-title">
                        <i className="fas fa-edit"></i>
                        Modal Examples
                      </h3>
                    </div>
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-default"
                        onClick={handleShow}
                      >
                        Launch Default Modal
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ShowModel show={show} title={'new Form'}>
                <h1>Hello One</h1>
            </ShowModel>
          </section>
        </div>
      </Layout>
    </>
  );
}

export default AllModels;
