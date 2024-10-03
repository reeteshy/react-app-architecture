import React from "react";
import { Link } from "react-router-dom";
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";

function RecoverPassword() {

  const { register, handleSubmit, formState:{errors}, reset } = useForm()

  const onSubmit = () => {
    console.log("Form Submitted!")
    
    console.log("errors ", errors);
    console.log(data);
    reset();
    reset()
  }

  return (
    <>
    <div className="register-page">
      <div className="register-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <Link to="/" className="h1">
              <b>Admin</b>LTE
            </Link>
          </div>
          <div className="card-body">
            <p className="login-box-msg">You are only one step a way from your new password, recover your password now.</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              
            <div className="input-group mb-3">
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required!",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters!",
                      },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                        message:
                          "Password must contain at least one uppercase letter, one lowercase letter, and one number!",
                      },
                    })}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <FontAwesomeIcon icon={faLock} />
                    </div>
                  </div>
                  {errors.password && (
                    <span
                      id="exampleInputEmail1-error"
                      className="error invalid-feedback"
                    >
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    className="form-control"
                    placeholder="Retype password"
                    {...register("confirm_password", {
                      required: "Please confirm your password!",
                      validate: (value) =>
                        value === password || "Passwords do not match!",
                    })}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <FontAwesomeIcon icon={faLock} />
                    </div>
                  </div>
                  {errors.confirm_password && (
                    <span
                      id="exampleInputEmail1-error"
                      className="error invalid-feedback"
                    >
                      {errors.confirm_password.message}
                    </span>
                  )}
                </div>
              <div className="row">

                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block">
                    Change Password
                  </button>
                </div>
              </div>
            </form>

            <Link to="/" className="text-center">
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
