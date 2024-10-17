import React, { useState } from "react";
import Layout from "../layouts/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faEye,
  faPencilSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import AddCategory from "./AddCategory";
import UpdateCategory from "./UpdateCategory";
import DetailProject from "./DetailCategory";
import {
  useGetCategoriesQuery,
  useDeleteCategoryMutation,
} from "../../../services/ermcApi";
import { Link } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Categories() {
  const [page, setPage] = useState(1);
  const [toggleDetailsModel, setToogleDetailsModel] = useState(false);
  const [toggleUpdateModel, setToogleUpdateModel] = useState(false);
  const [toggleAddModel, setToggleAddModel] = useState(false);
  const limit = 10; // Number of Categorys per page

  const {
    data: allCategories = [],
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetCategoriesQuery({ page, limit });
  const [deleteItem] = useDeleteCategoryMutation();

  console.log("datadata", allCategories);

  const handleDeleteCategory = async (CategoryId) => {
    console.log("CategoryId ", CategoryId);
    const deleteResp = await deleteItem(CategoryId);
    console.log("deleteResp ", deleteResp);
    toast.success("Data Deleted Successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  // Handle next and previous page buttons
  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <Layout>
      <div class="content-wrapper">
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Simple Tables</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item">Home</li>
                  <li class="breadcrumb-item active">Simple Tables</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">Bordered Table</h3>
                    <h3 class="card-title"></h3>

                    <span className="float-right">
                      <span
                        class="btn btn-primary"
                        onClick={() => setToggleAddModel(true)}
                      >
                        <FontAwesomeIcon icon={faAdd} /> New Category
                      </span>
                    </span>
                  </div>

                  <div class="card-body">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Description</th>
                          <th>Price</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {allCategories?.data?.categories.length > 0 ? (
                          allCategories?.data?.categories.map((Category) => (
                            <tr key={Category?._id}>
                              <td width={"20%"}>{Category?.name}</td>
                              <td width={"50%"}>
                                <p>{Category?.description}</p>
                              </td>
                              <td width={"10%"}>{Category?.price}</td>
                              <td width={"20%"}>
                                <div>
                                  <span
                                    class="btn btn-primary"
                                    onClick={() => setToogleDetailsModel(true)}
                                  >
                                    <FontAwesomeIcon icon={faEye} />
                                  </span>{" "}
                                  &nbsp;
                                  <span
                                    class="btn btn-primary"
                                    onClick={() => setToogleUpdateModel(true)}
                                  >
                                    <FontAwesomeIcon icon={faPencilSquare} />
                                  </span>{" "}
                                  &nbsp;
                                  <span
                                    class="btn btn-danger"
                                    onClick={() =>
                                      handleDeleteCategory(Category?._id)
                                    }
                                  >
                                    <FontAwesomeIcon icon={faTrash} />
                                  </span>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr className="not_found_data">
                            <td colSpan={4}>Data ot Found!</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                  <div class="card-footer clearfix">
                    <ul class="pagination pagination-sm m-0 float-right">
                      <li class="page-item" onClick={() => handlePrevPage()}>
                        <Link class="page-link">&laquo;</Link>
                      </li>
                      <li class="page-item">
                        <Link class="page-link">1</Link>
                      </li>
                      <li class="page-item">
                        <Link class="page-link">2</Link>
                      </li>
                      <li class="page-item">
                        <Link class="page-link">3</Link>
                      </li>
                      <li class="page-item" onClick={() => handleNextPage()}>
                        <sapn class="page-link">&raquo;</sapn>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {toggleDetailsModel ? (
        <DetailProject setToggleModel={setToogleDetailsModel} />
      ) : null}
      {toggleUpdateModel ? (
        <UpdateCategory setToggleModel={setToogleUpdateModel} />
      ) : null}
      {toggleAddModel ? (
        <AddCategory setToggleModel={setToggleAddModel} />
      ) : null}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </Layout>
  );
}

export default Categories;
