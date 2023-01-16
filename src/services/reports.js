import axios from "axios"
import { BASE_URL } from "./constant"


export const mandateReport = (body, cb) => {
   axios.post(`${BASE_URL}/payment/mandateReport`, body)
      .then(res => cb(null, res))
      .catch(err => cb(err, null))
}

