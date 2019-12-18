import axios from "axios"

export default class ProductService {
    // const baseURL = 'https://git.heroku.com/amar-anto.git'
    baseUrl="http://localhost:3000"
    form = axios.create ({
        baseURL: this.baseUrl,
        withCredentials: true
    });
    getProduct(){
        return this.form.get("/products")
    }
    createProduct(productData){
        return this.form.post("/products", productData)
    }
    updateProduct(productData){
        return this.form.patch("/products", productData)
    }
} 