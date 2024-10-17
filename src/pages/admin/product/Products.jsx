import React, { useState } from "react";
import Layout from "../layouts/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faEye,
  faPencilSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import DetailProject from "./DetailProject";
import {
  useGetProductsQuery,
  useDeleteProductMutation,
} from "../../../services/ermcApi";
import { Link } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Products() {
  const [page, setPage] = useState(1);
  const [toggleDetailsModel, setToogleDetailsModel] = useState(false);
  const [toggleUpdateModel, setToogleUpdateModel] = useState(false);
  const [toggleAddModel, setToggleAddModel] = useState(false);
  const limit = 10; // Number of products per page

  const {
    data: allproducts = [],
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetProductsQuery({ page, limit });
  const [deleteItem] = useDeleteProductMutation();

  console.log("datadata", allproducts);

  const handleDeleteProduct = async (productId) => {
    console.log("productId ", productId);
    const deleteResp = await deleteItem(productId);
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
                        <FontAwesomeIcon icon={faAdd} /> New Product
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
                        {allproducts?.data?.products.length > 0 ? (
                          allproducts?.data?.products.map((product) => (
                            <tr key={product?._id}>
                              <td width={"20%"}>{product?.name}</td>
                              <td width={"50%"}>
                                <p>{product?.description}</p>
                              </td>
                              <td width={"10%"}>{product?.price}</td>
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
                                      handleDeleteProduct(product?._id)
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
        <UpdateProduct setToggleModel={setToogleUpdateModel} />
      ) : null}
      {toggleAddModel ? (
        <AddProduct setToggleModel={setToggleAddModel} />
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

export default Products;
