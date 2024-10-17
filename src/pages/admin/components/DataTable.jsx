import React, { useContext, useState } from "react";
import {
  faFolder,
  faPencilAlt,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShowModel from "./ShowModel";
import { MainContext } from "../../../utils/MainContextProvider";
import FormInput from "./FormInput";
import DetailsInfo from "./DetailsInfo";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DataTable(props) {
  const { users } = props;

  const { toggleModel, handleToggleModel } = useContext(MainContext);
  const [modelById, setModelById] = useState("");

  const handleManualModel = (showModelId) => {
    setModelById(showModelId);
    handleToggleModel();
  };

  const notifyByToastify = () => {
    console.log("Clled infor!");
    toast("Wow so easy!");
  };

  return (
    <>
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">
                      DataTable with minimal features & hover style
                    </h3>
                    <span className="float-right">
                      <button
                        className="btn btn-primary btn-sm btn-m-5"
                        onClick={() => handleManualModel("add-model")}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                        <span className="btn-m-5"> Add New </span>
                      </button>
                    </span>
                  </div>

                  <div className="card-body">
                    <table
                      id="example2"
                      className="table table-bordered table-hover"
                    >
                      <thead>
                        <tr>
                          <th>First name</th>
                          <th>Last name</th>
                          <th>Email</th>
                          <th>Gender</th>
                          <th>Role</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users &&
                          users.map((user) => (
                            <tr>
                              <td>{user?.firstName}</td>
                              <td>{user?.lastName}</td>
                              <td>{user?.email}</td>
                              <td>{user?.gender}</td>
                              <td>
                                {" "}
                                <span className="badge badge-success">
                                  {user?.gender}
                                </span>
                              </td>
                              <td>
                                <button
                                  className="btn btn-primary btn-sm btn-m-5"
                                  onClick={() =>
                                    handleManualModel("details-model")
                                  }
                                >
                                  <FontAwesomeIcon icon={faFolder} />
                                  <span className="btn-m-5"> View</span>
                                </button>
                                <button
                                  className="btn btn-info btn-sm btn-m-5"
                                  onClick={() =>
                                    handleManualModel("update-model")
                                  }
                                >
                                  <FontAwesomeIcon icon={faPencilAlt} />
                                  <span className="btn-m-5"> Edit</span>
                                </button>
                                <span className="btn btn-danger btn-sm btn-m-5">
                                  <FontAwesomeIcon icon={faTrash} />
                                  <span
                                    className="btn-m-5"
                                    onClick={() => notifyByToastify()}
                                  >
                                    {" "}
                                    Delete
                                  </span>
                                </span>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="card-footer clearfix">
                    <ul className="pagination pagination-sm m-0 float-right">
                      <li className="page-item">
                        <a className="page-link">&laquo;</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link">1</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link">2</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link">3</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link">&raquo;</a>
                      </li>
                    </ul>
                  </div>
                </div>

          <ShowModel
            toggleModel={toggleModel}
            modelId={"add-model"}
            modelById={modelById}
            title={"Add New"}
            showFooter={false}
            showHeader={true}
            handleToggleModel={handleToggleModel}
          >
            <FormInput />
          </ShowModel>

          <ShowModel
            toggleModel={toggleModel}
            modelId={"update-model"}
            modelById={modelById}
            title={"Update model"}
            showFooter={false}
            showHeader={true}
            handleToggleModel={handleToggleModel}
          >
            <FormInput />
          </ShowModel>

          <ShowModel
            toggleModel={toggleModel}
            modelId={"details-model"}
            modelById={modelById}
            title={"Detail Info"}
            showFooter={false}
            showHeader={true}
            handleToggleModel={handleToggleModel}
          >
            <DetailsInfo />
          </ShowModel>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
}

export default DataTable;
