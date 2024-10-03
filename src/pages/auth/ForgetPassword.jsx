import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useForm } from "react-hook-form";

function ForgetPassword() {
  

  const { register, handleSubmit, formState:{errors}, reset } = useForm()

  const onSubmit = () => {
    console.log("errors ", errors);
    console.log(data);
    reset();
  }
    
  return (
   <>
   <div className="login-page">
<div className="login-box">
 
  <div className="card card-outline card-primary">
    <div className="card-header text-center">
      <Link to="/" className="h1"><b>Admin</b>LTE</Link>
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
        <div className="row">
         
          <div className="col-12">
            <button type="submit" className="btn btn-primary btn-block">Request New Password</button>
          </div>
         
        </div>
      </form>
     

      <p className="mb-1">
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