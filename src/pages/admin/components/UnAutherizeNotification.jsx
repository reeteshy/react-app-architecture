import React from 'react'
import { Link } from 'react-router-dom';

function UnAutherizeNotification() {
    return (
        <>

            <div className='customModel'>
                <div className="modal fade show" id="modal-default" style={{ display: 'block', paddingRight: '17px' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className='unautherize'>
                                    <p>UnAutherized User</p>
                                    <Link to={'/'} className="btn btn-default" >Back To Login Page</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div class="modal-backdrop fade show"></div>
      </>
  )
}

export default UnAutherizeNotification