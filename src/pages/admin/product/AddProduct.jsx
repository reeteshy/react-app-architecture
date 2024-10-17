import React from "react";
import profileImage from "../../../assets/img/user4-128x128.jpg";

function AddProduct({ setToggleModel }) {
  // const [name, setName] = useState('');
  // const [description, setDescription] = useState('');
  // const [price, setPrice] = useState('');
  // const [createProduct, { isLoading }] = useCreateProductMutation();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (name && description && price) {
  //     await createProduct({ name, description, price });
  //     setName('');
  //     setDescription('');
  //     setPrice('');
  //   }
  // };

  return (
    <>
      <div class="modal fade show" style={{ display: "block" }}>
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header bg-primary">
              <h4 class="modal-title">Add New Product </h4>
              <button class="close" onClick={() => setToggleModel()}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <section className="content">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="card card-primary">
                        <div className="card-body">
                          <div className="tab-pane" id="settings">
                            <form className="form-horizontal">
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="form-group ">
                                    <label htmlFor="inputName">Name</label>
                                    <input
                                      type="email"
                                      className="form-control"
                                      id="inputName"
                                      placeholder="Name"
                                    />
                                  </div>
                                </div>

                                <div className="col-sm-6">
                                  <div className="form-group ">
                                    <label htmlFor="inputEmail">Price</label>
                                    <input
                                      type="email"
                                      className="form-control"
                                      id="inputEmail"
                                      placeholder="Email"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="form-group ">
                                    <label htmlFor="inputName2">Stock</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="inputName2"
                                      placeholder="Name"
                                    />
                                  </div>
                                </div>

                                <div className="col-sm-6">
                                  <div className="form-group ">
                                    <label htmlFor="inputSkills">
                                      Category
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="inputSkills"
                                      placeholder="Skills"
                                    />
                                  </div>
                                </div>

                                <div className="col-sm-6">
                                  <div class="form-group">
                                    <label for="exampleInputFile">
                                      Main Image
                                    </label>
                                    <div class="input-group">
                                      <div class="custom-file">
                                        <input
                                          type="file"
                                          class="custom-file-input"
                                          id="exampleInputFile"
                                        />
                                        <label
                                          class="custom-file-label"
                                          for="exampleInputFile"
                                        >
                                          Choose file
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div class="form-group">
                                    <label for="exampleInputFile">
                                      Sub Image
                                    </label>
                                    <div class="input-group">
                                      <div class="custom-file">
                                        <input
                                          type="file"
                                          class="custom-file-input"
                                          id="exampleInputFile"
                                        />
                                        <label
                                          class="custom-file-label"
                                          for="exampleInputFile"
                                        >
                                          Choose file
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="form-group ">
                                    <label htmlFor="inputExperience">
                                      Description
                                    </label>
                                    <textarea
                                      className="form-control"
                                      id="inputExperience"
                                      placeholder="Experience"
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                              <div className="form-group">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Add Product
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-backdrop fade show"></div>
    </>
  );
}

export default AddProduct;
