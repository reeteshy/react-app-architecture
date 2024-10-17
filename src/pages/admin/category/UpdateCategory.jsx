import React from 'react'

function UpdateCategory({ setToggleModel}) {

  return (
    <>
    <div class="modal fade show" id="modal-default" style={{display: 'block'}}>
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Default Modal </h4>
            <button class="close" onClick={()=>setToggleModel()} >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>One fine body&hellip;</p>
          </div>
          <div class="modal-footer justify-content-between">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade show"></div>
    </>
  )
}

export default UpdateCategory
