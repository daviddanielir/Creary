import React from 'react'
import styled from 'styled-components' 
import { MyContext } from '../../context'
import { Card } from 'antd';

const StyledProfile = styled.div`
  color: #d79737;
  justify-content: space-around
  flex-wrap: wrap;
  align-items: flex-start;
  display: flex;
    & form {
      margin-left: 40px;
      
    }
`


export default function Profile() {

  return ( 
  
    <MyContext.Consumer>
    {context => {
      return (
  <StyledProfile>
   <form>
 <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src= {context.user.photoURL} />}
  >


<div>Contact</div>
<p> Bienvenido {context.user.name}</p>
<p>  Mi email: {context.user.email}</p>
<p>  Mi empresa es: {context.user.companyname}</p>
<p>  Mi número de contacto es: {context.user.number}</p>
<p> Mi id de usuario es : {context.user._id}</p>

  </Card>

  </form>
<form>

  <Card
    hoverable
    style={{ width: 240 }}
  >



<p>  Mi empresa es: {context.user.companyname}</p>
<p> y vendo: {context.user.description}</p>

  </Card>,
  </form>
  </StyledProfile>
   )
  }}
</MyContext.Consumer>
)
}






