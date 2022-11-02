import axios from "axios"
const BASE_URL = 'http://13.232.244.243:5201/web'

export const getDashboard = (mobileNumber, cb) => {
   axios.get(`${BASE_URL}/initial/dashBoard `, {
      mobileNumber
   })
      .then(res => cb(null, res))
      .catch(err => cb(err, null))
}

export const validateOtp = (mobileNumber, otp, cb) => {
   axios.post(`${BASE_URL}/login/requestOTP`, {
      mobileNumber,
      otp
   })
      .then(res => cb(null, res))
      .catch(err => cb(err, null))
}