import axios from 'axios'

export const playersApi = axios.create({
  baseURL: 'https://api.cartola.globo.com', 
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer test_bfd4437ac46907f983acacbc2ecd56',
  },
})
