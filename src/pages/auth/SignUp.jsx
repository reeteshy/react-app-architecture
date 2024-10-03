import React from "react";
import { Link } from "react-router-dom";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";

function SignUp() {
  let password;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  password = watch("password", "");

  const onSubmit = (data) => {
    console.log("errors ", errors);
    console.log(data);
    reset();
  };

  return (
    <>
      <div className="register-page">
        <div className="register-box">
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <Link to="/" className="h1">
                <b>e</b>RMS
              </Link>
            </div>
            <div className="card-body">
              <p className="login-box-msg">Register a new membership</p>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className={
                      errors.username
                        ? `form-control is-invalid`
                        : `form-control`
                    }
                    placeholder="username"
                    {...register("username", {
                      required: "You must specify the username!",
                      pattern: {
                        value: /^[a-zA-Z0-9_]{3,30}$/,
                        message:
                          "Username must be 3-30 characters and can only include letters, numbers, and underscores",
                      },
                    })}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                  </div>
                  {errors.username && (
                    <span
                      id="exampleInputEmail1-error"
                      className="error invalid-feedback"
                    >
                      {errors.username.message}
                    </span>
                  )}
                </div>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className={
                      errors.email ? `form-control is-invalid` : `form-control`
                    }
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
                    className={
                      errors.password
                        ? `form-control is-invalid`
                        : `form-control`
                    }
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
                    className={
                      errors.confirm_password
                        ? `form-control is-invalid`
                        : `form-control`
                    }
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
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        name="terms"
                        value="agree"
                        className={`btn-m-5`}
                        {...register("agreeTerms", {
                          required: true,
                        })}
                      />
                      <label
                        htmlFor="agreeTerms"
                      >
                        I agree to the <Link to="#">terms</Link>
                      </label>
                    </div>

                    {errors.agreeTerms && (
                      <span
                        id="exampleInputEmail1-error"
                        className="error invalid-feedback"
                      >
                        {errors.agreeTerms.message}
                      </span>
                    )}
                  </div>

                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">
                      Register
                    </button>
                  </div>
                </div>
              </form>

              {/* <div className="social-auth-links text-center">
              <Link to="#" className="btn btn-block btn-primary">
                <i className="fab fa-facebook mr-2"></i>
                Sign up using Facebook
              </Link>
              <Link to="#" className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2"></i>
                Sign up using Google+
              </Link>
            </div> */}

              <Link to="/" className="text-center">
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
