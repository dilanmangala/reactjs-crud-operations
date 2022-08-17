import React from 'react'
import { useRef, useState, userEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import api from '../api/api';


const Register = () => {
  //const userRef = useRef();
  //const errRef = useRef();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const register = {
      firstName: firstName,
      lastName: lastName,
      emailAddress: emailAddress,
      username: username,
      password: password
    }
    console.log(register)
    api.post('/user-api/register-user', register)
    .then(res => {
      console.log(res.data)
      setMessage(res.data);
      navigate('/dashboard');
    })
    .catch((e) => {
      console.log("error")
      console.log(e)
      setMessage(e.getMessage())
  } )
    
    //navigate('/')
  }

  const myFunction = (e) =>{
    const x = document.getElementById("password");
    console.log(x.type)
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (
    <div className="Auth-form-container" >
      <form className="Auth-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Registration</h3>

          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter First Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              name='firstName'
              id='firstName'
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              name='lastName'
              id='lastName'
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e) => setEmailAddress(e.target.value)}
              value={emailAddress}
              name='emailAddress'
              id='emailAddress'
            />
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              name='username'
              id='username'
            />
          </div>
          
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name='password'
              id='password'
            />
            <div className="form-group mt-3">
            <input type="checkbox" onClick={ (e) => myFunction(e)}/> Show Password
            </div>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <div className="d-grid gap-2 mt-3 text-success">
           {message}
          </div>
        </div>
      </form>
    </div>
  )

}

export default Register;
