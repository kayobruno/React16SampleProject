import axios from 'axios'

import store from 'state'
import storage from 'services/storage'
import { types } from 'pages/auth/actions'

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
})

api.interceptors.request.use(async (config) => {
  const { headers } = config

  const jwt = await storage.fetch('jwt')
  if (jwt) {
    headers.Authorization = `Bearer ${jwt}`
  }

  return config
})

api.interceptors.response.use(
  response => Promise.resolve(response.data),
  async (error) => {
    if (error.config && error.response) {
      if (error.response.status === 401) {
        const { location } = window
        if (location.pathname !== '/login') {
          storage.save('restoreUrl', `${location.pathname}${location.search}`)
        }
        store.dispatch({ type: types.LOGOUT })
      }
    }

    return Promise.reject(error)
  },
)

export default {
  get: api.get.bind(api),
  post: api.post.bind(api),
  put: api.put.bind(api),
  patch: api.patch.bind(api),
  delete: api.delete.bind(api),
}
