import React, { useState } from 'react'
import './Login.css'
import cross_icon from '/images/cross_icon.png'

const Login = ({ setLogin }) => {

  const [currState, setCurrState] = useState("Sign Up")

  return (
    <>
      <div className="login-popup">
        <form className="login-popup-container">
          <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={() => setLogin(false)} src={cross_icon} alt="" />
          </div>
          <div className="login-popup-input">
            {currState==="Login"?<></>: <input type="text" placeholder='Your Name' required />}
            <input type="email" placeholder='Your Email' required />
            <input type="password" placeholder='Your Password' required />
          </div>
          <button>{currState === "Sign Up" ? "Create Account" : "Login In"}</button>
          <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By Continuing , I Agree To The Terms Of Use & Privacy Policy.</p>
          </div>
          {currState === "Sign Up" ? 
          <p onClick={() => setCurrState("Login")}>Already Have An Account? <span>Login Here</span></p> : 
          <p onClick={() => setCurrState("Sign Up")}>Create A New Account? <span>Click Here</span></p>}
        </form>
      </div>
    </>
  )
}

export default Login