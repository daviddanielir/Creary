import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { MyContext } from '../../context'
import { withRouter } from 'react-router-dom'



const StyledNavbar = styled.nav`
  position: absolut;
  margin-bottom: 30px;
  margin-top: 30px;
  width: 100vw;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 40px;

  & a {
    padding: 7px;
    color: gray
    text-decoration: none;
  }
  & a.navbar-active {
    color: #a1d737;
  }
  & img{
    width: 105px;
    height: 75px;


  }
`

function Navbar(props) {
  return (
    <MyContext.Consumer>
      {context => {
        return (
          <StyledNavbar>



            <img src="/logo.png" alt="logo"/>

            {context.loggedUser && ( 
            <NavLink exact to="/profile" activeClassName="navbar-active">
              Profile
            </NavLink>
            )}


            <NavLink exact to="/" activeClassName="navbar-active">
              Home
            </NavLink>


            {context.loggedUser && ( 
            <NavLink exact to="/about" activeClassName="navbar-active">
              Acerca de 
            </NavLink>
            )}

            <NavLink exact to="/products" activeClassName="navbar-active">
              Products
            </NavLink>
            
            {context.loggedUser && ( 
            <NavLink exact to="/contact" activeClassName="navbar-active">
              Contact
            </NavLink>
            )}
            
            {context.loggedUser && ( 
            <NavLink exact to="/AddProduct" activeClassName="navbar-active">
              Create Products
            </NavLink>
            )}

            {!context.loggedUser && ( 
            <NavLink exact to="/signup" activeClassName="navbar-active">
              Signup
            </NavLink>
            )}

            {!context.loggedUser && (
              <NavLink exact to="/login" activeClassName="navbar-active">
                Login
              </NavLink>
            )}

            {context.loggedUser && (
              <span
                onClick={() =>
                  context.handleLogout(() => {
                    props.history.push('/login')
                  })
                }
              >
                Logout
              </span>
            )}
          </StyledNavbar>
        )
      }}
    </MyContext.Consumer>
  )
}

export default withRouter(Navbar)
