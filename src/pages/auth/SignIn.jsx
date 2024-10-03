import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("errors ", errors);
    console.log(data);
    reset();
  };

  return (
    <>
      <div className="login-page">
        <div className="login-box">
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <Link to="/" className="h1">
                <b>Admin</b>LTE
              </Link>
            </div>
            <div className="card-body">
              <p className="login-box-msg">Sign in to start your session</p>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email id can't be empty!",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format!",
                      },
                    })}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                  </div>
                  {errors.email && (
                    <span
                      id="exampleInputEmail1-error"
                      className="error invalid-feedback"
                    >
                      {errors.email.message}
                    </span>
                  )}
                </div>
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
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input
                        type="checkbox"
                        id="remember"
                        className="btn-m-5"
                      />
                      <label htmlFor="remember">Remember Me</label>
                    </div>
                  </div>

                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">
                      Sign In
                    </button>
                  </div>
                </div>
              </form>

              {/* <div className="social-auth-links text-center mt-2 mb-3">
        <Link to="#" className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
        </Link>
        <Link to="#" className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
        </Link>
      </div> */}

              <p className="mb-1">
                <Link to="/forget-password">I forgot my password</Link>
              </p>
              <p className="mb-0">
                <Link to="/sign-up" className="text-center">
                  Register a new membership
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
