import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'

function SignIn() {
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
        <div class="input-group mb-3">
          <input type="password" class="form-control" placeholder="Password" />
          <div class="input-group-append">
            <div class="input-group-text">
            <FontAwesomeIcon icon={faLock} />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="icheck-primary">
              <input type="checkbox" id="remember" />
              <label for="remember">
                Remember Me
              </label>
            </div>
          </div>
         
          <div class="col-4">
            <button type="submit" class="btn btn-primary btn-block">Sign In</button>
          </div>
         
        </div>
      </form>

      <div class="social-auth-links text-center mt-2 mb-3">
        <Link to="#" class="btn btn-block btn-primary">
          <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
        </Link>
        <Link to="#" class="btn btn-block btn-danger">
          <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
        </Link>
      </div>
     

      <p class="mb-1">
        <Link to="/">I forgot my password</Link>
      </p>
      <p class="mb-0">
        <Link to="/signUp" class="text-center">Register a new membership</Link>
      </p>
    </div>
   
  </div>
 
</div>
</div>
</>
  )
}

export default SignIn