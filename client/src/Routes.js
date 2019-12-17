import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar/navbar'
import SignupContainer from './components/Signup/SignupContainer'
import LoginContainer from './components/Login/LoginContainer'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import AddProduct from './components/AddProduct/AddProduct'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Profile from './components/Profile/Profile'



function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/AddProduct" component={AddProduct} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/profile" component={Profile} />

      </Switch>
    </BrowserRouter>
  )
}

export default Routes
