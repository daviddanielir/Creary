import React, { Component, createContext } from 'react'
import AUTH_SERVICE from './services/AuthService'
import Swal from 'sweetalert2'
import ProductService from './services/productsService'
import axios from 'axios'


export const MyContext = createContext()

class MyProvider extends Component {
  state = {
    loggedUser: false,
    
    formSignup: {
      name: '',
      email: '',
      password: '',
      companyname:'',
      description:'',
      number: '',
      file: {}
      
    },
    loginForm: {
      email: '',
      password: ''
    },

    formAddProduct: {
      nameproduct:'',
      descriptionproduct:'',
      photo:'',
    },
    user: {}
  }

  componentDidMount() {
    if (document.cookie) {
      AUTH_SERVICE.getUser()
        .then(({ data }) => {
          this.setState({ loggedUser: true, user: data.user })
          Swal.fire(`Welcome back ${data.user.name} `, '', 'success')
        })
        .catch(err => console.log(err))
    }
  }

  handleInput = (e, obj) => {
    const a = this.state[obj]
    const key = e.target.name
    a[key] = e.target.value
    this.setState({ obj: a })
  }

  handleSignup = async e => {
    e.preventDefault()
    const formData = new FormData()
    for (let key in this.state.formSignup) {
      formData.append(key, this.state.formSignup[key])
    }
    formData.append('photo', this.state.file)
    const { data } = await AUTH_SERVICE.signup(formData)
    Swal.fire(`Ahora tienes un Perfil, bienvenido ${data.user.name}`, 'Ahora puedes iniciar sesion', 'success')
  }

  handleLogin = (e, cb) => {
    e.preventDefault()
    AUTH_SERVICE.login(this.state.loginForm)
      .then(({ data }) => {
        this.setState({ loggedUser: true, user: data.user })
        Swal.fire(`Bienvenido a tu perfil ${data.user.name} 🤩`)
        cb()
      })
      .catch(err => {
        Swal.fire(`Verifica tus datos`, '🤓', 'error')
      })
  }

  handleLogout = async cb => {
    await AUTH_SERVICE.logout()
    window.localStorage.clear()
    this.setState({ loggedUser: false, user: {} })
    cb()
    Swal.fire(`Hasta pronto 👋🏻 `)

  }
  /// MODELO PRODUCTO
  
  handleCreateProduct = async (e,key) => {
    e.preventDefault()
  const formData = new FormData()
  for (let key in this.state.formAddProduct) {
    console.log(key, this.state.formAddProduct[key])
    formData.append(key, this.state.formAddProduct[key])
  }
  formData.append('photo', this.state.file)
  const { data } = await ProductService.createProduct(formData)
  Swal.fire(`producto creado ${data.user} jijiji`)
}

  handleFile = e => {
    this.setState({ file: e.target.files[0] })
  }
  
  handleSubmit = async e => {
    e.preventDefault()
    const formData = new FormData()
    for (let key in this.state.fakeData) {
      formData.append(key, this.state.fakeData[key])
    }
    formData.append('photo', this.state.file)
    const { data } = await axios.post('http://localhost:3000/upload', formData)
    console.log(data)
  }
  



  render() {
    return (
      <MyContext.Provider
        value={{
          loggedUser: this.state.loggedUser,
          formSignup: this.state.formSignup,
          formAddProduct: this.state.formAddProduct,
          loginForm: this.state.loginForm,
          handleInput: this.handleInput,
          handleSignup: this.handleSignup,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout,
          handleCreateProduct: this.handleCreateProduct,
          handleFile: this.handleFile,
          handleSubmit: this.handleSubmit,
          user: this.state.user

        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }


  
}


export default MyProvider
