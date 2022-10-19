import React from "react";
import payImage from "./../images/pay.PNG";
import TextField from "@mui/material/TextField";

const Login = () => {
  return (
    <div class="row imageview img-responsive">
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
                type="text"
                id="materialSubscriptionFormUsername"
                class="form-control"
              />
              <label for="materialSubscriptionFormUsername">
                Mobile Number
              </label>
            </div>
            <a
              href="#."
              class="btn swatch-gray btn-sm btn-rounded waves-effect waves-light login_btn"
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
                id="materialSubscriptionFormPasswords"
                class="form-control"
              />
              <label for="materialSubscriptionFormPassword">OTP</label>
            </div>
            <a
              href="#."
              class="btn swatch-gray btn-sm btn-rounded waves-effect waves-light login_btn"
            >
              VERIFY
            </a>
          </div>
        </div>
        <a href="otp.html">
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
