import axios from "axios"
const BASE_URL = 'http://13.232.244.243:5201/web'

export const sendOtp = (mobileNumber, cb) => {
   axios.post(`${BASE_URL}/login/requestOTP`, {
      mobileNumber
   },{
      headers: {
         'Content-Type': 'application/json'
     }
   })
      .then(res => cb(null, res))
      .catch(err => cb(err, null))
}

export const validateOtp = (mobileNumber, otp, cb) => {
   axios.post(`${BASE_URL}/login/validateOTP`, {
      mobileNumber,
      otp
   })
      .then(res => cb(null, res))
      .catch(err => cb(err, null))
}

export const registerAdmin = (body, cb) => {
   axios.post(`${BASE_URL}/initial/adminRegistration`, body)
      .then(res => cb(null, res))
      .catch(err => cb(err, null))
}