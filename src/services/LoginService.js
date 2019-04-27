import API from 'axios'
import { resolveUrl } from '../utils/environmentResolvers'

const backendUrl = resolveUrl()
const baseUrl = backendUrl + '/api/'

const register = async (information) => {
  const response = await API.post(baseUrl + 'register', information)
  return response.data
}
const login = async (credentials) => {
  const response = await API.post(baseUrl + 'login', credentials)
  return response.data
}

export default { register, login }
