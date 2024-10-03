import React from "react";
import { Link } from "react-router-dom";
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RecoverPassword() {
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
            <p class="login-box-msg">You are only one step a way from your new password, recover your password now.</p>

            <form >
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
                  placeholder="Confirm password"
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                  <FontAwesomeIcon icon={faLock} />
                  </div>
                </div>
              </div>
              <div class="row">

                <div class="col-12">
                  <button type="submit" class="btn btn-primary btn-block">
                    Change Password
                  </button>
                </div>
              </div>
            </form>

            <Link to="/" class="text-center">
              Login
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default RecoverPassword;
