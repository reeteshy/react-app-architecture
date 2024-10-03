import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function ForgetPassword() {
  return (
   <>
   <div class="login-page">
<div class="login-box">
 
  <div class="card card-outline card-primary">
    <div class="card-header text-center">
      <Link to="/" class="h1"><b>Admin</b>LTE</Link>
    </div>
    <div class="card-body">
      <p class="login-box-msg">Sign in to start your session</p>

      <form >
        <div class="input-group mb-3">
          <input type="email" class="form-control" placeholder="Email" />
          <div class="input-group-append">
            <div class="input-group-text">
            <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </div>
        </div>
        <div class="row">
         
          <div class="col-12">
            <button type="submit" class="btn btn-primary btn-block">Request New Password</button>
          </div>
         
        </div>
      </form>
     

      <p class="mb-1">
        <Link to="/">Login</Link>
      </p>
    </div>
   
  </div>
 
</div>
</div>
</>
  )
}

export default ForgetPassword