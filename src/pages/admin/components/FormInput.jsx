import React from 'react'

function FormInput() {
  return (
    <>
      <div className='modal-body'>
        <form>
          <div className="row">
            <div className="col-sm-4">

              <div className="form-group">
                <label>Text</label>
                <input type="text" className="form-control" placeholder="Enter ..." />
              </div>
            </div>
            <div className="col-sm-4">

              <div className="form-group">
                <label>Text</label>
                <input type="text" className="form-control" placeholder="Enter ..." />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <label>Text Disabled</label>
                <input type="text" className="form-control" placeholder="Enter ..." />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group">
                <label>Textarea Disabled</label>
                <textarea className="form-control" rows="3" placeholder="Enter ..." ></textarea>
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

          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Save New
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default FormInput