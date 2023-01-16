import axios from "axios"
const BASE_URL = 'https://sandbox.paylet.io:9443/web'

export const getDashboard = (cb) => {
   axios.get(`${BASE_URL}/initial/dashBoard `)
      .then(res => cb(null, res))
      .catch(err => cb(err, null))
}

export const getWebUser = (cb) => {
   axios.get(`${BASE_URL}/initial/getwebuser`)
      .then(res => cb(null, res))
      .catch(err => cb(err, null))
}