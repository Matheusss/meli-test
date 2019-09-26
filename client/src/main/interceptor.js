import axios from 'axios'

function beforeRequestHandler(request) {
    return request
}

function beforeResponseHandler(response) {
  return response
}

function errorHandler(error) {
  return Promise.reject(error)
}

axios.interceptors.request.use(beforeRequestHandler, errorHandler)
axios.interceptors.response.use(beforeResponseHandler, errorHandler)
