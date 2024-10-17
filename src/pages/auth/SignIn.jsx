import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../services/ermcApi";
import { setCredentials } from "../../services/authSlice";
import { useDispatch } from "react-redux";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorAlert from "../admin/components/ErrorAlert";


function SignIn() {
  const [login, { isError, error }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const userData = await login(data).unwrap();
      console.log("Function called", userData)
      dispatch(setCredentials(userData?.data));
      toast.success(userData?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      navigate('/dashboard');
      reset();
    } catch (err) {
      console.error("Failed to login:", err);
    }
  };

  return (
    <>
      <div className="login-page">
        <div className="login-box">
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <Link to="/" className="h1">
                <b>e</b>RMS
              </Link>
            </div>
            <div className="card-body">
              {isError && (
                <ErrorAlert isError={isError} error={error} />
              )}
              <p className="login-box-msg">Sign in to start your session</p>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className={
                      errors.email ? `form-control is-invalid` : `form-control`
                    }
                    placeholder="User Name"
                    {...register("username", {
                      required: "UserName can't be empty!",
                    })}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <FontAwesomeIcon icon={faEnvelope} />
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
                    })}
                     autoComplete="on"
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </>
  );
}

export default SignIn;
