import axios from "axios"
const BASE_URL = 'https://paylet.paycorp.io/web'

export const getDashboard = (mobileNumber, cb) => {
   axios.get(`${BASE_URL}/initial/dashBoard `, {
      mobileNumber
   })
      .then(res => cb(null, res))
      .catch(err => cb(err, null))
}
