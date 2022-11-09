import axios from "axios"
const BASE_URL = 'http://13.232.244.243:5201/web'

//CURRENCY
export const getAllCurrency = (cb) => {
   axios.post(`${BASE_URL}/payment/getAllCurrency`)
      .then(res => cb(null, res))
      .catch(err => cb(err, null))
}

export const addCurrency = (body, cb) => {
   axios.post(`${BASE_URL}/payment/addCurrency`, body)
      .then(res => cb(null, res))
      .catch(err => cb(err, null))
}

export const deactivateCurrency = (body, cb) => {
   axios.post(`${BASE_URL}/payment/UpdateCurrency`, body)
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

// PAYMENT MODE
export const getAllPaymentMode = (cb) => {
   axios.post(`${BASE_URL}/payment/getAllPaymentMode`)
      .then(res => cb(null, res))
      .catch(err => cb(err, null))
}

export const addPaymentMode = (body, cb) => {
   axios.post(`${BASE_URL}/payment/addPaymentMode`, body)
      .then(res => cb(null, res))
      .catch(err => cb(err, null))
}

// PAYMENT FREQUENCY
export const getFrequency = ( cb) => {
   axios.get(`${BASE_URL}/payment/getAllPaymentFrequency`)
      .then(res => cb(null, res))
      .catch(err => cb(err, null))
}
export const addPaymentFrequency = (body, cb) => {
   axios.post(`${BASE_URL}/payment/addPaymentFrequency`, body)
      .then(res => cb(null, res))
      .catch(err => cb(err, null))
}

//ASSET TYPE
export const getAssetTypes = (cb) => {
   axios.get(`${BASE_URL}/asset/getAllAssetType`)
      .then(res => cb(null, res))
      .catch(err => cb(err, null))
}
export const addAssetType = (body, cb) => {
   axios.post(`${BASE_URL}/asset/addAssetType`, body)
      .then(res => cb(null, res))
      .catch(err => cb(err, null))
}