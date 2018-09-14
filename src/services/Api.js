import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://monohash-data-crypto.herokuapp.com/`
  })
}