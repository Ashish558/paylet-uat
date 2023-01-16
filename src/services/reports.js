import axios from "axios"
const BASE_URL = 'https://sandbox.paylet.io:9443/web'


export const mandateReport = (body, cb) => {
   axios.post(`${BASE_URL}/payment/mandateReport`, body)
      .then(res => cb(null, res))
      .catch(err => cb(err, null))
}

