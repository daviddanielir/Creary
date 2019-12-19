import axios from 'axios'

// const baseURL = 'https://creary.herokuapp.com/'
const baseURL = 'http://localhost:3000'
const service = axios.create({
  baseURL,
  withCredentials: true
})

const ProductService = {
    getProduct: data => {
    return service.post('/products', data)
  },
  createProduct: data => {
    return service.post('/products', data)
  },
  updateProduct: (data) => {
    return service.get('/products',data)
  },
  getProducts: async () => {
    return service.get('/products')
  }
}


export default ProductService
