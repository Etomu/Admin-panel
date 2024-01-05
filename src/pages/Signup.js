import React from 'react'
import CustomInput from '../components/CustomInput'
import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <div className="py-5" style={{background: "#ddd", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title" >Sign Up</h3>
        <p className="text-center" >Register for an account to continue</p>
        <form action="">
        <CustomInput type="text" label="First Name" id="name" />
        <CustomInput type="text" label="Last Name" id="name" />
        <CustomInput type="text" label="Email Address" id="email" />
        <CustomInput type="password" label="Password" id="pass" />
        <CustomInput type="password" label="Confirm Password" id="pass" />

        <div className="mt-2 text-end">
          <Link to="/" className="">
            Have an account? Login
          </Link>
        </div>
        <Link 
          to="/"
          className="border-0 mt-2 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5" 
          style={{background: "#ff9d00"}}
          type="submit"
        >
          Register
        </Link>
        </form>
      </div>
    </div>
  )
}

export default Signup