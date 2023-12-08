import React from 'react'
import CustomInput from '../components/CustomInput'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className="py-5" style={{background: "#ff9d00", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title" >Login</h3>
        <p className="text-center" >Login to your account to continue</p>
        <form action="">
        <CustomInput type="text" label="Email Address" id="email" />
        <CustomInput type="password" label="Password" id="pass" />
        <div className="d-flex align-items-center gap-1 mt-2 text-start">
          <input type="checkbox" />
          <div className="">
          <p className="m-0">Remember me</p>
          </div>
        </div>
        <div className="mb-1 text-end">
          <Link to="forgot-password" className="">
            Forgot Password?
          </Link>
        </div>
        <div className="mb-2 text-start">
          <Link to="sign-up" className="">
            Don't have an account? Sign Up
          </Link>
        </div>


        <Link 
          to="/admin"
          className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5" 
          style={{background: "#ff9d00"}}
          type="submit"
        >
          Login
        </Link>
        </form>
      </div>
    </div>
  )
}

export default Login