import React, { useContext, useState } from "react";
import Layout from "./layouts/Layout";
import ShowModel from "./components/ShowModel";
import {MainContext} from '../../utils/MainContextProvider'

function AllModels() {

  const { toggleModel, handleToggleModel} = useContext(MainContext);
  const [modelById, setModelById] = useState('')

  const handleManualModel = (showModelId) => {
    setModelById(showModelId)
    handleToggleModel()
  }


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
                        id="model1"
                        onClick={()=>handleManualModel('model1' )}
                      >
                        Launch First Default Modal
                      </button>
                    </div>
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-default"
                        id="model2"
                        onClick={()=>handleManualModel('model2')}
                      >
                        Launch Second Default Modal
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ShowModel 
            toggleModel={toggleModel} 
            modelId={'model1'} 
            modelById={modelById} 
            title={'First Form'} 
            handleToggleModel={handleToggleModel}
            >
                <h1>Hello One</h1>
            </ShowModel>
            <ShowModel 
            toggleModel={toggleModel} 
            modelId={'model2'} 
            modelById={modelById} 
            title={'Second Form'} 
            handleToggleModel={handleToggleModel}
            >
                <h1>Hello Launch Second Default Modal</h1>
            </ShowModel>
          </section>
        </div>
      </Layout>
    </>
  );
}

export default AllModels;
