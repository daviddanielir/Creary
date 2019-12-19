import axios from 'axios'

// const baseURL = 'https://creary.herokuapp.com/'
const baseURL = 'http://localhost:3000'
const service = axios.create({
  baseURL,
  withCredentials: true
})

const ServiceService = {
    getService: data => {
    return service.post('/services', data)
  },
  createService: data => {
    return service.post('/services', data)
  },
  updateService: (data) => {
    return service.get('/services',data)
  },
  getServices: () => {
return service.get('/services')
  }
}


export default ServiceService
