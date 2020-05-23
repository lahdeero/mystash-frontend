import API from 'axios'
import { resolveUrl } from '../utils/environmentResolvers'
import getRequestConfig from '../utils/requestConfigResolver'

const backendUrl = resolveUrl()
const baseUrl = backendUrl + '/api/notes/directory'

const getAll = async () => {
  const response = await API.get(baseUrl + '/all', getRequestConfig())
  return response.data
}

const getOne = async (noteId) => {
  const response = await API.get(baseUrl + '/note/' + noteId, getRequestConfig())
  return response.data
}

const create = async (newObject) => {
  const request = await API.post(baseUrl, newObject, getRequestConfig())
  console.log(request)
  return request.data
}

const modify = async (noteObject) => {
  const id = noteObject.id
  console.log('noteObject:', noteObject)
  const response = await API.put(baseUrl + '/note/' + id, noteObject, getRequestConfig())
  return response
}

const erase = async (id) => {
  const response = await API.delete(`${baseUrl}/note/${id}`, getRequestConfig())
  console.log('response ' + response.data)
  return response.data
}

export default { getAll, getOne, create, modify, erase }
