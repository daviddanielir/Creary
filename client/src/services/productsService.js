import axios from 'axios'

// const baseURL = 'https://git.heroku.com/amar-anto.git'
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
}


export default ProductService
