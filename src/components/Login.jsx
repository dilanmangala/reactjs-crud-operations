import React from 'react'
import { useRef, useState, userEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Login.css'
import { useNavigate, Link } from 'react-router-dom';


const Login = () => {
    //const userRef = useRef();
    //const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e)
        
        navigate('/')
    }

   

  return (
    <div className="Auth-form-container" >
      <form className="Auth-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
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

export default Login;
