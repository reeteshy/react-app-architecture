import React from "react";
import profileImage from "../../../assets/img/user4-128x128.jpg";

function AddCategory({ setToggleModel }) {
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
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header bg-primary">
              <h4 class="modal-title">Add New Category </h4>
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
                                <div className="col-sm-12">
                                  <div className="form-group ">
                                    <label htmlFor="inputName">Category Name</label>
                                    <input
                                      type="name"
                                      className="form-control"
                                      id="name"
                                      placeholder="Category Name"
                                    />
                                  </div>
                                  
                              <div className="form-group">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Add Category
                                </button>
                              </div>
                                </div>
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

export default AddCategory;
