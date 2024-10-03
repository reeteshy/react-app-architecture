import React from "react";
import { Link } from "react-router-dom";
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SignUp() {
  return (
    <>
    <div className="register-page">
      <div class="register-box">
        <div class="card card-outline card-primary">
          <div class="card-header text-center">
            <Link to="/" class="h1">
              <b>Admin</b>LTE
            </Link>
          </div>
          <div class="card-body">
            <p class="login-box-msg">Register a new membership</p>

            <form >
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Full name"
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                  <FontAwesomeIcon icon={faUser} />
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input type="email" class="form-control" placeholder="Email" />
                <div class="input-group-append">
                  <div class="input-group-text">
                  <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                  <FontAwesomeIcon icon={faLock} />
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Retype password"
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                  <FontAwesomeIcon icon={faLock} />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-8">
                  <div class="icheck-primary">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      name="terms"
                      value="agree"
                    />
                    <label for="agreeTerms">
                      I agree to the <Link to="#">terms</Link>
                    </label>
                  </div>
                </div>

                <div class="col-4">
                  <button type="submit" class="btn btn-primary btn-block">
                    Register
                  </button>
                </div>
              </div>
            </form>

            <div class="social-auth-links text-center">
              <Link to="#" class="btn btn-block btn-primary">
                <i class="fab fa-facebook mr-2"></i>
                Sign up using Facebook
              </Link>
              <Link to="#" class="btn btn-block btn-danger">
                <i class="fab fa-google-plus mr-2"></i>
                Sign up using Google+
              </Link>
            </div>

            <Link to="/" class="text-center">
              I already have a membership
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default SignUp;
