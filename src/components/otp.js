import React from "react";
import otpImage from "./../images/otp1.jpg";
const OTP = () => {
  return (
    <main className="otp-container">
      <div class="container text-center">
        <div class="row mt-4 ">
          <div class="col-md-12 otp-logo">
            <img class="img-responsive" src={otpImage} alt="" />
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-12">
                <h1 class="pt-4 yellow-text">verify OTP</h1>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 pt-2">
                <p>
                  Thanks for giving your details.An OTP has been sent to your{" "}
                  <strong>7888675467</strong>. Please enter the 6 digit OTP
                  below for successful authentication.
                </p>
              </div>
            </div>
            <form class="needs-validation container" novalidate>
              <div class="row ml-3 mr-3">
                <div class="col-md-12 text-center">
                  <div class="md-form">
                    <input
                      type="text"
                      id="materialSubscriptionFormOtp"
                      class="form-control"
                      required
                    />
                    <label for="materialSubscriptionFormOtp">
                      Enter your OTP number
                    </label>
                    <div class="invalid-feedback">
                      Please enter valid otp number
                    </div>
                  </div>
                </div>
              </div>

              <div class="row mt-2 mb-5 pb-5">
                <div class="col-md-12 text-center">
                  <input name="token" type="hidden" />

                  <a href="home.html" class="btn btn-primary btn-sm ml-3">
                    Generate OTP
                  </a>
                  <button
                    class="btn swatch-gray btn-sm btn-rounded"
                    type="submit"
                  >
                    Verify
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
    </main>
  );
};
export default OTP;
