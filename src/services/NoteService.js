import API from 'axios'
import { resolveUrl } from '../utils/environmentResolvers'
import getRequestConfig from '../utils/requestConfigResolver'

const backendUrl = resolveUrl()
const baseUrl = backendUrl + '/api/notes/directory'

const getAll = async () => {
  const response = await API.get(`${baseUrl}/all`, getRequestConfig())
  console.log(response)
  return response.data
}

const getOne = async (noteId) => {
  const response = await API.get(`${baseUrl}/note/${noteId}`, getRequestConfig())
  return response.data
}

const create = async (newObject) => {
  const response = await API.post(baseUrl, newObject, getRequestConfig())
  // console.log(response.data)
  return response.data
}

const modify = async (noteObject) => {
  const response = await API.put(`${baseUrl}/note/${noteObject.id}`, noteObject, getRequestConfig())
  return response.data
}

const erase = async (id) => {
  const response = await API.delete(`${baseUrl}/note/${id}`, getRequestConfig())
  console.log('response ' + response.data)
  return response.data
}

export default { getAll, getOne, create, modify, erase }
