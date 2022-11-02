import axios from "axios"
const BASE_URL = 'http://13.232.244.243:5201/web'

export const addCurrency = (currencyName, currencycode, cb) => {
   axios.get(`${BASE_URL}/payment/addCurrency`, {
      currencyName,
      currencycode
   })
      .then(res => cb(null, res))
      .catch(err => cb(err, null))
}

export const deleteCurrency = (currencyName, cb) => {
   axios.get(`${BASE_URL}/payment/deleteCurrency`, {
      currencyName
   })
      .then(res => cb(null, res))
      .catch(err => cb(err, null))
}
