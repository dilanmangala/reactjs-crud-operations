import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const handleSubmit = (e) => {
    
}

function ForgetPassword() {
  return (
    <div className="Auth-form-container" >
      <form className="Auth-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Reset Password</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a> <br/>
            <Link to='/register'>Sign Up</Link> Here
          </p>
        </div>
      </form>
    </div>
  )
}

export default ForgetPassword;
