import React from 'react'

function ShowModel(props) {

  const { toggleModel, handleToggleModel, modelId, modelById, title, children, showFooter, showHeader } = props;
  const displayProp = (modelId === modelById && toggleModel) ? "show" : "";
  const toggleProp =  (modelId === modelById && toggleModel) ? "block" : "none";

  return (

    <>

      <div
        className={`modal fade ${displayProp}`}
        id={modelId}
        style={{ display: toggleProp }}
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            { showHeader ?
              (
                <div className="modal-header">
                  <h4 className="modal-title">{title}</h4>
                  <button
                    type="button"
                    className="close"
                    onClick={()=>handleToggleModel(modelId)}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>) : null
            }
            <div className="modal-body">
              {children}
            </div>
            {
              showFooter ? (
                
            <div className="modal-footer justify-content-between">
            <button
              type="button"
              className="btn btn-default"
              onClick={()=>handleToggleModel(modelId)}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
              ) :
              null
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ShowModel