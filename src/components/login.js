import React, { useState } from "react";
import payImage from "./../images/pay.PNG";
import TextField from "@mui/material/TextField";
import { loginUser, sendOtp, validateOtp } from "../services/auth";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const [mobileNumber, setMobileNumber] = useState()
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    loginUser({mobileNumber, password}, (err, res) => {
      if (err) console.log(err.response)
      console.log(res)
      if (res.data.adminDetails) {
        // alert('Login successful')
        sessionStorage.setItem('userStatus', '1')
        const user = JSON.stringify({...res.data.adminDetails})
        sessionStorage.setItem('user', user)
        setIsLoggedIn(true)
        return
      }
      if (res.data.messageDiscription) {
        alert(res.data.messageDiscription)
      }
    })
  }

  return (
    <div class="row imageview img-responsive" style={{ marginTop: '60px', width: 'auto' }}>
      <div class="col-md-4"></div>
      <form class="col-md-4 mt-5 ml-4 loginpage loginbg text-center" onSubmit={handleSubmit}>
        <a>
          <img src={payImage} class="img-responsive" alt="" />
        </a>
        <h1 class="text-center mt-5">Login</h1>
        <hr />
        <p class="text-center mt-4 mb-4">
          Welcome ! Login to access the paycorp <br />
        </p>

        <div class="md-form">
          <div class="d-flex align-items-center">
            <div class="m-inr flex-1 mr-3">
              <input
                type="number"
                id="mobileNumber"
                class="form-control"
                required={true}
                value={mobileNumber}
                onChange={e => setMobileNumber(e.target.value)}
              />
              <label for="mobileNumber">
                Mobile Number
              </label>
            </div>

          </div>
        </div>
        <div class="md-form">
          <div class="d-flex align-items-center">
            <div class="m-inr flex-1 mr-3">
              <input
                type="password"
                id="otp"
                class="form-control"
                required={true}
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <label for="otp">Password</label>
            </div>

          </div>
        </div>

        <button
          class="btn btn-sm btn-sm btn-block mt-4 mb-5 waves-effect waves-light pt-2 pb-2 ml-0"
          type="submit"
        >
          Continue
        </button>

      </form>
    </div>
  );
};
export default Login;
