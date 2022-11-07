import axios from "axios"
const BASE_URL = 'http://13.232.244.243:5201/web'

export const getDashboard = (mobileNumber, cb) => {
   axios.get(`${BASE_URL}/initial/dashBoard `, {
      mobileNumber
   })
      .then(res => cb(null, res))
      .catch(err => cb(err, null))
}
