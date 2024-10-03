import React from 'react'
import Layout from './layouts/Layout'

function FormInputs() {
  return (
    <>
        
        <Layout >
  <div className="content-wrapper">
    
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Advanced Form</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Advanced Form</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    
    <section className="content">
      
    <div className="container-fluid">
      
    <div className="row">
          <div className="col-md-12">
          <div className="card card-warning">
              <div className="card-header">
                <h3 className="card-title">General Elements</h3>
              </div>
                   <div className="card card-warning">
             
              <div className="card-body">
                <form>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Text</label>
                        <input type="text" className="form-control" placeholder="Enter ..." />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Text Disabled</label>
                        <input type="text" className="form-control" placeholder="Enter ..." disabled />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                     
                      <div className="form-group">
                        <label>Textarea</label>
                        <textarea className="form-control" rows="3" placeholder="Enter ..."></textarea>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Textarea Disabled</label>
                        <textarea className="form-control" rows="3" placeholder="Enter ..." disabled></textarea>
                      </div>
                    </div>
                  </div>

                 
                  <div className="form-group">
                    <label className="col-form-label" htmlFor="inputSuccess"><i className="fas fa-check"></i> Input with
                      success</label>
                    <input type="text" className="form-control is-valid" id="inputSuccess" placeholder="Enter ..." />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label" htmlFor="inputWarning"><i className="far fa-bell"></i> Input with
                      warning</label>
                    <input type="text" className="form-control is-warning" id="inputWarning" placeholder="Enter ..." />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label" htmlFor="inputError"><i className="far fa-times-circle"></i> Input with
                      error</label>
                    <input type="text" className="form-control is-invalid" id="inputError" placeholder="Enter ..." />
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                     
                      <div className="form-group">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" />
                          <label className="form-check-label">Checkbox</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" checked />
                          <label className="form-check-label">Checkbox checked</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" disabled />
                          <label className="form-check-label">Checkbox disabled</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                     
                      <div className="form-group">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="radio1" />
                          <label className="form-check-label">Radio</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="radio1" checked />
                          <label className="form-check-label">Radio checked</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" disabled />
                          <label className="form-check-label">Radio disabled</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                     
                      <div className="form-group">
                        <label>Select</label>
                        <select className="form-control">
                          <option>option 1</option>
                          <option>option 2</option>
                          <option>option 3</option>
                          <option>option 4</option>
                          <option>option 5</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Select Disabled</label>
                        <select className="form-control" disabled>
                          <option>option 1</option>
                          <option>option 2</option>
                          <option>option 3</option>
                          <option>option 4</option>
                          <option>option 5</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                     
                      <div className="form-group">
                        <label>Select Multiple</label>
                        <select multiple className="form-control">
                          <option>option 1</option>
                          <option>option 2</option>
                          <option>option 3</option>
                          <option>option 4</option>
                          <option>option 5</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Select Multiple Disabled</label>
                        <select multiple className="form-control" disabled>
                          <option>option 1</option>
                          <option>option 2</option>
                          <option>option 3</option>
                          <option>option 4</option>
                          <option>option 5</option>
                        </select>
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
  </Layout>
    </>
  )
}

export default FormInputs