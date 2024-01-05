import React from 'react'
import CustomInput from '../components/CustomInput'

const Forgotpassword = () => {
  return (
    <div className="py-5" style={{background: "#ddd", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title" >Forgot Password?</h3>
        <p className="text-center" >Please enter your registered email to get the reset link.</p>
        <form action="">
        <CustomInput type="text" label="Email Address" id="email" />
        <button 
        className="border-0 px-3 py-2 mt-3 text-white fw-bold w-100 text-center text-decoration-none fs-5" 
        style={{background: "#ff9d00"}}
        type="submit"
        >
          Send Link
        </button>
        </form>
      </div>
    </div>
  )
}

export default Forgotpassword;