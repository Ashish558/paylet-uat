import axios from "axios"
const BASE_URL = 'http://13.232.244.243:5201/web'

export const addCurrency = (body, cb) => {
   axios.post(`${BASE_URL}/payment/addCurrency`, body)
      .then(res => cb(null, res))
      .catch(err => cb(err, null))
}

export const deleteCurrency = (currencyName, cb) => {
   axios.post(`${BASE_URL}/payment/deleteCurrency`, {
      currencyName
   })
      .then(res => cb(null, res))
      .catch(err => cb(err, null))
}

export const addPaymentMode = (body, cb) => {
   axios.post(`${BASE_URL}/payment/addPaymentMode`, body)
      .then(res => cb(null, res))
      .catch(err => cb(err, null))
}
