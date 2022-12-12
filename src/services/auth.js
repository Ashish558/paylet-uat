import axios from "axios"
const BASE_URL = 'https://paylet.paycorp.io/web'

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

export const validateOtp = (body, cb) => {
   axios.post(`${BASE_URL}/login/validateOTP`, body)
      .then(res => cb(null, res))
      .catch(err => cb(err, null))
}

export const registerAdmin = (body, cb) => {
   axios.post(`${BASE_URL}/initial/adminRegistration`, body)
      .then(res => cb(null, res))
      .catch(err => cb(err, null))
}

export const loginUser = (body, cb) => {
   axios.post(`${BASE_URL}/login/validPassword`, body)
      .then(res => cb(null, res))
      .catch(err => cb(err, null))
}

export const getUserDetails = (body, cb) => {
   axios.post(`${BASE_URL}/initial/adminUserList`, body)
      .then(res => cb(null, res))
      .catch(err => cb(err, null))
}