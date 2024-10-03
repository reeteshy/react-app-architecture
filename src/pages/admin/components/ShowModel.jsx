import React from 'react'

function ShowModel({show, title, children}) {

    const displayProp = show ? "show" : "";
    const toggleProp = show ? "block" : "none";

  return (
    
   <>
    
   <div
             className={`modal fade ${displayProp}`}
             id="modal-default"
             style={{ display: toggleProp }}
           >
             <div className="modal-dialog">
               <div className="modal-content">
                 <div className="modal-header">
                   <h4 className="modal-title">{title}</h4>
                   <button
                     type="button"
                     className="close"
                     data-dismiss="modal"
                     aria-label="Close"
                   >
                     <span aria-hidden="true">&times;</span>
                   </button>
                 </div>
                 <div className="modal-body">
                  {children}
                 </div>
                 <div className="modal-footer justify-content-between">
                   <button
                     type="button"
                     className="btn btn-default"
                     data-dismiss="modal"
                   >
                     Close
                   </button>
                   <button type="button" className="btn btn-primary">
                     Save changes
                   </button>
                 </div>
               </div>
             </div>
             </div>
  </>
  )
}

export default ShowModel