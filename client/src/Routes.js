import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar/navbar'
import SignupContainer from './components/Signup/SignupContainer'
import LoginContainer from './components/Login/LoginContainer'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import AddProduct from './components/AddProduct/AddProduct'
import Services from './components/Services/Services'
import AddService from './components/AddService/AddService'
import Profile from './components/Profile/Profile'




function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/profile" component={Profile} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/addProduct" component={AddProduct} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/addService" component={AddService} />

      </Switch>
    </BrowserRouter>
  )
}

export default Routes
