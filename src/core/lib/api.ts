import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.api-futebol.com.br/v1',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer test_bfd4437ac46907f983acacbc2ecd56',
  },
})
