import React, { useState } from "react";
import payImage from "./../images/pay.PNG";
import TextField from "@mui/material/TextField";
import { sendOtp, validateOtp } from "../services/auth";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const [mobileNumber, setMobileNumber] = useState(0)
  const [otp, setOtp] = useState(0)

  const handleSendOtp = () => {
    console.log(mobileNumber)
    sendOtp(mobileNumber, (err, res) => {
      if (err) console.log(err)
      console.log(res)
      if (res.data.otp) {
        return alert(`Your otp is ${res.data.otp}`)
      }
      if (res.data.messageDiscription) {
        alert(res.data.messageDiscription)
      }
    })
  }

  const handleOtpVerification = () => {
    validateOtp({ mobileNumber, otp }, (err, res) => {
      if (err) console.log(err)
      console.log(res)
      if (res.data.messageDiscription === 'OK') {
        alert(res.data.messageDiscription)
        setIsLoggedIn(true)
        sessionStorage.setItem('userStatus', '1')
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
      <div class="col-md-4 mt-5 ml-4 loginpage loginbg text-center">
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
                value={mobileNumber}
                onChange={e => setMobileNumber(e.target.value)}
              />
              <label for="mobileNumber">
                Mobile Number
              </label>
            </div>
            <a
              href="#."
              class="btn swatch-gray btn-sm btn-rounded waves-effect waves-light login_btn"
              onClick={handleSendOtp}
            >
              SEND OTP
            </a>
          </div>
        </div>
        <div class="md-form">
          <div class="d-flex align-items-center">
            <div class="m-inr flex-1 mr-3">
              <input
                type="password"
                id="otp"
                class="form-control"
                value={otp}
                onChange={e => setOtp(e.target.value)}
              />
              <label for="otp">OTP</label>
            </div>
            <a
              href="#."
              class="btn swatch-gray btn-sm btn-rounded waves-effect waves-light login_btn"
              onClick={handleOtpVerification}
            >
              VERIFY
            </a>
          </div>
        </div>
        <a href="/otp">
          <button
            class="btn btn-sm btn-sm btn-block mt-4 mb-5 waves-effect waves-light pt-2 pb-2 ml-0"
            type="submit"
          >
            Continue
          </button>
        </a>
      </div>
    </div>
  );
};
export default Login;
