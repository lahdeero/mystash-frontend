import API from 'axios'
import { resolveUrl } from '../utils/environmentResolvers'

const backendUrl = resolveUrl()
const baseUrl = backendUrl + '/api/notes/directory'

let token = null
let config = {}

const setToken = (newToken) => {
  token = `bearer ${newToken}`
  config = { headers: { 'Authorization': token } }
}

const getAll = async () => {
  const response = await API.get(baseUrl + '/all', config)
  return response.data
}

const getOne = async (noteId) => {
  const response = await API.get(baseUrl + '/note/' + noteId, config)
  return response.data
}

const create = async (newObject) => {
  const request = await API.post(baseUrl, newObject, config)
  return request.data
}

const modify = async (noteObject) => {
  const id = await noteObject.id
  const request = await API.put(baseUrl + '/note/' + id, noteObject, config)
  return request
}

const erase = async (id) => {
  const response = await API.delete(`${baseUrl}/note/${id}`, config)
  console.log('response ' + response.data)
  return response.data
}

export default { getAll, getOne, create, modify, erase, setToken }
